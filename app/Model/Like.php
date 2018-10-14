<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    public function reply(){
        $this->belongsTo(Reply::class);
    }
}
