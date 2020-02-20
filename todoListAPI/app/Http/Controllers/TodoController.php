<?php

namespace App\Http\Controllers;

use App\Todo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        // Return all the todo for the user in the Database.
        $user = auth()->user();
        $userID = $user['id'];
        $todos = Todo::where('userID',$userID)->get();
        return Response()->JSON($todos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // creating a new task
        $request->validate([
            'description' => 'required',
        ]);
        
        $authUser= auth()->user();
        $userID = $authUser['id']; 

        $post = $request->all();
        $post['userID'] = $userID;

        $todo = Todo::create($post);
        
        return Response()->JSON([
            'message' => 'Todo created',
            'Todo' => $todo
        ]);
        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo, $id)
    {
        //
        $todo= Todo::findorfail($id);

        $request->validate([
            'description' => 'nullable',
            'completed' => 'nullable'
         ]);
 
         $todo->update($request->all());
 
         return response()->json([
             'message' => 'Status changed',
             'task' => $todo
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo,$id)
    {
        //
        $todo = Todo::findorfail($id);

        $todo->delete();
        return Response()->JSON([
            "message"=>"Todo deleted"
        ]);

    }
}
