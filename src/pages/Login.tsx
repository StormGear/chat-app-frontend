import { useState, type SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  }

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();

     try {
       const response = await fetch(`http://localhost:8080/user/login`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, password }),
       });
       if (!response.ok) {
         const errorInfo = await response.json();
         throw new Error(errorInfo || 'Login failed');
       }
       const data = await response.json();
       console.log('Login successful: ', data);
        if (data.success) {
           login(data.id, data.username);
           navigate("/home");
           alert("Login successful, welcome back");
        } else {
            alert("Login failed, please try again");
         }
     } catch (error) {
       console.error('Error during login', error);
     }
    };

    
    const handlePasswordChange = (e: {
        target: { value: SetStateAction<string> };
      }) => {
        setPassword(e.target.value);
      };

  return (
    <div className="center">
      <div>
        <div>
          <p className="text-3xl font-bold">Login into your Account</p>
        </div>
      </div>
      <div>
        <label htmlFor="username"  className="block text-gray-700 text-sm font-bold mb-2 my-10">
            Enter username
        </label>
        <input 
        type="text" 
        id="username"
        value={username}
         className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700"
        onChange={handleUsernameChange}
        placeholder="Enter username"
        />
      </div>
      <div>
        <label htmlFor="password"  className="block text-gray-700 text-sm font-bold mb-2 my-10">
            Enter password
        </label>
        <input 
        type="text" 
        id="password"
        value={password}
         className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700"
        onChange={handlePasswordChange}
        placeholder="Enter password"
        />
      </div>
      <div className="card" id="login">
          <button
           onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer"
           >
            Login
          </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer">
          <Link to="/">Register an Account</Link>
      </button>
    
    </div>
  )
}

export default Login