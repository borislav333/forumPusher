<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login','signup']]);
        $this->middleware('JWT');
    }
    public function likeIt(Reply $reply){
        $reply->likes()->create([
            'user_id'=>1
        ]);
        return response('Like added successfuly!',Response::HTTP_ACCEPTED);
    }
    public function unLikeIt(Reply $reply){
        //$reply->likes()->where([auth()->user()->id()=>'user_id'])->first()->delete();
        $reply->likes()->where(['user_id'=>1])->first()->delete();
    }
}
