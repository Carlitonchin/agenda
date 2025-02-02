"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import { signInWithRedirect } from 'aws-amplify/auth';
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);


export default function App() {
  async function onSignin(){
    await signInWithRedirect({
      provider: "Google"
    });
  }
  return <div>
    <h1>Hello world</h1>
    <button onClick={onSignin}>Sign in</button>
  </div>;
}
