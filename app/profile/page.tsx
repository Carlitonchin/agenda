"use client"

import { Amplify } from "aws-amplify";
import { client } from "@/lib/client"
import { fetchAuthSession } from 'aws-amplify/auth';
import outputs from "@/amplify_outputs.json";


Amplify.configure(outputs);


export default function TodoList() {
  const createTodo = async () => {
    console.log("hola")

console.log("Creating todo...")	
    try{
      var {data, errors, extensions} = await client.models.Todo.create({
        content: "contenido",
        isDone: false
      }, {
        authMode: "userPool",
      })
      console.log(errors)
    }catch(e){
      console.log(e)
    }
    
  }

  return <div>
    <button onClick={createTodo}>Add new todo</button>
  </div>
}