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

/*Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');*/
Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('producto_venta', 'Producto_controller@index');
Route::get('productos', 'ProductoController@index');
Route::get('productos/sub', 'ProductoController@sublista');
Route::get('productos/{id}', 'Producto_controller@show');
Route::put('productos/{id}', 'Producto_controller@markAsCompleted');
