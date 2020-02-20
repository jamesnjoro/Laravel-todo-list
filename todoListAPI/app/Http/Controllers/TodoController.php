<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Validator;

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
        $todos = Todo::all();

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
            'userID' => 'required',
        ]);
        
       
        $todo = Todo::create($request->all());
        
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
