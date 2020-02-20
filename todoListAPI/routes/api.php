<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
 //   return $request->user();
//});

// todos API endpoints.

Route::get('/todo','TodoController@all')->middleware('auth:api');
Route::post('/todo','TodoController@store')->middleware('auth:api');
Route::put('/todo/{id}','TodoController@update')->middleware('auth:api');
Route::delete('/todo/{id}','TodoController@destroy')->middleware('auth:api');

// user API endpoints.

Route::post('/register','UserController@register');
Route::post('/login','UserController@login');