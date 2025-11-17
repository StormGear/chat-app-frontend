import { useState, type SetStateAction } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  }

  const handleLogin = () => {

  }

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
        onChange={handleInputChange}
        placeholder="Enter username"
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