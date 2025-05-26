<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/salama-smart-safe/privacy-policy', [App\Http\Controllers\HomeController::class, 'privacy'])->name('privacy');
Route::get('/salama-smart-safe/account-deletion', [App\Http\Controllers\HomeController::class, 'deletion'])->name('deletion');
Route::get('/about', [App\Http\Controllers\HomeController::class, 'about'])->name('about');
Route::get('/lps/webdesign', [App\Http\Controllers\LPController::class, 'webdesign'])->name('webdesign');
Route::get('/lps/digital-training', [App\Http\Controllers\LPController::class, 'digitalmarketing'])->name('digitalmarketing');
Route::get('/lps/it-support-and-help-desk', [App\Http\Controllers\LPController::class, 'IT'])->name('IT');
Route::get('/dt/order', [App\Http\Controllers\LPController::class, 'order'])->name('dtorder');
Route::get('/services/{slug}', [App\Http\Controllers\ServiceController::class, 'service']);
Route::get('/contact', [App\Http\Controllers\HomeController::class, 'contact']);
Route::get('/blogs',[App\Http\Controllers\BlogController::class, 'index']);
Route::get('/services',[App\Http\Controllers\ServiceController::class, 'index']);
Route::post('/n', [App\Http\Controllers\HomeController::class, 'newsletter']);
Route::get('/order/{package}',[App\Http\Controllers\HomeController::class, 'order']);
Route::get('/callback', [PaymentController::class, 'handleGatewayCallback'])->name('callback');
Route::post('/pay', [PaymentController::class, 'redirectToGateway'])->name('pay');
Route::get('success', [PaymentController::class, 'success'])->name('success');

Route::get('cancel', [PaymentController::class, 'cancel'])->name('cancel');
Route::get('/blogs/{slug}', [App\Http\Controllers\BlogController::class, 'blog']);
Route::post('/c', [App\Http\Controllers\ContactController::class, 'store']);
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
