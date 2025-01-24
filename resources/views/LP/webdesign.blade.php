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
                    <h1>Web Design and Development in Kenya</h1>
                    <p>Welcome to Sansa Digital, your one-stop shop for all your web design and development needs.
                        We are always ready to roll up our sleeves, get our hands dirty, and help you create a website that will help you achieve your business goals. Whether you need a simple website to showcase your products or services, or a complex e-commerce site that can handle thousands of transactions per day, we have the skills and expertise to make it happen.
                    </p>
                    <a href="/contact" class="btn">Get Started</a>
                </div>
                <img src="/storage/aboutImage.png" class="aboutImg" height="417px;" alt="hero-img">

            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
            <div class="row justify-content-center info">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/storage/web-lp-info.webp" class="" alt="info-img">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>Why Choose us as your Web Design and Development Partner?</h2>
                    <ul>
                        <li><span>Training:</span> We train our customers on how to use different kinds of software including the ones we develop for them, and ones from third parties such as G-suite and Microsoft.</li>
                        <li><span>Round the clock support:</span> Our IT support technicians are available any time of day or night.</li>
                        <li><span>IT consultancy:</span> We provide consultation on a wide range of software solutions for clients from different sectors and pracitices</li>
                        <li><span>Custom IT solutions</span> We provide tailor made soutions to solve bespoke challenges for a wide range of clients.</li>
                        <li><span>Free Maintenance</span> We provide a free maintenance period for all software installed by us.</li>
                        <li><span>System installations and configurations</span> We provide on-site support for system installations and configurations.</li>

                    </ul>
                    <a href="/contact" class="btn">Learn More</a>

                </div>
            </div>
            <div class="row justify-content-center resp">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <h2>Get Fast and Responsive Web Design in Nairobi</h2>
                    <ul>
                        <li><span>Training:</span> We train our customers on how to use different kinds of software including the ones we develop for them, and ones from third parties such as G-suite and Microsoft.</li>
                        <li><span>Round the clock support:</span> Our IT support technicians are available any time of day or night.</li>
                        <li><span>IT consultancy:</span> We provide consultation on a wide range of software solutions for clients from different sectors and pracitices</li>
                        <li><span>Custom IT solutions</span> We provide tailor made soutions to solve bespoke challenges for a wide range of clients.</li>
                        <li><span>Free Maintenance</span> We provide a free maintenance period for all software installed by us.</li>
                        <li><span>System installations and configurations</span> We provide on-site support for system installations and configurations.</li>

                    </ul>
                    <a href="/contact" class="btn">Contact Us</a>

                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/storage/web-resp.webp" class="" alt="res-img">

                </div>

            </div>
            <div class="row section-packages justify-content-center">
                <h2>Web Design Packages</h2>
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
            <div class="row justify-content-center faq">
                <h2>FAQs</h2>
                <div class="col-lg-12">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How much should I expect to pay for a website design?
                            </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The price varies depending on the complexity of the website. But it typically ranges from Ksh 15000 for a simple WordPress site to 80,0000 for complex e-Commerce sites.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Should I pay for a web designer?
                            </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Well, it depends on the complexity of the website you want. But if you want a robust, fast and responsive website that will help you cater to your client's needs then a web designer is the go-to option.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How many hours to build a website?
                            </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The duration is dependent on the type of website you want. A one page website could take up to 24 hours, whereas much more complex websites like e-Commerce sites could take weeks or even months to design and develop.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do I start a website?
                            </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                You first need to decide on what kind of website you need and what it's meant to achieve for you or your business.
                                You can then choose which tools or languages you want your website built on. For easy maintenance you could consider using a Content Management System such as Webflow or WordPress. However, if you want a complex design whilst maintainging control, you could go for a coding languages or frameworks such as PHP Laravel or Python Django. HTML and CSS are also necessary when it comes to developing websites from scratch.
                                Choose and purchase a domain name.
                                Purchase a web hosting plan. Some of the important factors to consider when choosing a web hosting service provider are; affordability, reliability (is their system prone to crashes?), and customer service (do they offer round the clock customer care?).
                                Design your website or pick a template (if you are using a CMS).
                                Develop your website or customize your template.
                                Test your website then launch officially. Some level of marketing might be needed to attract traffic to your website.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How much does a web designer cost in Kenya?
                            </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The price of hiring a web designer in Kenya depends on the complexity of the website:
                                Ksh 15000 for a WordPress website.
                                Ksh 40000 for a 5 page website. (Popular with most business websites and blogs)
                                Ksh 80000 for a 20 page website. (Popular with most e-Commerce sites and web applications)

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
