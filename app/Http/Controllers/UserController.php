<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterAuthRequest;
use App\User;
use Illuminate\Http\Request;
use  JWTAuth;
use Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
class  UserController extends  Controller {
	public  $loginAfterSignUp = true;

	public  function  register(Request  $request) {
		$validator = Validator::make($request->json()->all() , [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6', 
		]);
		
	
        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
        }
		$user = new  User();
		$user->name = $request->name;
		$user->email = $request->email;
		$user->password = bcrypt($request->password);
		$user->save();

		if ($this->loginAfterSignUp) {
			return  $this->login($request);
		}

		return  response()->json([
			'status' => 'ok',
			'data' => $user
		], 200);
	}

	public  function  login(Request  $request) {
		$input = $request->only('email', 'password');
		$jwt_token = null;
		if (!$jwt_token = JWTAuth::attempt($input)) {
			return  response()->json([
				'status' => 'invalid_credentials',
				'message' => 'Correo o contraseña no válidos.',
			], 401);
		}

		return  response()->json([
			'status' => 'ok',
			'token' => $jwt_token,
		]);
	}

	public  function  logout() {
		$token=JWTAuth::getToken();
		try {
			JWTAuth::invalidate($token);
			return  response()->json([
				'status' => 'ok',
				'message' => 'Cierre de sesión exitoso.'
			], 200 );
		} catch (JWTException  $exception) {
			return  response()->json([
				'status' => 'unknown_error',
				'message' => 'Al usuario no se le pudo cerrar la sesión.'
			], 500);
		}
	}

	
	public function getUser(){

		$id=Auth::id();
		$user=User::findOrFail($id);
		return $user->toJson();
	}
}