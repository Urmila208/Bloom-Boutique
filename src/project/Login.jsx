
import React, { useState } from 'react';
import { ToastContainer ,toast} from 'react-toastify';
import './Login.css'; // Assuming CSS is in a separate file

const Login = () => {
  // State to hold input values
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, for now, just log the values
    console.log("Login attempt with:", { userName, password });
    // You can also make an API request to verify the credentials here
  };
  function Toast(){
    if(!userName || !password){
         toast.error("username passwod required")
    }else{
      toast.success('login succesfully')
    }
    
  }

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://nurserynisarga.in/wp-content/uploads/2020/07/hibiscus-yellow.webp"
          alt="Twitter Logo"
        />
      </div>
      <div className="text-center mt-4 name">🌸 Bloom Boutique</div>
      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn mt-3" onClick={Toast}>
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#" >Sign up</a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
