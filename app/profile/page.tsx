"use client"
import { client } from "@/lib/client"

export default function TodoList() {
  const createTodo = async () => {
    console.log("Creating todo...")	
    try{
      var res = await client.models.Todo.create({
        content: window.prompt("Todo content?"),
        isDone: false
      })
      console.log(res)
    }catch(e){
      console.log(e)
    }
    
  }

  return <div>
    <button onClick={createTodo}>Add new todo</button>
  </div>
}