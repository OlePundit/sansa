<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Package>
 */
class PackageFactory extends Factory
{
    protected $model = \App\Models\Package::class;

    public function definition(): array
    {
        $categories = ['web design', 'digital marketing'];
        $tiers = ['Basic', 'Standard', 'Premium'];

        $featuresWeb = [
            ['Responsive Design', 'Custom Domain', 'SEO Basics'],
            ['Responsive + CMS', 'Analytics Setup', 'Email Integration'],
            ['Full Website + E-commerce', 'Premium Support', 'Advanced SEO'],
        ];

        $featuresDigital = [
            ['SEO Optimization', 'Content Marketing'],
            ['SEO + Social Media Management', 'Email Campaigns'],
            ['Full Digital Marketing Suite', 'PPC Ads', 'Analytics & Reporting'],
        ];

        $category = $this->faker->randomElement($categories);
        $tierIndex = rand(0, 2); // pick features based on tier
        $features = $category === 'web design' ? $featuresWeb[$tierIndex] : $featuresDigital[$tierIndex];

        $prices = [
            'web design' => ['5000', '10000', '20000'],
            'digital marketing' => ['8000', '15000', '30000'],
        ];

        return [
            'category' => $category,
            'tier' => $tiers[$tierIndex],
            'features' => json_encode($features),
            'price' => $prices[$category][$tierIndex],
        ];
    }
}
