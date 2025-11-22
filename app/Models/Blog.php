<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    // This should work for route model binding
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    protected $appends = ['excerpt'];

    public function getExcerptAttribute()
    {
        return Str::limit(strip_tags($this->body), 120);
    }

}