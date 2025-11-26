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
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/validate-token', [AuthController::class, 'validateToken']);
    Route::apiResource('/newsletter',NewsletterController::class);
    Route::apiResource('/contact',ContactController::class)->only(['store']);
    Route::apiResource('/lps',LpController::class)->only(['index','show']);
    Route::post('/pay', [PaymentController::class, 'redirectToGateway'])->name('pay');
    Route::get('cancel', [PaymentController::class, 'cancel'])->name('cancel');

});
Route::apiResource('/services',ServiceController::class)->only(['show','index']);
Route::apiResource('/blogs',BlogController::class);
Route::apiResource('/users', AuthController::class);
Route::apiResource('/home',HomeController::class)->only(['index']);
Route::apiResource('/about',AboutController::class)->only(['index']);
Route::apiResource('/services',ServiceController::class)->only(['show','index']);
Route::apiResource('/lps',LpController::class);

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot-password', [AuthController::class, 'sendResetLink']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::get('success', [PaymentController::class, 'success'])->name('success');
Route::get('/callback', [PaymentController::class, 'handleGatewayCallback'])->name('callback');
