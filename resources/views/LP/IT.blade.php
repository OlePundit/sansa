@extends('layouts.app')

@section('content')
<div id="app" class="about lp">
    <div style="background-image:url({{url("/storage/about.png")}});background-repeat: no-repeat;  background-size: cover;height:70%" >

        <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
            <img src="/storage/whiteai.png" class="mx-3" width="200" alt="logo">
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
                    <a class="nav-link text-white" href="https://wa.me/+254112128055"><i class="fab fa-whatsapp" style="margin-right:10px;"></i>Always online</a>
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
        <div class="col-md-12 about-banner" >


            <div class="row" style="overflow:hidden;w">
                <div class="about-heading col-md-6 col-sm-12">
                    <h1>{{$its->title}}</h1>
                    <p>{!! $its->intro !!}
                    </p>
                    <a href="/contact" class="btn">Get Started</a>
                </div>
                <img src="/storage/{{$its->img1}}" class="aboutImg" height="417px;" alt="hero-img">

            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
            <div class="row justify-content-center info">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/storage/{{$its->img2}}" class="" alt="info-img">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>{{$its->title1}}</h2>
                    </br>
                    <p>{!! $its->benefits !!}</p>
                    <a href="/contact" class="btn">Learn More</a>

                </div>
            </div>
            <div class="row justify-content-center faq">
                <h2>FAQs</h2>
                <div class="col-lg-12">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{$its->faq1}}
                            </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {!! $its->ans1 !!}
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                {{$its->faq2}}
                            </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {!! $its->ans2 !!}
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                {{$its->faq3}}
                            </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {!! $its->ans3 !!}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection
@section('scripts')

@endsection
