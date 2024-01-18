import './bootstrap';

import 'jquery'; // Import jQuery first
import 'owl.carousel'; // Import Owl Carousel
import 'animate.css';
import Wow from 'wow.js';

// ... your other imports

window.addEventListener('DOMContentLoaded', () => {
    const wow = new Wow();
    wow.init();
});