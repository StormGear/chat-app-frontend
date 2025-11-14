import { useState } from "react";


const Register = () => {
    const [username, setUsername] = useState('');

const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="center">
      <div>
        <div>
          <p>Register an Account</p>
        </div>
      </div>
      <input type="text" name="username" id="username" />
      <div className="card" id="login">
          <button>
            Register
          </button>
      </div>
    </div>
  )
}

export default Register