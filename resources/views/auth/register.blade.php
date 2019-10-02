@extends('layouts.app')

@section('content')
<section id="form"><!--form-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form"><!--login form-->
						<h2>Ingresa a tu cuenta</h2>
                        <form method="POST" action="{{ route('login') }}">
                        @csrf	
                        <label for="email" class="col-md-8 col-form-label text-md-right">{{ __('Email') }}</label>
         <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                <label for="password" class="col-md-8 col-form-label text-md-right">{{ __('Password') }}</label>
         <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                           @error('password')
                               <span class="invalid-feedback" role="alert">
                                   <strong>{{ $message }}</strong>
                               </span>
                           @enderror
							<span>
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                               <label class="form-check-label" for="remember">
                                   {{ __('Recordarme') }}
                               </label>
							</span>
							<button type="submit" class="btn btn-primary">
                                    {{ __('Ingresar') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('olvidó su contraseña?') }}
                                    </a>
                                @endif
						</form>
					</div><!--/login form-->
				</div>
				<div class="col-sm-1">
					<h2 class="or">Ó</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form"><!--sign up form-->
						<h2>No tienes una cuenta! <br> regístrate y compra en línea</h2>
                        <form method="POST" action="{{ route('register') }}">
                        @csrf

                        
                            <label for="name" class="col-md-8 col-form-label text-md-right">{{ __('Nombre') }}</label>

                          
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                           

                      
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail') }}</label>

                           
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert" style="color:red; font-size:20px"> 
                                        <strong> este email ya está registrado</strong>
                                    </span>
                                @enderror
                           

                      
                            <label for="password" class="col-md-8 col-form-label text-md-right">{{ __('Password') }}</label>

                            
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert"  style="color:red; font-size:20px">
                                        <strong>La contraseña no es la misma</strong>
                                    </span>
                                @enderror
                          

                      
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirma Password') }}</label>

                           
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                          

                        
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Registro') }}
                                </button>
                          
                    </form>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>
	</section><!--/form-->
@endsection
