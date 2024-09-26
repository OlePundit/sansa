<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Sansa Digital</title>
    <meta name="description" content="We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.">
    <meta name="robots" content="index, follow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta name="twitter:title" content="Sansa Digital">
    <meta name="twitter:description" content="<p>We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya.</p>">
    <meta name="twitter:image" content="https://sansadigital.com/storage/twitter.png">
    <meta name="twitter:site" content="sansadigital.com">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@salvacar_ke">
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Sansa Digital"/>
    <meta property="og:description" content="We are the #1 web development, web design, graphic design, SEO, content and social media marketing company in Kenya." />
    <meta property="og:image" content="https://sansadigital.com/storage/twitter.png" />
    <meta property="og:url" content="https://sansadigital.com" />
    <meta property="og:site_name" content="Sansa Digital"/>

    <!-- Fonts -->
    <link href="https://sansadigital.com/storage/icon.png" rel="icon">

    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <link rel="stylesheet" href="resources/owlcarousel/css/owl.carousel.min.css">
    <link rel="stylesheet" href="resources/owlcarousel/css/owl.theme.default.css">


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">


    <!-- Scripts -->

    

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('build/assets/app-62ea8698.css') }}">
    <link rel="stylesheet" href="{{ asset('build/assets/app-2d4c25b0.css') }}">
    <link rel="stylesheet" href="{{ asset('build/assets/app-184a4e11.css') }}">
  
  
      <link rel="stylesheet" href="{{ asset('build/assets/animate-64af4c2d.css') }}">
    <link rel="stylesheet" href="{{ asset('build/assets/font-awesome.min-b83accb8.css') }}">
</head>
<body>

            @yield('content')
        </main>
        <footer>
          <div class="section-footer">
            <div class="row footer-wrap">
              <div class="col-lg-4 col-md-3 d-flex pt-5" style="flex-direction:column;">
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
              <div class="col-lg-3 col-md-3 pt-5 medium">
                <h4 class="pb-3">CONTACT US</h4>
                <ul>
                  <li class="mb-2"><a href="mailto:info@sansadigital.com"><i class="fas fa-envelope"></i>info@sansadigital.com</a></li>
                  <li class="mb-2"><a href="https://wa.me/+254112128055"> <i class="fab fa-whatsapp"></i>always online</a></li>

                  <li class="mb-2"><a href="tel:+254112128055"> <i class="fas fa-phone"></i>+254112128055</a></li>

                </ul>
              </div>
              <div class="col-lg-4 col-md-5 pt-5 social" style="">
                <h4 class="">SOCIAL</h4>
                <div class="d-flex social-links">
                  <a href="https://twitter.com/SansaDigital">
                    <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  </a>
                  <a href="">
                    <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/sansa-digital">

                    <svg class="mx-1 "xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>

                </div>
                <form action='/n' method="post">
                    <h3>Subscribe to our Newsletter</h3>
                    @csrf
                    <input type="email" name="email" class="form-control" placeholder="Enter your email">
                    <button>submit</button>

                </form>
              </div>

            </div>
            <div class="row mt-5">
              <div class="d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-c-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z"/>
                </svg>
                <span class="mx-2 ">Sansa Digital - 2024</span>
              </div>
            </div>

          </div>
        </footer>

    </div>
    @yield('scripts')
  <script src="{{ asset('build/assets/app-53de18b5.js') }}"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
          <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7Y4V9CPDY"></script>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <!-- Scripts -->
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Popper.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.3/umd/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <script src="{{ asset('build/assets/wow-fa26ccf0.js') }}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-Z7Y4V9CPDY');
    </script>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10805349205"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10805349205');
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
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sansa Digital",
  "description": "We are the #1 web development, web design, graphic design, SEO, content, and social media marketing company in Kenya.",
  "image": "https://sansadigital.com/storage/header.png",
  "logo": "https://sansadigital.com/whiteai.png",
  "url": "https://sansadigital.com",
  "potentialAction":        
  [
  {
    "@type": "ReadAction",
    "target":"https://sansadigital.com"
  }, 
  {
    "@type": "FillAction",
    "target":"https://sansadigital.com/contact"
  } 
  ]      
}
</script>
<script src="https://js.paystack.co/v1/inline.js"></script>

<script>
  const paymentForm = document.getElementById('paymentForm');
  paymentForm.addEventListener("submit", payWithPaystack, false);

  function payWithPaystack(e) {
      e.preventDefault();
      let handler = PaystackPop.setup({
          key: "{{ env('PAYSTACK_PUBLIC_KEY') }}",
          email: document.getElementById("email").value,
          amount: document.getElementById("amount").value * 100 / 2,
          ref: '' + Math.floor((Math.random() * 10000000000) + 1),
          currency: 'KES',
          metadata: {
              custom_fields: [
                  {
                      name: document.getElementById("name").value,
                      phone: document.getElementById("phone").value,
                      category: document.getElementById("category").value,
                      tier: document.getElementById("tier").value,
                  },
              ]
          },
          onClose: function(){
              alert('Window closed.');
          },
          callback: function(response){
              window.location.href = "{{ route('callback') }}?trxref=" + response.reference + "&reference=" + response.reference;
          }
      });
      handler.openIframe();
  }
</script>
</body>
</html>