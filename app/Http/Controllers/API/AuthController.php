<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\V1\UpdateUserRequest;
use App\Http\Resources\V1\UserResource;
use App\Http\Resources\V1\UserCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();
        $users = $query->paginate();
    
        return new UserCollection($users);
    }
    
    public function show($userId)
    {
        // Retrieve the user with the 'brand' relationship eagerly loaded
        $user = User::with('jobs')->find($userId);

        // Check if the user exists
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return new UserResource($user);
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'user_type'=>$data['user_type'],
            'password'=>bcrypt($data['password']),
        ]);
        //$user->assignRole('client');

       $token = $user->createToken('main')->plainTextToken;

       return response(compact('user','token'));
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message'=>'provided email address or password is incorrect'
            ], 422);
        }

        $user = Auth::user();
        $token= $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));

    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
    public function sendResetLink(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink($request->only('email'));

        return response()->json(['status' => __($status)]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
            'token' => 'required',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->save();
            }
        );

        return response()->json(['status' => __($status)]);
    }
    public function update(UpdateUserRequest $request, User $user)
    {
        \Log::info('Request data:', $request->validated());
    
        try {
            $data = $request->validated(); // Ensure that the data is validated and not null
            \Log::info('Validated data:', $data);
    
            // Handle image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $randomName = Str::random(10); // Adjust the length as needed
                $currentTime = now()->format('YmdHis');
                $extension = 'png';
                $attachmentName = $randomName . '_' . $currentTime . '.' . $extension;
                $storedPath = $image->storeAs('uploads', $attachmentName, 'public');
                $data['image'] = $storedPath;
    
                // Delete old image if exists
                if ($user->image) {
                    $absolutePath = public_path($user->image);
                    if (File::exists($absolutePath)) {
                        File::delete($absolutePath);
                    }
                }
            } else {
                // Don't update image path if no new image is uploaded
                unset($data['image']);
            }
    
            $user->update($data);
            \Log::info('Updated data:', $data);
    
            return new UserResource($user);
        } catch (\Exception $e) {
            \Log::error('Update error:', ['message' => $e->getMessage()]);
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function validateToken(Request $request)
    {
        try {
            // Check if the user is authenticated
            if (Auth::check()) {
                // Return user data if token is valid
                return response()->json([
                    'status' => 'success',
                    'user' => Auth::user()
                ]);
            } else {
                // Token is invalid or user is not authenticated
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid or expired token.'
                ], 401);
            }
        } catch (\Exception $e) {
            // Log the exception and return a generic error response
            \Log::error('Token validation error: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during token validation.'
            ], 500);
        }
    }
    public function images(Request $request)
    {
        \Log::info('Request payload:', $request->all());
    
        $userIds = $request->input('user_ids', []);
        \Log::info('These are the userIds:', $userIds);
    
        if (!is_array($userIds)) {
            return response()->json(['message' => 'Invalid user IDs'], 400);
        }
    
        $images = [];
    
        foreach ($userIds as $userId) {
            $user = User::find($userId); // Use find to return null if not found
    
            if ($user) {
                $imagePath = $user->image;
    
                if ($imagePath && Storage::disk('public')->exists($imagePath)) {
                    $fileContents = Storage::disk('public')->get($imagePath);
                    $base64Image = base64_encode($fileContents);
                    $images[$userId] = 'data:image/png;base64,' . $base64Image;
                } else {
                    $images[$userId] = null;
                }
            } else {
                $images[$userId] = null; // Corrected the typo here
            }
        }
    
        return response()->json($images);
    }
    

}
