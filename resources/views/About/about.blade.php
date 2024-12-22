@extends('layouts.app')

@section('content')
<div id="app" class="about">
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
                    <h1>Let’s Supercharge Your Growth</h1>
                    <p>Sansa Digital is a digital and creative agency based in Nairobi, Kenya. Our services range from web design and development, to social media and digital marketing.</p>
                    <a href="#section-info" class="btn">Learn More</a>
                </div>
                <img src="/storage/aboutImage.png" class="aboutImg" height="417px;">

            </div>
        </div>
    </div>
        

    <main class="">
        <div class="container">
            <div class="row justify-content-center">

                <div class="row section-info" id="section-info">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img src="/storage/person.png" class="person" alt="person">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h2>Our <span>Story</span></h2>
                        <p>We discovered that there was a gap in the market, in terms of access to creative and ICT services to small and medium business, despite the fact that they are still in need of the same services
                        </p>
                        <p>
                        Client relationship training, branding and marketing are just but some of the services that they lack due to affordability—these businesses cannot afford to procure the services of big marketing or digital agencies. So our aim was to specifically target SMEs, and MSMEs with competitive packages, while still maintaining the same quality of service that a higher level agency can provide.

                        </p>
                        <a href="/blogs"><button class="mt-3">Learn More</button></a>
                    </div>

                </div>

                <div class="row section-equip">
                    <div class="col-lg-5 col-md-12 equip-wrap" style="">
                        <h2 class="">We Equip Leaders With<br> <span>Strategy</span> & <span>Vision</span></h2>
                        <p>
                        We also realised that professionals within the space are grossly mistreated, with strict timelines, underpayment or nonpayment. They also lack auxilliary skills such as communication and project management. The clients are not that safe either, with various malpractices in the industry such as fraud and non-perfor- mace of services.
                        </p>
                        <h3>What We Do Different</h3>

                        <p>
                        We, therefore, aim to change the landscape by bringing together professionals from various fields within the creative sector, and relieving them of the bur- den of dealing with clients so that they can focus on their work. As for clients, we also are relieving them of the burden of dealing with creatives and techies, especially if they are not from a technical or creative background, so that they can focus on growing their businesses.





                        </p>

                    </div>
                    <div class="col-lg-4 col-md-12">
                        <img src="/storage/equip.png" alt="equip">
                    </div>
                </div>
                <div class="section-projects" id="section-projects">

                    <div class="row d-flex justify-content-center align-items-center">
                        <h3 class="text-center">Our <span>Clients</span></h3>

                    </div>
                    <div class="row align-items-center justify-content-center">
                        <div class="swiper-container swiper1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="/storage/gov-logo.webp" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/dcoce.png" alt="logo" width="100px">

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
                                    <img src="/storage/tvet.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/africads.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/bell-consultants.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/allure.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/IPF.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/maji.png" alt="logo" width="100px">

                                </div>
                                <div class="swiper-slide">
                                    <img src="/storage/safari.png" alt="logo" width="100px">

                                </div>
                            </div>
                            <div class="swiper-pagination swiper-pagination1"></div>
        
                        </div>

                    </div>
                </div>
                <div class="section-stats">
                    <h2 class="text-center">Let Our <br> <span>Numbers </span> Do The <span>Talking</span></h2>
                    <div class="stat-wrap mt-5" style="">
                        <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;" class="stat-label"><div class="pie animate" style="--p:95;--b:10px;--c:#2C96E2;">95%</div>succest rate</div>
                        <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;" class="stat-label"><div class="pie animate mx-5"  style="--p:90;--b:10px;--c:#2C96E2;">90%</div>Happy clients</div>
                        <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;" class="stat-label"><div class="pie animate" style="--p:60;--b:10px;--c:#2C96E2;">88%</div>Impact</div>
                    </div>

                </div>



                <div class="section-quote d-flex align-items-center justify-content-center">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="col-sm-12 d-flex align-items-center justify-content-center" style="margin-top:200px;">
                            <div class="rectangle d-flex align-items-center justify-content-center" style="overflow: visible;padding: 16px;">
                                <img src="/storage/hand.png" width="636px" height="636px" class="pt-5" style="margin-left:0px;" alt="quote">
                                <div class="quote-wrap">
                                    <h3 class="pb-3">REQUEST QUOTE</h3>
                                    <p class="pb-3">Dont be afraid to get in touch. Let us help shape your dreams into reality</p>
                                    <a href="contact">CONTACT</a>
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

@endsection
