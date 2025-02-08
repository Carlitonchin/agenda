import { client } from "@/lib/client"

export default function TodoList() {
  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false
    })
  }

  return <div>
    <button onClick={createTodo}>Add new todo</button>
  </div>
}