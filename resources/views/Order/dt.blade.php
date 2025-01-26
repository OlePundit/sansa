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
                    <h1 class="text-center">Service Order</h1>
                    <h4 class="text-center">We are here to respond to your queries around the clock.</h1>

                </div>
            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
        <div class="order row justify-content-center">
            <div class=" contact" style="width:90%;margin:auto;">
                <div class="row justify-content-center section-contact" >
                    <div class="col-lg-8 col-md-12">
                        <div class="row justify-content-center">
                            <div class="contact-wrap" style="">
                                <div class="col-lg-8 col-md-12">
                                    <h3>Place your order</h3>
                                    <h4>Which service do you want to order?</h4>
                                    <form id="paymentForm">
                                        <div class="row d-flex align-items-center justify-content-center">
                                            <div class="col-xl-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center" style="display:flex;flex-direction:column;">
                                                <div class="form-group">
                                                    <div class="col-md-12">
                                                        <input type="text" class="name text-white" name="name" id="name" placeholder="name">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="text" class="email text-white" name="email" id="email" placeholder="email">
                                                        <input type="hidden" id="orderID" name="orderID">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="text" class="phone text-white" name="phone" id="phone" placeholder="phone">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="text" class="amount text-white" value="1500" id="amount" name="amount" placeholder="amount">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="text" class="category text-white" value="Digital training" id="category" name="category" placeholder="service">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <input type="hidden" value="N/A" name="tier">
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
                                                <a href="mailto:info@sansadigital.com">
                                                    <i class="fas fa-envelope"></i>info@sansadigital.com
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
@section('scripts')
<script>
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Set the value of the hidden input
    document.getElementById('orderID').value = generateRandomString(10); // Change '10' to the desired string length
</script>
@endsection
