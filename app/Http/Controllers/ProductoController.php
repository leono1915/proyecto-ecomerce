<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Producto;
use Illuminate\Support\Facades\DB;
class ProductoController extends Controller
{
    //
    public function __construct()
    {
      $this->middleware('auth');
    }

    public function index()
    {
      $projects = Producto::where('nombre','!=', 'concepto')
                          ->get();

      return $projects->toJson();
    }
    public function sublista(){
      $projects = Producto::select('nombre',DB::raw('SUM(cantidad) as total'))->where('nombre','!=','concepto')->where('nombre','!=','puli')->
       havingRaw('SUM(cantidad) > ?',[50])->groupBy('nombre')->get();
     /* select('nombre', DB::raw('SUM(cantidad) as total_sales'))
      ->groupBy('nombre')
      ->havingRaw('SUM(cantidad) > ?', [50])
      ->get();*/
      //

      return $projects->toJson();
    }
}
