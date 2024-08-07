import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/app.css',
                'resources/css/animate.css',
                'resources/js/wow.js',
                'resources/css/font-awesome.min.css'
            ],
            refresh: true,
        }),
    ],
});
