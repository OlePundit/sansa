<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lp>
 */
class LpFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'      => $this->faker->sentence(6),
            'title1'     => $this->faker->sentence(4),
            'title2'     => $this->faker->sentence(4),
            'title3'     => $this->faker->sentence(4),
            'img1'       => $this->faker->imageUrl(640, 480, 'business', true),
            'img2'       => $this->faker->imageUrl(640, 480, 'business', true),
            'img3'       => $this->faker->imageUrl(640, 480, 'business', true),
            'faq1'       => $this->faker->sentence(10),
            'faq2'       => $this->faker->sentence(10),
            'faq3'       => $this->faker->sentence(10),
            'faq4'       => $this->faker->sentence(10),
            'faq5'       => $this->faker->sentence(10),
            'ans1'       => $this->faker->paragraph(2),
            'ans2'       => $this->faker->paragraph(2),
            'ans3'       => $this->faker->paragraph(2),
            'ans4'       => $this->faker->paragraph(2),
            'ans5'       => $this->faker->paragraph(2),
            'slug'       => Str::slug($this->faker->sentence(3), '-'),
            'benefits'   => $this->faker->paragraph(3),
            'benefits2'  => $this->faker->paragraph(3),
        ];
    }
}
