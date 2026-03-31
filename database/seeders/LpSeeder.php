<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LP;

class LpSeeder extends Seeder
{
    public function run(): void
    {
        // Clear faker data
        LP::truncate();

        LP::create([
            'slug'      => 'webdesign',
            'category'  => 'web design',
            'title'     => 'Web Design in Kenya',
            'intro'     => 'We build fast, responsive, and beautiful websites that grow your business.',
            'title1'    => 'Why Choose Us for Web Design?',
            'title2'    => 'Our Web Design Process',
            'title3'    => 'Frequently Asked Questions',
            'benefits'  => 'Custom designs tailored to your brand. SEO-optimised from day one. Mobile-first responsive layouts. Fast load times. Ongoing support.',
            'benefits2' => 'We use modern technologies like Next.js and Tailwind CSS to deliver high-performance websites that convert visitors into customers.',
            'faq1'      => 'How long does it take to build a website?',
            'ans1'      => 'A standard business website takes 2–4 weeks. More complex projects may take 6–8 weeks.',
            'faq2'      => 'Do you provide hosting?',
            'ans2'      => 'Yes, we offer reliable and affordable hosting packages with 99.9% uptime.',
            'faq3'      => 'Will my website be mobile-friendly?',
            'ans3'      => 'Absolutely. All our websites are fully responsive and tested on all devices.',
            'faq4'      => 'Can I update the website myself?',
            'ans4'      => 'Yes, we build with easy-to-use CMS systems so you can manage your content.',
            'faq5'      => 'Do you offer redesigns for existing websites?',
            'ans5'      => 'Yes. We can redesign and modernise your existing website while preserving your SEO rankings.',
        ]);

        LP::create([
            'slug'      => 'digital-training',
            'category'  => 'digital training',
            'title'     => 'Digital Marketing Training in Kenya',
            'intro'     => 'Learn practical digital marketing skills that get results. Courses for beginners and professionals.',
            'title1'    => 'What You Will Learn',
            'title2'    => 'Who Is This Training For?',
            'title3'    => 'Frequently Asked Questions',
            'benefits'  => 'SEO & content marketing. Social media management. Google & Facebook Ads. Email marketing. Analytics & reporting.',
            'benefits2' => 'Our trainers have real-world experience running successful campaigns for brands across Kenya and East Africa.',
            'faq1'      => 'Do I need prior experience?',
            'ans1'      => 'No prior experience is needed. Our courses are designed for all skill levels.',
            'faq2'      => 'Is the training online or physical?',
            'ans2'      => 'We offer both online and in-person training in Nairobi.',
            'faq3'      => 'Do I get a certificate?',
            'ans3'      => 'Yes, you receive a certificate of completion after each course.',
            'faq4'      => 'How long are the courses?',
            'ans4'      => 'Courses range from 1-day intensive workshops to 8-week programmes.',
            'faq5'      => 'Can companies enrol their teams?',
            'ans5'      => 'Yes, we offer group and corporate training packages at discounted rates.',
        ]);

        LP::create([
            'slug'      => 'it-support-and-help-desk',
            'category'  => 'IT',
            'title'     => 'IT Support & Help Desk Services in Kenya',
            'intro'     => 'Reliable IT support for businesses of all sizes. We keep your systems running smoothly.',
            'title1'    => 'Our IT Support Services',
            'title2'    => 'Why Outsource Your IT?',
            'title3'    => 'Frequently Asked Questions',
            'benefits'  => '24/7 help desk support. Network setup and maintenance. Hardware and software troubleshooting. Cloud solutions. Cybersecurity.',
            'benefits2' => 'Outsourcing IT saves you money and gives you access to a full team of experts without the overhead of full-time staff.',
            'faq1'      => 'What is your response time?',
            'ans1'      => 'We guarantee a response within 1 hour for critical issues and 4 hours for standard requests.',
            'faq2'      => 'Do you support remote teams?',
            'ans2'      => 'Yes, we provide remote IT support across Kenya and East Africa.',
            'faq3'      => 'Can you manage our entire IT infrastructure?',
            'ans3'      => 'Yes, we offer fully managed IT services including servers, networks, and endpoints.',
            'faq4'      => 'Do you provide cybersecurity services?',
            'ans4'      => 'Yes, we include basic cybersecurity audits and protections in all our support packages.',
            'faq5'      => 'How do we get started?',
            'ans5'      => 'Contact us for a free consultation and we will assess your current setup and recommend the best plan.',
        ]);
    }
}
