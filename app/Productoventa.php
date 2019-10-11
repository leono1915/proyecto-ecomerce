<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Productoventa extends Model
{
    //
    public function user(){
        return $this->belongsTo(User::class);
    }
}
