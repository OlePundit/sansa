@extends('layouts.app')

@section('content')
<div id="app">
    <div style="background: radial-gradient(104.85% 104.85% at 50% 0%, rgba(23, 23, 23, 0.00) 61%, #171717 90.5%), url('{{url("/storage/header.png")}}') center center / cover no-repeat;height:100vh;" >
        <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
            <img src="/storage/whiteai.png" class="mx-2" width="200" alt="logo">
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
                <li class="dropdown nav-item">
                    <a class= "dropdown-toggle nav-link text-white" href="#" style="text-decoration:none;" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Solutions
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item text-white" href="https://self.sansadigital.com"> Sansa Digital 2.0</a>
                    </div>                           
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
        <div class="col-md-12 header-banner" >            

            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h1>Sansa Digital</h1>
                    <p>As a leading tech and creative agency, our aim is to help brands bring their ideas to life.</p>
                    <a href="#section-info" ><button style="border:none;" class="btn">Learn More</button></a>
                </div>
            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
            <div class="row justify-content-center">

                <div class="" style="margin:auto;">
                    <div class="section-info d-flex justify-content-center align-items-center  " id="section-info">
                        <div class="col-lg-7 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-lg-5 col-md-6 col-sm-10 col-xs-12">
                                    <div class="custom-card animate__animated animate__flipInY animate__duration-2s" style="">
                                        <img
                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                        srcset="
                                        /storage/tech_h6w8uf_c_scale,w_200.webp 200w,
                                        /storage/tech_h6w8uf_c_scale,w_683.webp 683w,
                                        /storage/tech_h6w8uf_c_scale,w_1102.webp 1102w,
                                        /storage/tech_h6w8uf_c_scale,w_1332.webp 1332w,
                                        /storage/tech_h6w8uf_c_scale,w_1400.webp 1400w"
                                        src="/storage/tech_h6w8uf_c_scale,w_1400.webp"
                                        class="card-img-top" alt="cutting-edge">
                                        <div class="card-body">
                                            <h5 class="card-title">Cutting edge technology</h5>
                                            <p class="card-text">We employ emerging technologies</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-10">
                                    <div class="custom-card1 animate__animated animate__flipInX animate__duration-2s" style="">
                                        <img
                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                        srcset="
                                        /storage/data_ejenyx_c_scale,w_200.webp 200w,
                                        /storage/data_ejenyx_c_scale,w_1090.webp 1090w,
                                        /storage/data_ejenyx_c_scale,w_1182.webp 1182w,
                                        /storage/data_ejenyx_c_scale,w_1371.webp 1371w,
                                        /storage/data_ejenyx_c_scale,w_1400.webp 1400w"
                                        src="/storage/data_ejenyx_c_scale,w_1400.webp"
                                        alt="data" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">Data driven marketing</h5>
                                            <p class="card-text">Our marketing is informed by the data</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5 col-md-6 col-sm-10">
                                    <div class="custom-card animate__animated animate__flipInY animate__duration-2s" style="">
                                        <img
                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                        srcset="
                                        /storage/bold_szdjp3_c_scale,w_200.webp 200w,
                                        /storage/bold_szdjp3_c_scale,w_505.webp 505w,
                                        /storage/bold_szdjp3_c_scale,w_712.webp 712w,
                                        /storage/bold_szdjp3_c_scale,w_850.webp 850w,
                                        /storage/bold_szdjp3_c_scale,w_962.webp 962w,
                                        /storage/bold_szdjp3_c_scale,w_1103.webp 1103w,
                                        /storage/bold_szdjp3_c_scale,w_1235.webp 1235w,
                                        /storage/bold_szdjp3_c_scale,w_1391.webp 1391w,
                                        /storage/bold_szdjp3_c_scale,w_1395.webp 1395w,
                                        /storage/bold_szdjp3_c_scale,w_1400.webp 1400w"
                                        src="/storage/bold_szdjp3_c_scale,w_1400.webp"
                                        class="card-img-top" alt="bold">
                                        <div class="card-body">
                                            <h5 class="card-title">We are Bold</h5>
                                            <p class="card-text">We are not afraid to try new techniques</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-10">
                                    <div class="custom-card animate__animated animate__flipInX animate__duration-2s">
                                        <img
                                        sizes="(max-width: 1400px) 100vw, 1400px"
                                        srcset="
                                        /storage/limit_fmvn5l_c_scale,w_200.webp 200w,
                                        /storage/limit_fmvn5l_c_scale,w_497.webp 497w,
                                        /storage/limit_fmvn5l_c_scale,w_648.webp 648w,
                                        /storage/limit_fmvn5l_c_scale,w_796.webp 796w,
                                        /storage/limit_fmvn5l_c_scale,w_933.webp 933w,
                                        /storage/limit_fmvn5l_c_scale,w_1068.webp 1068w,
                                        /storage/limit_fmvn5l_c_scale,w_1195.webp 1195w,
                                        /storage/limit_fmvn5l_c_scale,w_1239.webp 1239w,
                                        /storage/limit_fmvn5l_c_scale,w_1288.webp 1288w,
                                        /storage/limit_fmvn5l_c_scale,w_1322.webp 1322w,
                                        /storage/limit_fmvn5l_c_scale,w_1393.webp 1393w,
                                        /storage/limit_fmvn5l_c_scale,w_1400.webp 1400w"
                                        src="/storage/limit_fmvn5l_c_scale,w_1400.webp" class="card-img-top"
                                        alt="limits">
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
                        <div class="row d-flex justify-content-center align-items-stretch">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInLeft">
                                    <img class="icon-box" src="/storage/web.webp" alt="web">
                                    <h4>Web design and development</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <p>We shall create a responsive and modern website for your business to help you interact with prospective online customers.</p>
                                        <a href="https://sansadigital.com/lps/webdesign">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInDown">
                                    <img class="icon-box" src="/storage/mobile.webp" alt="seo">
                                    <h4>Mobile development</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <ul>
                                            <li>IOS</li>
                                            <li>Android</li>
                                            <li>Cross platform</li>
                                        </ul>


                                        <a href="https://sansadigital.com/services/mobile-development-services-in-kenya">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInDown">
                                    <img class="icon-box" src="/storage/seo.webp" alt="seo">
                                    <h4>Digital Marketing</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <ul>
                                            <li>SEO</li>
                                            <li>Content Marketing</li>
                                            <li>Social Media Marketing</li>
                                            <li>Search Engine Marketing</li>
                                        </ul>


                                        <a href="https://sansadigital.com/lps/digitalmarketing">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInRight">
                                    <img class="icon-box" src="/storage/graphic.webp" alt="graphic">
                                    <h4>Graphic Design</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <p>Posters, banners, publications, flyers, and social media content. We shall create graphics that tell a story.</p>
                                        <a href="https://sansadigital.com/services/graphic-design-in-kenya">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInDown">
                                    <img class="icon-box" src="/storage/it.webp" alt="seo">
                                    <h4>IT Support & Help Desk</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <ul>
                                        <li>System installation and configuration</li>
                                        <li>System Maintenance</li>
                                        <li>Consultancy</li>
                                        <li>Training</li>
                                        </ul>

                                        <a href="https://sansadigital.com/lps/it-support-and-help-desk">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="service-box wow fadeInDown">
                                    <img class="icon-box" src="/storage/webhosting.webp" alt="seo">
                                    <h4>Web hosting</h4>
                                    <div style="display:flex;flex-direction:column;height:65%;justify-content:space-between;">
                                        <ul>
                                        <li>Affordable prices</li>
                                        <li>Free domain</li>
                                        <li>Free SSL</li>
                                        <li>Managed hosting</li>
                                        </ul>

                                        <a href="https://sansadigital.com/services/affordable-webhosting-services-in-kenya">
                                            <div class="enter-box">
                                                <svg class="enter-svg d-flex align-items-center justify-content-center" xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
                                                    <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9L29 9V7L0 7L0 9Z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/services" class="btn">More Services</a>

                    </div>
                    <div class="section-prices" id="section-prices">

                        <div class="row" style="width: 100vw; display: flex; align-items: end; margin-top: 200px; position: relative;">
                            <div class="col-md-12 mid-banner" style="background: url('{{ url("/storage/mid.webp") }}') center center / cover no-repeat; position: relative; z-index: 1;">
                                <div class="row">
                                    <div id="section-placeholder-3"></div>
                                    <div class="col-lg-6 col-md-7 col-sm-12 ml-auto">
                                        <h1>We Have <span id="typing-container-3"></span> and skills across different sectors</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-projects" id="section-projects">
                        <div id="section-placeholder-4"></div>

                        <div class="row d-flex justify-content-center align-items-center">
                            <h3 class="text-center">Our <span id="typing-container-4"></span></h3>

                        </div>
                        <div class="row align-items-center justify-content-center">
                            <div class="swiper-container swiper1">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="/storage/gov-logo.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/dcoce.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/cpa_logo.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/landscape.svg" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/kimuzi-logo.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/chenaniah-logo.webp" width="200" alt="logo" width="100px">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/ictalogo.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/pink-final.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/renters.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/kfc.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/stima.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/logo.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/callapr.png" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/tvet.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/africads.png" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/bell-consultants.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/allure.png" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/IPF.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/maji.webp" alt="logo" width="100px">

                                    </div>
                                    <div class="swiper-slide">
                                        <img src="/storage/safari.png" alt="logo" width="100px">

                                    </div>
                                </div>
                                <div class="swiper-pagination swiper-pagination1"></div>
            
                            </div>

                        </div>
                    </div>


                    <div class="section-portfolio" id="section-portfolio">
                        <div class="row d-flex justify-content-center align-items-center">
                            <h3 class="text-center">Portfolio</h3>

                        </div>
                        <div class="portfolio-items">
                            <div class="portfolio-item box-2">
                                <a href="https://allureessencespa.com">
                                    <img src="/storage/beauty.webp" alt="portfolio-item-1" width="100%">

                                </a>  
                                <div class="text-2">
                                    <div>
                                        <h4>Web Design<h4>
                                        <h5>Allure Essence Spa</h5>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                    
                                    
                                </div>
                            </div>
                            <div class="portfolio-item box-2">
                                <a href="https://chenaniahsolutions.com/vector/public/">

                                    <img src="/storage/chenaniah.webp" alt="portfolio-item-1" width="100%">
                                </a>
                                <div class="text-2">
                                    <div>
                                        <h4>Web Design</h4>
                                        <h5>Chenaniah Solutions</h5>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>

                                </div>

                            </div>
                            <div class="portfolio-item box-2">
                                <a href="https://tradecraft.co.ke">

                                    <img src="/storage/tradecraft.webp" alt="portfolio-item-1" width="100%">
                                </a>
                                <div class="text-2">
                                    <div>
                                        <h4>Web Design</h4>
                                        <h5>Tradecraft Printers</h5>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>

                                </div>

                            </div>
                            <div class="portfolio-item box-2">
                                <a href="https://ipfglobal.or.ke">

                                    <img src="/storage/ipf-port.webp" alt="portfolio-item-1" width="100%">
                                </a>
                                <div class="text-2">
                                    <div>
                                        <h4>Web Design</h4>
                                        <h5>Institute of Public Finance</h5>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="section-packages" id="section-packages">
                        <div class="row d-flex justify-content-center align-items-center">
                            <h3 class="text-center">Packages</h3>

                        </div>
                        <div class="row justify-content-center">
                            <h4>Web Design Packages</h4>
                            <div class="row package-items">
                                @foreach($webs as $web)
                                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 package-wrap">
                                    <h5>{{ $web->tier }} Package</h5>
                                    <ul>
                                        @foreach(json_decode($web->features, true) as $feature)
                                            <li>{{ $feature }}</li>
                                        @endforeach
                                    </ul>
                                    <a href="/order/{{ $web->id }}">Ksh {{ $web->price }}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                                @endforeach
                            </div>

                        </div>
                        <div class="row justify-content-center">
                            <h4>Digital Marketing Packages</h4>
                            <div class="row package-items">
                                @foreach($digitals as $digital)
                                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 package-wrap">
                                    <h5>{{ $digital->tier }} Package</h5>
                                    <ul>
                                        @foreach(json_decode($digital->features, true) as $feature)
                                            <li>{{ $feature }}</li>
                                        @endforeach
                                    </ul>
                                    <a href="/order/{{ $digital->id }}">Ksh {{ $digital->price }}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                                 @endforeach
                            </div>

                        </div>
                    </div>

                    
                    <div class="section-testimonials">
                        <div class="row d-flex justify-content-center align-items-center">
                            <h3 class="text-center">Testimonials</h3>

                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 col-sm-6 testimonial-wrap animate__animated animate__bounceInLeft animate__duration-2s" style="">
                                <div class="box">
                                    <img src="/storage/author.webp" alt="client" class="rounded-circle text" alt="author">
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
                            <div class="col-lg-4 col-md-6 col-sm-6 testimonial-wrap1 animate__animated animate__bounceInDown animate__duration-2s" style="margin-top:84px;">
                                <div class="box">
                                    <img
                                    sizes="(max-width: 1400px) 100vw, 1400px"
                                    srcset="
                                    /storage/author1_k7rrnh_c_scale,w_200.webp 200w,
                                    /storage/author1_k7rrnh_c_scale,w_534.webp 534w,
                                    /storage/author1_k7rrnh_c_scale,w_760.webp 760w,
                                    /storage/author1_k7rrnh_c_scale,w_1001.webp 1001w,
                                    /storage/author1_k7rrnh_c_scale,w_1070.webp 1070w,
                                    /storage/author1_k7rrnh_c_scale,w_1162.webp 1162w,
                                    /storage/author1_k7rrnh_c_scale,w_1309.webp 1309w,
                                    /storage/author1_k7rrnh_c_scale,w_1395.webp 1395w,
                                    /storage/author1_k7rrnh_c_scale,w_1400.webp 1400w"
                                    src="/storage/author1_k7rrnh_c_scale,w_1400.webp"
                                    alt="client" class="rounded-circle text">
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
                            <div class="col-lg-4 col-md-6 col-sm-6 testimonial-wrap2 animate__animated animate__bounceInRight animate__duration-2s" style="">
                                <div class="box">
                                    <img
                                    sizes="(max-width: 1400px) 100vw, 1400px"
                                    srcset="
                                    /storage/author2_ytxtus_c_scale,w_200.webp 200w,
                                    /storage/author2_ytxtus_c_scale,w_684.webp 684w,
                                    /storage/author2_ytxtus_c_scale,w_1000.webp 1000w,
                                    /storage/author2_ytxtus_c_scale,w_1250.webp 1250w,
                                    /storage/author2_ytxtus_c_scale,w_1392.webp 1392w,
                                    /storage/author2_ytxtus_c_scale,w_1400.webp 1400w"
                                    src="/storage/author2_ytxtus_c_scale,w_1400.webp"
                                    class="rounded-circle text" alt="client">
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
                    <div class="section-quote d-flex align-items-center justify-content-center">
                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="col-sm-12 d-flex align-items-center justify-content-center" style="margin-top:200px;">
                                <div class="rectangle" style="overflow: visible;padding: 16px;">
                                    <img src="/storage/hand.webp" style="margin-left:0px;" alt="quote">
                                    <div class="quote-wrap">
                                        <h3 class="pb-3">REQUEST QUOTE</h3>
                                        <p class="pb-3">Dont be afraid to get in touch. Let us help shape your dreams into reality</p>
                                        <a href="/contact">CONTACT</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="section-newsletter d-flex align-items-center justify-content-center">
                        <div class="row d-flex align-items-center justify-content-center" style="width:100%;">
                            <div class="col-sm-12 d-flex align-items-center justify-content-center" style="margin-top:200px;">
                                <form action='/n' method="post">
                                    <h3>Subscribe to our Newsletter</h3>
                                    @csrf
                                    <input type="email" name="email" class="form-control" placeholder="Enter your email">
                                    <button>submit</button>
                                </form>
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
  const textToType4 = "Clients";
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
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    var swiper2 = new Swiper('.swiper1', {
    loop:true,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    autoplay: {
        delay: 600,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 40, // Adjust spacing
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView:4,
            spaceBetween:40,
        },
    },
    speed: 600,
});
swiper2.initialize();

</script>
@endsection