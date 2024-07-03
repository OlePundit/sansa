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
Route::get('/about', [App\Http\Controllers\HomeController::class, 'about'])->name('about');
Route::get('/services/{slug}', [App\Http\Controllers\ServiceController::class, 'service']);
Route::get('/contact', [App\Http\Controllers\HomeController::class, 'contact']);
Route::get('/blogs',[App\Http\Controllers\BlogController::class, 'index']);
Route::get('/services',[App\Http\Controllers\ServiceController::class, 'index']);

Route::get('/blogs/{slug}', [App\Http\Controllers\BlogController::class, 'blog']);
Route::post('/c', [App\Http\Controllers\ContactController::class, 'store']);
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
