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
Route::get('producto_venta', 'Producto_controller@index');
Route::post('productos', 'Producto_controller@store');
Route::get('productos/{id}', 'Producto_controller@show');
Route::put('productos/{id}', 'Producto_controller@markAsCompleted');
/*Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
