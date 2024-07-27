@extends('layouts.app')

@section('content')
<div id="app">
    <div style="background-image:url({{url("/storage/banner.png")}}); background-repeat: no-repeat;  background-size: cover;height:70%" >

        <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
            <img src="/storage/whiteai.png" width="260" alt="logo">
            </a>                    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link text-white" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/about">About</a>
                </li>
                <li class="dropdown nav-item">
                    <a class= "dropdown-toggle nav-link text-white" href="#" style="text-decoration:none;" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        @foreach($services as $service)
                        <a class="dropdown-item text-white" href="/services/{{$service->slug}}">{{$service->title}}</a>
                        @endforeach
                    </div>                           
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/#section-projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/blogs">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="https://wa.me/+254797262808"><i class="fab fa-whatsapp" style="margin-right:10px;"></i>Always online</a>
                </li>
            </ul>



                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <!-- Authentication Links -->
                    @guest
                        @if (Route::has('login'))
        
                        @endif

                        @if (Route::has('register'))
        
                        @endif
                    @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
        </nav>
        <div class="col-md-12 contact-banner">
            <div class="row">
                <div class="col-md-12" style="margin-top:150px;">
                    <h1 class="text-center">Contact US</h1>
                    <h4 class="text-center">We are here to respond to your queries around the clock.</h1>

                </div>
            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
        <div class="row justify-content-center">
            <div class=" contact" style="width:90%;margin:auto;">
                <div class="row justify-content-center section-contact" >
                    <div class="col-md-10 col-sm-12">
                        <div class="row">
                            <div class="contact-wrap" style="">
                                <div class="col-xl-4 col-lg-12 col-md-12 map" style="">
                                    <div id="map">
                                        <iframe src="https://maps.google.com/maps?q=Kahawa%20Sukari&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="670px" frameborder="0" style="border:0; border-radius: 23px;" allowfullscreen="" alt="google-maps"></iframe>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-12 col-md-12">
                                    <h3>CONTACT US</h3>
                                    <h4>Fill in your contact details</h4>
                                    <form method="POST" action="https://formsubmit.co/info@sansa.digital">
                                    @csrf
                                        <div class="row d-flex align-items-center justify-content-center">
                                            <div class="col-xl-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center" style="display:flex;flex-direction:column;">
                                                <div class="form-group">
                                                    <div class="col-md-12">
                                                        <input type="text" class="name text-white" name="name" placeholder="name">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="text" class="email text-white" name="email" placeholder="email">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <textarea type="text" class="message text-white" name="message" placeholder="message"></textarea>
                                                    </div>
                                                </div>

                                                    <button class="btn btn-primary col-sm-12 mt-5">Submit</button>

                                            </div>
                                        </div>
                                    </form>
                                
                                        <ul style="list-style-type:none;display:flex;margin-top:32px;align-items:center;justify-content:center;">
                                            <li class="text-white text-center">
                                                <a href="tel:+254112128055"> 
                                                    <i class="fas fa-phone"></i>+254112128055
                                                </a>
                                            </li>
                                            <li class="text-white text-center mx-3">
                                                <a href="mailto:info@sansa.digital">
                                                    <i class="fas fa-envelope"></i>info@sansa.digital
                                                </a>
                                            </li>


                                            <li class="text-white text-center">
                                                <a class="Ztext-white" href="https://wa.me/+254112128055">
                                                    <i class="fab fa-whatsapp"></i>
                                                online
                                                </a>
                                            </li>
                            
                                        </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection