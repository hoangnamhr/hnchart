<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/pie-chart', 'HomeController@index');
Route::get('/bar-chart', 'HomeController@index');
Route::get('/doughnut-chart', 'HomeController@index');
Route::get('/line-chart', 'HomeController@index');
