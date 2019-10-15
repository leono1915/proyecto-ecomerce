<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Auth;
class Venta__controller extends Controller
{
    //
    function index(){
        $id=Auth::id();
        $ventas=User::findOrFail($id)->ventas()->get();
        return $ventas->toJson();
    }
}
