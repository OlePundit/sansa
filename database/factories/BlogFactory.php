<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    public function definition(): array
    {
        $title = $this->faker->sentence();

        return [
            'title' => $title,
            'slug'  => \Str::slug($title),
            'body' => $this->faker->paragraphs(5, true),
            'thumbnail' => $this->faker->imageUrl(640, 480, 'blog', true),
        ];
    }
}
