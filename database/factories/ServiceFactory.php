<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(3);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'body' => $this->faker->paragraphs(3, true),
            'thumbnail' => 'services/service-' . $this->faker->numberBetween(1, 10) . '.jpg',
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => now(),
        ];
    }

    /**
     * Indicate that the slug should be null.
     */
    public function withoutSlug(): static
    {
        return $this->state(fn (array $attributes) => [
            'slug' => null,
        ]);
    }

    /**
     * Indicate that the service has a specific thumbnail.
     */
    public function withThumbnail(string $path): static
    {
        return $this->state(fn (array $attributes) => [
            'thumbnail' => $path,
        ]);
    }

    /**
     * Indicate that the service has a short body.
     */
    public function withShortBody(): static
    {
        return $this->state(fn (array $attributes) => [
            'body' => $this->faker->paragraph(),
        ]);
    }

    /**
     * Indicate that the service has a long body.
     */
    public function withLongBody(): static
    {
        return $this->state(fn (array $attributes) => [
            'body' => $this->faker->paragraphs(10, true),
        ]);
    }
}