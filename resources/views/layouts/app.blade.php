<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="resources/owlcarousel/css/owl.carousel.min.css">
    <link rel="stylesheet" href="resources/owlcarousel/css/owl.theme.default.css">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <!-- Scripts -->
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Popper.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.3/umd/popper.min.js"></script>

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<!-- Scripts -->
<link rel="stylesheet" href="{{ asset('build/assets/animate-64af4c2d.css') }}">
  <link rel="stylesheet" href="{{ asset('build/assets/app-655b1278.css') }}">
  <link rel="stylesheet" href="{{ asset('build/assets/app-2d4c25b0.css') }}">
  <script src="{{ asset('build/assets/wow-fa26ccf0.js') }}"></script>
  <link rel="stylesheet" href="{{ asset('build/assets/app-184a4e11.css') }}">
  <script src="{{ asset('build/assets/app-53de18b5.js') }}"></script>

</head>
<body>

            @yield('content')
        </main>
        <footer>
          <div class="section-footer">
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center pt-5" style="flex-direction:column;">
                <h4 class="pb-3">QUICK LINKS</h4>
                <ul>
                    <li><a style="text-decoration:none;" class="text-white" href="/">Home</a></li>

                    <li><a style="text-decoration:none;" class="text-white" href="/#section-projects">Projects</a></li>
                    <li><a style="text-decoration:none;" class="text-white" href="/#section-prices">Packages</a></li>
                    <li><a style="text-decoration:none;" class="text-white" href="/contact">Contact</a></li>
                    <li><a style="text-decoration:none;" class="text-white" href="/about">About</a></li>
                    <li><a style="text-decoration:none;" class="text-white" href="/blogs">Blog</a></li>

                </ul>
              </div>
              <div class="col-md-4 pt-5">
                <h4 class="pb-3">CONTACT US</h4>
                <ul>
                  <li>info@sansa.digital</li>

                  <li>+254797262808</li>

                </ul>
              </div>
              <div class="col-md-4 pt-5">
                <h4 class="pb-3">SOCIAL</h4>
                <div class="d-flex social-links">
                  <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                  <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </div>
              </div>

            </div>
            <div class="row mt-5">
              <div class="d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-c-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z"/>
                </svg>
                <span class="mx-2 ">Salvacar Technologies - 2024</span>
              </div>
            </div>

          </div>
        </footer>

    </div>
    @yield('scripts')

    <script>
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slider-container', {
      slidesPerView: 1,
      spaceBetween: 200,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        },
      loop: true,
    });
  });
</script>

<script>
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'jquery';
import 'owl.carousel';

$(document).ready(function () {
   $(".owl-carousel").owlCarousel();
});

</script>
  <script>
  new WOW().init();
  </script>
</body>
</html>
