import "./App.css"

function Login(props) {
    return (
      <div className="login">
        <input type="text" placeholder="Usuário" spellCheck="false" onChange={(e) => props.setName(e.target.value)}/>
        <input type="password" placeholder="Senha" onChange={(e) => props.setPassword(e.target.value)}/>
        <button onClick={() => {
            if(props.name === "mikafick" && props.password === "18032023") {
                props.setRedirect(true);
            } else {
                alert("Usuário e/ou senha errados");
            }
        }}>Revelar</button>
      </div>
    );
  }
  
  export default Login;
  