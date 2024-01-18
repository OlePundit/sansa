@extends('layouts.app')

@section('content')
<div id="app" style="background: radial-gradient(104.85% 104.85% at 50% 0%, rgba(23, 23, 23, 0.00) 61%, #171717 90.5%), url('{{url("/storage/header.png")}}') center center / cover no-repeat;height:100vh;" >
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
        <div class="col-md-12 header-banner" >            

            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h1>Sansa Digital</h1>
                    <p>We are the #1 web development, web design, graphic design,
                    SEO, content and social media marketing company in Kenya.</p>
                    <a href="#section-info" ><button style="border:none;" class="btn">Learn More</button></a>
                </div>
            </div>
        </div>
        <div class="" style="margin:auto;">
            <div class="section-info d-flex justify-content-center align-items-center  " id="section-info">
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-5 col-md-6 col-sm-10 col-xs-12">
                            <div class="custom-card wow flipInY" style="">
                                <img src="/storage/tech.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Cutting edge technology</h5>
                                    <p class="card-text">We employ emerging technologies</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-10">
                            <div class="custom-card1 animate__animated animate__flipInX animate__delay-3s" style="">
                                <img src="/storage/data.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Data driven marketing</h5>
                                    <p class="card-text">Our marketing is informed by the data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-6 col-sm-10">
                            <div class="custom-card" style="">
                                <img src="/storage/bold.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">We are Bold</h5>
                                    <p class="card-text">We are not afraid to try new techniques</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-10">
                            <div class="custom-card">
                                <img src="/storage/limit.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">We Push the limits</h5>
                                    <p class="card-text">We defy the rules and push the limits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-placeholder-1"></div>

                <div class="col-lg-5 col-md-12 col-sm-12 info">
                    <h2>We Provide <span id="typing-container-1"></span> To Your Problems</h2>
                    <p>We are a team of experts from different technical and creative backgrounds, with one goal in mind. To change the competitive landscape in the space.</p>
                    <a href="/#section-services" class="btn">Learn More</a>

                </div>

                </div>



                    

            </div>
            <div class="section-services" id="section-services">
                <div id="section-placeholder-2"></div>
                <div class="row d-flex justify-content-center align-items-center">
                    <h3 class="text-center">Our <span id="typing-container-2"></span></h3>

                </div>
                <div class="row">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="service-box wow fadeInLeft" style="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>Web design and development</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                    <p>We shall create a responsive and modern website for your business to help you interact with prospective online customers.</p>
                                    <div class="enter-box">
                                        <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                        <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                        </svg>
                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="service-box wow fadeInDown" style="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>SEO</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                <p>We will optimize your page for different search engines to improve your page traffic, and click through rate</p>
                                <div class="enter-box">
                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"/>
                                    </svg>
                                
                                </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="service-box wow fadeInRight" style="">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>Graphic Design</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                <p>Posters, banners, publications, flyers, and social media content. We shall create graphics that tell a story</p>
                                <div class="enter-box">
                                    <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                    </svg>
                                
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center" style="">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="service-box wow fadeInLeft">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>Digital and social media marketing</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                <p>We shall create a responsive and modern website for your business to help you interact with prospective online customers.</p>
                                <div class="enter-box">
                                    <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                    </svg>
                                
                                </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="service-box wow fadeInUp">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>Social Listening</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                <p>We have tools to constantly monitor social media trends and obtain real-time insights. Are you a PR firm? A political campaign? Let us provide you with analyzed data.</p>
                                <div class="enter-box">
                                    <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                    </svg>
                                
                                </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="service-box wow fadeInRight">
                                <div class="icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <g clip-path="url(#clip0_569_19)">
                                        <path d="M23.8133 0H10.25C8.89077 0 7.5872 0.539954 6.62608 1.50108C5.66495 2.4622 5.125 3.76577 5.125 5.125V35.875C5.125 37.2342 5.66495 38.5378 6.62608 39.4989C7.5872 40.46 8.89077 41 10.25 41H30.75C32.1092 41 33.4128 40.46 34.3739 39.4989C35.335 38.5378 35.875 37.2342 35.875 35.875V12.0617C35.8749 11.3821 35.6048 10.7304 35.1242 10.25L25.625 0.750813C25.1446 0.270217 24.4929 0.000145133 23.8133 0ZM24.3438 8.96875V3.84375L32.0312 11.5312H26.9062C26.2266 11.5312 25.5749 11.2613 25.0943 10.7807C24.6137 10.3001 24.3438 9.64837 24.3438 8.96875ZM17.0304 19.5929C17.1495 19.4737 17.2909 19.3793 17.4466 19.3148C17.6022 19.2503 17.769 19.2171 17.9375 19.2171C18.106 19.2171 18.2728 19.2503 18.4284 19.3148C18.5841 19.3793 18.7255 19.4737 18.8446 19.5929C18.9638 19.712 19.0582 19.8534 19.1227 20.0091C19.1872 20.1647 19.2204 20.3315 19.2204 20.5C19.2204 20.6685 19.1872 20.8353 19.1227 20.9909C19.0582 21.1466 18.9638 21.288 18.8446 21.4071L14.6242 25.625L18.8446 29.8429C19.0852 30.0835 19.2204 30.4098 19.2204 30.75C19.2204 31.0902 19.0852 31.4165 18.8446 31.6571C18.604 31.8977 18.2777 32.0329 17.9375 32.0329C17.5973 32.0329 17.271 31.8977 17.0304 31.6571L11.9054 26.5321C11.7861 26.4131 11.6914 26.2717 11.6268 26.1161C11.5622 25.9604 11.529 25.7935 11.529 25.625C11.529 25.4565 11.5622 25.2896 11.6268 25.1339C11.6914 24.9783 11.7861 24.8369 11.9054 24.7179L17.0304 19.5929ZM23.9696 19.5929L29.0946 24.7179C29.2139 24.8369 29.3086 24.9783 29.3732 25.1339C29.4378 25.2896 29.471 25.4565 29.471 25.625C29.471 25.7935 29.4378 25.9604 29.3732 26.1161C29.3086 26.2717 29.2139 26.4131 29.0946 26.5321L23.9696 31.6571C23.729 31.8977 23.4027 32.0329 23.0625 32.0329C22.7223 32.0329 22.396 31.8977 22.1554 31.6571C21.9148 31.4165 21.7796 31.0902 21.7796 30.75C21.7796 30.4098 21.9148 30.0835 22.1554 29.8429L26.3758 25.625L22.1554 21.4071C22.0362 21.288 21.9418 21.1466 21.8773 20.9909C21.8128 20.8353 21.7796 20.6685 21.7796 20.5C21.7796 20.3315 21.8128 20.1647 21.8773 20.0091C21.9418 19.8534 22.0362 19.712 22.1554 19.5929C22.2745 19.4737 22.4159 19.3793 22.5716 19.3148C22.7272 19.2503 22.894 19.2171 23.0625 19.2171C23.231 19.2171 23.3978 19.2503 23.5534 19.3148C23.7091 19.3793 23.8505 19.4737 23.9696 19.5929Z" fill="#6884AF"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_569_19">
                                        <rect width="41" height="41" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>

                                </div>
                                <h4>Content Writing</h4>
                                <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                <p>We shall help you with all your content Writing needs. Blog and articles, email marketing, business proposals, newsletters, strategy documents, concept notes and much more .</p>
                                <div class="enter-box">
                                    <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                    </svg>
                                
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="section-prices" id="section-prices">

            <div class="row" style="width: 100vw; display: flex; align-items: end; margin-top: 200px; position: relative;">
                <div class="col-md-12 mid-banner" style="background: url('{{ url("/storage/mid.png") }}') center center / cover no-repeat; position: relative; z-index: 1;">
                    <div class="row">
                        <div id="section-placeholder-3"></div>
                        <div class="col-lg-6 col-md-7 col-sm-12 ml-auto">
                            <h1>We Have <span id="typing-container-3"></span> and skills across different sectors</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="section-projects" id="section-projects">
            <div id="section-placeholder-4"></div>

                <div class="row d-flex justify-content-center align-items-center">
                    <h3 class="text-center">Our <span id="typing-container-4"></span></h3>

                </div>
                <div class="row">
                    <div class="wrap">           
                        <div class="swiper">
                            <div class="slider-container" style="margin-bottom:102px;">
                                <div class="card-wrapper swiper-wrapper" style="padding-top:10rem;">
                                    <div class="review-wrap swiper-slide" style="margin-top:137px;">
                                            <img src="/storage/xplanetory.webp">
                                    </div>
                                    <div class="review-wrap1 swiper-slide" style="">
                                            <img src="/storage/sellorbuy.webp">
                                    </div>
                                    <div class="review-wrap2 swiper-slide" style="margin-top:137px;">
                                            <img src="/storage/paa.png">
                                    </div>
                                    <div class="review-wrap3 swiper-slide" style="">
                                            <img src="/storage/renters.png">
                                    </div>
                                    <div class="review-wrap3 swiper-slide" style="">
                                            <img src="/storage/amuse.png">
                                    </div>

                                </div>
                                <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination" style="margin-top:100px;"></div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="section-testimonials">
                <div class="row d-flex justify-content-center align-items-center">
                    <h3 class="text-center">Testimonials</h3>

                </div>
                <div class="row">
                    <div class="wrap">           
                        <div class="testimonial-container" style="">
                            <div class="testimonial-wrap" style="">
                                <div class="box">
                                    <img src="/storage/author.jpg" class="rounded-circle text">
                                    <div class="info">
                                        <h4 class="text-center pb-3">Peter Okata</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 41 0)" fill="#2C96E2"/>
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 18 0)" fill="#2C96E2"/>
                                            <path d="M25.5435 14.8533C25.5435 14.8533 25.5248 20.4916 26.8069 23.7641C28.0811 27.0164 29.1931 28.9041 31.8904 31.1234C34.3999 33.1883 39.4528 34.5962 39.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                            <path d="M2.5435 14.8533C2.5435 14.8533 2.5248 20.4916 3.80692 23.7641C5.0811 27.0164 6.1931 28.9041 8.89036 31.1234C11.3999 33.1883 16.4528 34.5962 16.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                        </svg>
                                        <p class="text-center">I cannot recommend Sansa Digital enough! Their team has been instrumental in managing my website and social media.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-wrap1" style="margin-top:84px;">
                                <div class="box">
                                    <img src="/storage/author1.jpg" class="rounded-circle text">
                                    <div class="info">
                                        <h4 class="text-center pb-3">Augustine Bundi</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 41 0)" fill="#2C96E2"/>
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 18 0)" fill="#2C96E2"/>
                                            <path d="M25.5435 14.8533C25.5435 14.8533 25.5248 20.4916 26.8069 23.7641C28.0811 27.0164 29.1931 28.9041 31.8904 31.1234C34.3999 33.1883 39.4528 34.5962 39.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                            <path d="M2.5435 14.8533C2.5435 14.8533 2.5248 20.4916 3.80692 23.7641C5.0811 27.0164 6.1931 28.9041 8.89036 31.1234C11.3999 33.1883 16.4528 34.5962 16.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                        </svg>
                                        <p class="text-center">What they were able to accomplish, four other previous developers had failed</p>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-wrap2" style="">
                                <div class="box">
                                    <img src="/storage/author2.jpg" class="rounded-circle text">
                                    <div class="info">
                                        <h4 class="text-center pb-3">Emmanuel Msagha</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none">
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 41 0)" fill="#2C96E2"/>
                                            <rect width="18" height="18" transform="matrix(-1 0 0 1 18 0)" fill="#2C96E2"/>
                                            <path d="M25.5435 14.8533C25.5435 14.8533 25.5248 20.4916 26.8069 23.7641C28.0811 27.0164 29.1931 28.9041 31.8904 31.1234C34.3999 33.1883 39.4528 34.5962 39.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                            <path d="M2.5435 14.8533C2.5435 14.8533 2.5248 20.4916 3.80692 23.7641C5.0811 27.0164 6.1931 28.9041 8.89036 31.1234C11.3999 33.1883 16.4528 34.5962 16.4528 34.5962" stroke="#2C96E2" stroke-width="5"/>
                                        </svg>
                                        <p class="text-center">Working with Sansa Digital was the best decision I could ever make in my journey as an entrepreneur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="section-quote d-flex align-items-center justify-content-center">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-sm-12 d-flex align-items-center justify-content-center" style="margin-top:200px;">
                        <div class="rectangle" style="overflow: visible;padding: 16px;">
                            <img src="/storage/hand.png" style="margin-left:0px;">
                            <div class="quote-wrap">
                                <h3 class="pb-3">REQUEST QUOTE</h3>
                                <p class="pb-3">Dont be afraid to get in touch. Let us help shape your dreams into reality</p>
                                <a href="/contact">CONTACT</a>
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
    const sliderContainer = document.querySelector('.wrap');
    const cards = document.querySelectorAll('.card');
    let cardIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    // Initial display
    showCard(cardIndex);

    // Previous card
    function showPreviousCard() {
        if (cardIndex > 0) {
            cardIndex--;
            showCard(cardIndex);
        }
    }

    // Next card
    function showNextCard() {
        if (cardIndex < cards.length - 1) {
            cardIndex++;
            showCard(cardIndex);
        }
    }

    // Add event listeners for navigation
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', showPreviousCard);
    nextButton.addEventListener('click', showNextCard);
