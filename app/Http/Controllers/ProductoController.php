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
     // $this->middleware('auth');
    }
    
    public function productosCotizador()
    {
      $projects = Producto::select('nombre','medida','espesor')->where('nombre','!=', 'concepto')
                          ->get();

      return $projects->toJson();
    }
    public function productosCotizados(Request $request)
    {
      //
      $projects = Producto::where('nombre','=', $request->input('nombre'))->where('medida','=',$request->input('medida'))
      ->where('espesor','=',$request->input('espesor'))
                          ->get();

      return $projects->toJson();
    }
    public function productosPaginaInicio(){
      $projects = Producto::select('nombre',DB::raw('SUM(cantidad) as total'))->where('nombre','!=','concepto')->where('nombre','!=','puli')->
       havingRaw('SUM(cantidad) > ?',[50])->groupBy('nombre')->get();
      return $projects->toJson();
    }
}
