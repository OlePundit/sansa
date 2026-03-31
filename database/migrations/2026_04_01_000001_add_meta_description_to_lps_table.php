<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('l_p_s', function (Blueprint $table) {
            $table->text('meta_description')->nullable()->after('intro');
        });
    }

    public function down(): void
    {
        Schema::table('l_p_s', function (Blueprint $table) {
            $table->dropColumn('meta_description');
        });
    }
};