</script>
<script>
  const textToType1 = "Solutions";
  const typingContainer1 = document.getElementById('typing-container-1');
  const sectionPlaceholder1 = document.getElementById('section-placeholder-1');

  const options1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer1 = new IntersectionObserver(handleIntersection1, options1);

  function handleIntersection1(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText1(0);
        observer1.disconnect();
      }
    });
  }

  observer1.observe(sectionPlaceholder1);

  function typeText1(index) {
    typingContainer1.textContent = textToType1.slice(0, index);
    if (index < textToType1.length) {
      setTimeout(() => typeText1(index + 1), 170);
    }
  }
</script>

<script>
  const textToType2 = "Services";
  const typingContainer2 = document.getElementById('typing-container-2');
  const sectionPlaceholder2 = document.getElementById('section-placeholder-2');

  const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer2 = new IntersectionObserver(handleIntersection2, options2);

  function handleIntersection2(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText2(0);
        observer2.disconnect();
      }
    });
  }

  observer2.observe(sectionPlaceholder2);

  function typeText2(index) {
    typingContainer2.textContent = textToType2.slice(0, index);
    if (index < textToType2.length) {
      setTimeout(() => typeText2(index + 1), 170);
    }
  }
</script>
<script>
  const textToType3 = "Experience";
  const typingContainer3 = document.getElementById('typing-container-3');
  const sectionPlaceholder3 = document.getElementById('section-placeholder-3');

  const options3 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer3 = new IntersectionObserver(handleIntersection3, options3);

  function handleIntersection3(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText3(0);
        observer3.disconnect();
      }
    });
  }

  observer3.observe(sectionPlaceholder3);

  function typeText3(index) {
    typingContainer3.textContent = textToType3.slice(0, index);
    if (index < textToType3.length) {
      setTimeout(() => typeText3(index + 1), 170);
    }
  }
</script>
<script>
  const textToType4 = "Projects";
  const typingContainer4 = document.getElementById('typing-container-4');
  const sectionPlaceholder4 = document.getElementById('section-placeholder-4');

  const options4 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer4 = new IntersectionObserver(handleIntersection4, options4);

  function handleIntersection4(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText4(0);
        observer4.disconnect();
      }
    });
  }

  observer4.observe(sectionPlaceholder4);

  function typeText4(index) {
    typingContainer4.textContent = textToType4.slice(0, index);
    if (index < textToType4.length) {
      setTimeout(() => typeText4(index + 1), 170);
    }
  }
</script>
@endsection
