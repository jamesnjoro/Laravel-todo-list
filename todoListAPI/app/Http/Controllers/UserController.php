<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function register(Request $request){
        
        $validatedData = $request->validate([
            "name" => "required || max:55",
            "email" => "email || required || unique:users",
            "password" => "required"
        ]);
        
        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return Response()->JSON([
            "User" => $user,
            "Token" => $accessToken
        ],200);


    }

    public function login(Request $request){
        $validatedData = $request->validate([
            "email" => "required||email",
            "password" => "required"
        ]);

        if(!auth()->attempt($validatedData)){
            return Response()->JSON([
                "message" => "Invalid credentials"
            ],401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return Response()->JSON([
            "user" => auth()->user(),
            "Token" => $accessToken
        ],200);
    }
}
