<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('l_p_s', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('title1')->nullable();
            $table->string('title2')->nullable();
            $table->string('title3')->nullable();
            $table->string('img1')->nullable();
            $table->string('img2')->nullable();
            $table->string('img3')->nullable();
            $table->text('faq1')->nullable();
            $table->text('faq2')->nullable();
            $table->text('faq3')->nullable();
            $table->text('faq4')->nullable();
            $table->text('faq5')->nullable();
            $table->text('ans1')->nullable();
            $table->text('ans2')->nullable();
            $table->text('ans3')->nullable();
            $table->text('ans4')->nullable();
            $table->text('ans5')->nullable();
            $table->string('slug')->nullable();
            $table->text('benefits')->nullable();
            $table->text('benefits2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('l_p_s');
    }
};
