"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import { fetchAuthSession, signInWithRedirect } from 'aws-amplify/auth';
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { client } from "@/lib/client";

Amplify.configure(outputs);

export default function App() {
  async function onSignin(){
    await signInWithRedirect({
      provider: "Google"
    });
  }

  const createTodo = async () => {
    console.log("hola")
      const session = await fetchAuthSession({forceRefresh: true});
  console.log({session})
  console.log("id token", session.tokens?.idToken)
  console.log("access token", session.tokens?.accessToken)
  
  console.log("Creating todo...")	
      try{
        var res = await client.models.Todo.create({
          content: "contenido",
          isDone: false
        }, {
          authMode: "userPool",
          authToken: session.credentials?.sessionToken
        })
        console.log({res})
      }catch(e){
        console.log(e)
      }
      
    }
  return <div>
    <button onClick={onSignin}>Sign In</button>
    <button onClick={createTodo}>Add new todo</button>
  </div>;
}
