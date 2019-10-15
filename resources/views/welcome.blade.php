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
   
    <div id="index"></div> 

<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/js/jquery.js') }}"></script>
<script src="{{ asset('js/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/js/jquery.scrollUp.min.js') }}"></script>
<script src="{{ asset('js/js/price-range.js') }}"></script>
<script src="{{ asset('js/js/jquery.prettyPhoto.js') }}"></script>
<script src="{{ asset('js/js/main.js') }}"></script>
    </body>
</html>
