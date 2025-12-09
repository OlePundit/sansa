<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'glennomondi.go@gmail.com'], // Unique
            [
                'name' => 'admin',
                'password' => Hash::make('Glennisgood14$'), // Always hash passwords
                'email_verified_at' => now(),
            ]
        );
    }
}
