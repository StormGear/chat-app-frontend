import { useState, type SetStateAction } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { register } from "../services/authService";


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

      const attemptRegister = await register(username, password);

      if (attemptRegister) {
        navigate("/login");
        alert("Registration successful, please login");
      } else {
        alert("Registration failed, please try again");
      }
  };

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setUsername(e.target.value);
  }
  
    const handlePasswordChange = (e: {
      target: { value: SetStateAction<string> };
    }) => {
      setPassword(e.target.value);
    };

  return (
    <div className="center">
       <div>
        <div>
          <p className="text-3xl font-bold">Register an Account</p>
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
        onChange={handleInputChange}
        placeholder="Enter username"
        />
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
           onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer"
           >
            Register
          </button>
      </div>
      <button
              
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer">
          <Link to="/login">Login into Account</Link>
      </button>
    
    </div>
  )
}

export default Register