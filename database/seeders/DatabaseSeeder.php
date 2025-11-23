<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Package;
use App\Models\Blog;
use App\Models\LP;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Package::factory(10)->create();
        Blog::factory(10)->create();
        LP::factory(10)->create();
    }
}
