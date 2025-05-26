import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [errorMessage,setErrorMessage]=useState('')
  const {loginUser}=useContext(AuthContext)
const navigate=useNavigate()
  const handelLogin=(e)=>{
    e.preventDefault();
    const form = e.target ;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('Login SuccesFull!')
        navigate('/')
        e.target.reset()
      })
      .catch(error => {
        console.log(error.message)
        setErrorMessage(error.message)
        {
          errorMessage === "Firebase: Error (auth/invalid-credential)." && toast.error('Wrong password or email')
        }
      })
  }
    return (
        <div className="items-center">
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>New to thsi website? 
        <br />
        <Link  to='/register'>Register</Link>
      </p>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;