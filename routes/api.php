<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\NewsletterController;
use App\Http\Controllers\API\AboutController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\LpController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\HomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public read routes
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{blog}', [BlogController::class, 'show']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{service}', [ServiceController::class, 'show']);
Route::get('/lps', [LpController::class, 'index']);
Route::get('/lps/{lp}', [LpController::class, 'show']);
Route::get('/home', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::apiResource('/users', AuthController::class)->only(['index', 'show']);

// Auth
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'sendResetLink']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::get('/success', [PaymentController::class, 'success'])->name('success');
Route::get('/callback', [PaymentController::class, 'handleGatewayCallback'])->name('callback');

// Protected routes (require auth token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/validate-token', [AuthController::class, 'validateToken']);

    // Admin: Blog CRUD
    Route::post('/blogs', [BlogController::class, 'store']);
    Route::put('/blogs/{blog}', [BlogController::class, 'update']);
    Route::patch('/blogs/{blog}', [BlogController::class, 'update']);
    Route::delete('/blogs/{blog}', [BlogController::class, 'destroy']);

    // Admin: LP CRUD
    Route::post('/lps', [LpController::class, 'store']);
    Route::put('/lps/{lp}', [LpController::class, 'update']);
    Route::patch('/lps/{lp}', [LpController::class, 'update']);
    Route::delete('/lps/{lp}', [LpController::class, 'destroy']);

    // Admin: Service CRUD
    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{service}', [ServiceController::class, 'update']);
    Route::patch('/services/{service}', [ServiceController::class, 'update']);
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']);

    // Admin: View contact submissions
    Route::get('/contact', [ContactController::class, 'index']);

    // Newsletter & payments
    Route::apiResource('/newsletter', NewsletterController::class);
    Route::post('/pay', [PaymentController::class, 'redirectToGateway'])->name('pay');
    Route::get('/cancel', [PaymentController::class, 'cancel'])->name('cancel');
});
