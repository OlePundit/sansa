@extends('layouts.app')

@section('content')
<div id="app" style="background-image: url('{{url("/storage/{$slug->thumbnail}")}}'); background-repeat: no-repeat; background-size: cover;height:70vh" >
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
      <div class="container">
          <a class="navbar-brand" href="{{ url('/') }}">
          <img src="/storage/whiteai.png" width="260">
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
                  <a class="nav-link text-white" href="/#section-prices">Packages</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-white" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-white" href="/blogs">Blog</a>
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
        

    <main class="">
        <div class="container service">
            <div class="row justify-content-center">
                <div class="col-md-12 service-banner" >


                    <div class="row">
                        <div class="col-md-12 header" style="">
                            <h1 class="text-center">{{$slug->title}}</h1>
                            <h4 class="text-center">home >> services >> {{$slug->title}}</h1>

                        </div>
                    </div>
                </div>
                <div class="" style="width:100%;margin:auto;">
                    <div class="row section-service" style="align-items:flex-start;justify-content:flex-start;">
                        <div class="col-lg-2 mx-2 col-md-12 d-flex justify-content-center align-items-center author" style="flex-direction:column; margin-top:100px;">
                            <img src="/storage/author.png" class="roounded-circle" height="200px" width="200px">
                            <h5 class="text-center">OlePundit</h5>
                            <h6 class="text-center">{{$slug->created_at}}</h6>

                        </div>
                        <div class="col-lg-9 col-md-12 body">
                        {!! $slug->body !!}
                            <div class="row">
                                <button>Request Quotation</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 section-more">
                    @foreach($moreServices as $moreService)
                    <a href="/services/{{$moreService->slug}}" style="text-decoration:none;" class="custom-card">
                        <img src="/storage/{{$moreService->thumbnail}}" class="card-img-top">
                        <div class="card-body">
                            <h4>{{$moreService->title}}</h4>
                            <p>{!! Str::limit(strip_tags($moreService->body), 120, '...') !!}...</p>
                            <button>Read more</button>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
        </div>
@endsection