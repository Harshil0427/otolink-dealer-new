import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Create a CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "abc@gmail.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="OtoLink Logo" className="logo" />
      <div className="login-box">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
