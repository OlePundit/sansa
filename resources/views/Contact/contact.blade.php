@extends('layouts.app')

@section('content')
<div id="app" style="background-image:url({{url("/storage/banner.png")}}); background-repeat: no-repeat;  background-size: cover;height:70vh" >
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
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 contact-banner">
                <div class="row">
                    <div class="col-md-12" style="margin-top:150px;">
                        <h1 class="text-center">Contact US</h1>
                        <h4 class="text-center">We are here to respond to your queries around the clock.</h1>

                    </div>
                </div>
            </div>
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
                                    <form method="POST" action="/c">
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
                                            <li class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_718_108)" filter="url(#filter0_d_718_108)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88498 0.510903C6.05996 0.336191 6.27006 0.200661 6.50138 0.113293C6.7327 0.0259244 6.97994 -0.0112866 7.22672 0.00412564C7.47351 0.0195378 7.7142 0.0872213 7.93285 0.202691C8.15149 0.31816 8.34311 0.478779 8.49498 0.673903L10.29 2.9799C10.619 3.4029 10.735 3.9539 10.605 4.4739L10.058 6.6639C10.0297 6.77733 10.0312 6.89615 10.0624 7.00881C10.0936 7.12148 10.1534 7.22416 10.236 7.3069L12.693 9.7639C12.7758 9.84666 12.8787 9.90655 12.9915 9.93774C13.1044 9.96893 13.2234 9.97037 13.337 9.9419L15.526 9.3949C15.7826 9.33074 16.0504 9.32576 16.3093 9.38033C16.5681 9.4349 16.8111 9.5476 17.02 9.7099L19.326 11.5039C20.155 12.1489 20.231 13.3739 19.489 14.1149L18.455 15.1489C17.715 15.8889 16.609 16.2139 15.578 15.8509C12.9392 14.9224 10.5433 13.4117 8.56798 11.4309C6.58727 9.45592 5.07659 7.06036 4.14798 4.4219C3.78598 3.3919 4.11098 2.2849 4.85098 1.5449L5.88498 0.510903Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_718_108" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset dy="4"/>
                                                    <feGaussianBlur stdDeviation="2"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_108"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_718_108" result="shape"/>
                                                    </filter>
                                                    <clipPath id="clip0_718_108">
                                                    <rect width="16" height="16" fill="white" transform="translate(4)"/>
                                                    </clipPath>
                                                </defs>
                                                </svg>07797262808
                                            </li>
                                            <li class="text-white mx-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                                <g filter="url(#filter0_d_718_110)">
                                                    <path d="M4.05 3.555C4.15082 3.11324 4.39866 2.71881 4.75292 2.43631C5.10719 2.1538 5.54688 1.99997 6 2H18C18.4531 1.99997 18.8928 2.1538 19.2471 2.43631C19.6013 2.71881 19.8492 3.11324 19.95 3.555L12 8.414L4.05 3.555ZM4 4.697V11.801L9.803 8.243L4 4.697ZM10.761 8.83L4.191 12.857C4.35333 13.1993 4.60953 13.4884 4.92978 13.6908C5.25004 13.8931 5.62117 14.0004 6 14H18C18.3788 14.0001 18.7498 13.8926 19.0698 13.6901C19.3899 13.4876 19.6459 13.1983 19.808 12.856L13.238 8.829L12 9.586L10.761 8.83ZM14.197 8.244L20 11.801V4.697L14.197 8.243V8.244Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_718_110" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset dy="4"/>
                                                    <feGaussianBlur stdDeviation="2"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_110"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_718_110" result="shape"/>
                                                    </filter>
                                                </defs>
                                                </svg>info@sansa.digital
                                            </li>


                                            <li class="text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_718_112)" filter="url(#filter0_d_718_112)">
                                                    <path d="M16.6 0.75H19.054L13.694 6.892L20 15.25H15.063L11.196 10.18L6.771 15.25H4.316L10.049 8.68L4 0.75H9.063L12.558 5.383L16.6 0.75ZM15.74 13.778H17.1L8.323 2.145H6.865L15.74 13.778Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_718_112" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset dy="4"/>
                                                    <feGaussianBlur stdDeviation="2"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_112"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_718_112" result="shape"/>
                                                    </filter>
                                                    <clipPath id="clip0_718_112">
                                                    <rect width="16" height="16" fill="white" transform="translate(4)"/>
                                                    </clipPath>
                                                </defs>
                                                </svg>Sansa Digital
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