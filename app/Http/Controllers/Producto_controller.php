<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Productoventa;

class Producto_controller extends Controller
{
    //
   public function index()
      {
        $projects = Productoventa::where('id_user', auth()->id())
                            ->orderBy('created_at', 'desc')->get();

        return $projects->toJson();
      }

      public function store(Request $request)
      {
        $validatedData = $request->validate([
          'name' => 'required',
          'description' => 'required',
        ]);

        $project = Productoventa::create([
          'name' => $validatedData['name'],
          'description' => $validatedData['description'],
        ]);

        return response()->json('Producto created!');
      }

      public function show($id)
      {
        $project = Productoventa::with(['tasks' => function ($query) {
          $query->where('is_completed', false);
        }])->find($id);

        return $project->toJson();
      }

      public function markAsCompleted(Producto $project)
      {
        $project->is_completed = true;
        $project->update();

        return response()->json('Producto updated!');
      }
}
