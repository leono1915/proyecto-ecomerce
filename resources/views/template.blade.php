








<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Tasksman</title>
        <!-- Styles -->
       <!-- <link href="{{ asset('css/app.css')}}"  rel="stylesheet">-->
        <link href="{{ asset('css/css/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/font-awesome.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/prettyPhoto.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/price-range.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/animate.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/main.css') }}" rel="stylesheet">
        <link href="{{ asset('css/css/responsive.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    </head>
    <body>
       <!-- <div id="example"></div>-->
       <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
  
</head>
<body>
    <div id="example"></div>
    
</body>
</html>

       <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/js/jquery.js') }}"></script>
	<script src="{{ asset('js/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('js/js/jquery.scrollUp.min.js') }}"></script>
	<script src="{{ asset('js/js/price-range.js') }}"></script>
	<script src="{{ asset('js/js/jquery.prettyPhoto.js') }}"></script>
	<script src="{{ asset('js/js/main.js') }}"></script>
    </body>
    </html>