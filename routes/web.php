<?php

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
Route::get('/',function(){
    return view('welcome');
});


Auth::routes();
Route::get('/welcome','InicioController@index')->name('welcome');
//Route::view('/{path?}','home')->middleware('auth');
/*Route::resource('/productos','Producto_controller')->middleware('auth');*/
//Route::view('/{path?}', 'home');
Route::get('/home', 'HomeController@index')->name('home');
