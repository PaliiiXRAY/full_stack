import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.length > 0 && password.length > 0) {
      navigate("/tasks", { replace: true });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <p> Enter your username: </p>
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          {" "}
          <p> Enter your password: </p>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <button> Submit</button>
      </form>
    </div>
  );
}

export default Login;
