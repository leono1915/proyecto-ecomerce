<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->

        <link href="{{ asset('css/css/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/prettyPhoto.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/price-range.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/animate.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/main.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/responsive.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
		<meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
    <header id="header">
		<!--header-->
		<div class="header_top" style="background-color:#0c0b0bc9">
			<!--header_top-->
			<div class="container">
				<div class="row">
					<div class="col-sm-25">
						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i> 36-19-36-63</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> elhierro@live.com.mx</a></li>
							</ul>
						</div>
					</div>
					<div class="mainmenu pull-right">
						<ul class="nav navbar-nav collapse navbar-collapse">
							<li><a href="index.html" class="active">INICIO</a></li>
							<li class="dropdown"><a href="#">PRODUCTOS<i class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu">
									<!--  <li><a href="shop.html">Products</a></li>-->
									<li><a href="product-details.html">LISTADO</a></li>
									<li><a href="checkout.html">SERVICIOS</a></li>
									<!--<li><a href="cart.html">CARRITO</a></li>
									<li><a href="login.html">PEDIDOS</a></li>-->
								</ul>
							</li>
							<li class="dropdown"><a href="contact-us.html">CONTACTO<i class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu">
									<li><a href="blog.html">VÉNDENOS</a></li>
									<!--<li><a href="blog-single.html">REGISTRATE</a></li>-->
									<li><a href="blog-single.html">COTIZA</a></li>
								</ul>
							</li>

							<li><a href="contact-us.html">NOSOTROS</a></li>
						</ul>
					</div>
					<div class="col-sm-8">
						<div class="social-icons pull-left">
							<ul class="nav navbar-nav">
								<a href="https://api.whatsapp.com/send?phone=523329269433&text=hola,%20buenos%20dias%20"
									target="-blank">
									<i id="wats" class="fab fa-whatsapp"></i></a>
								<a href="https://es-la.facebook.com/pg/Aceros8dejulio/posts/" target="-blank">
									<i id="face" class="fab fa-facebook"></i></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/header_top-->



		<div class="container">
			<div class="row">
				<div class="col-md-4 clearfix">
					<div class="logo pull-left " style="margin-top: 60px;">
						<a href="/"><img src="images/logo_opt.png" alt="" /></a>
					</div>
					<div class="btn-group pull-right clearfix">
						<div class="btn-group">

							<ul class="dropdown-menu">
								<li><a href="">Canada</a></li>
								<li><a href="">UK</a></li>
							</ul>
						</div>

						<div class="btn-group">

							<ul class="dropdown-menu">
								<li><a href="">Canadian Dollar</a></li>
								<li><a href="">Pound</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-8 clearfix ">
					<div class="shop-menu clearfix pull-right item active ">
						<h1><span> Rapidez</span> Es Nuestro Compromiso</h1>
						<ul class="nav navbar-nav pull-right">
                        @if (Route::has('login'))
              
                    @auth
                    <li><a href="{{ route('home') }}"><i class="fa fa-user"></i> Mi Cuenta</a></li>
                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Carrito</a></li>
                   
                    @else
                       
                        <li><a href="{{ route('login') }}"><i class="fa fa-lock"></i> Login</a></li>

                        @if (Route::has('register'))
                          
                            <li><a href="{{ route('register') }}"><i class="fa fa-registered"></i>Registro</a></li>
                        @endif
                    @endauth
                
            @endif

                          
							
							
						<!--	<li><a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a></li>-->
							
							
						</ul>
					</div>
				</div>
			</div>
		</div>
		</div>
		<!--/header-middle-->

		<div class="header-bottom">
			<!--header-bottom-->
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse"
								data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>

					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/header-bottom-->
	</header>
    <div id="example"></div> 
<div id="footer"></div>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/js/jquery.js') }}"></script>
<script src="{{ asset('js/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/js/jquery.scrollUp.min.js') }}"></script>
<script src="{{ asset('js/js/price-range.js') }}"></script>
<script src="{{ asset('js/js/jquery.prettyPhoto.js') }}"></script>
<script src="{{ asset('js/js/main.js') }}"></script>
    </body>
</html>
