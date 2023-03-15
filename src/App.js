import "./App.css"
import { useState } from "react";
import Login from "./Login";
import Cupom from "./Cupom";

function App() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  return (
    <div className="App">
      {name === "mikafick" && password === "18032023" && redirect === true ? 
      (
       <Cupom />
      ) : (
        <Login name={name} password={password} setName={setName} setPassword={setPassword} setRedirect={setRedirect}/> 
      )}
    </div>
  );
}

export default App;
