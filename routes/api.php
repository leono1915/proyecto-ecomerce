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
/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


//retorna todos los productos cotizados con sus peso 
Route::post('productosCotizados', 'ProductoController@productosCotizados');
// retorna nombre medida y espesor para cotizar
Route::get('productosCotizador','ProductoController@productosCotizador');
//me regresa todos los productos agrupados junto con su cuenta es para la galeria inicial
Route::get('productosInicio', 'ProductoController@productosPaginaInicio');

/*Route::get('productos/{id}', 'Producto_controller@show');
Route::put('productos/{id}', 'Producto_controller@markAsCompleted');*/
