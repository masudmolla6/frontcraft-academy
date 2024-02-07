import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  

const Login = () => {

  const { user, loading, signIn, passwordReset } = useContext(AuthContext);
  
  const [userEmail, setUserEmail] = useState('');
  

  const [error, setError] = useState('');
  console.log(error);

  const Navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

    const handleSubmit = (event) => {
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

      signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          Navigate(from, { replace: true });
        })
        .catch(error => {
          setError(error.message);
          // console.log(error);
      })
  }
  
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);

  }

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast("Please Enter Your Email");
    }
    passwordReset(userEmail)
      .then(() => {
        toast("Please Check Your Email And Reset Pssword.")
      })
      .then(error => console.error(error))
    
  }

    return (
      <div className="hero bg-base-200 h-screen">
        <ToastContainer></ToastContainer>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h2>{error}</h2>
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onBlur={handleEmailBlur}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label pb-0">
                  <p>
                    Don't have an account?
                    <Link to="/register" className="btn btn-link pl-1">
                      Register
                    </Link>
                  </p>
                </label>
                <label className="label py-0">
                  <p>
                    Forget Password?
                    <Link
                      onClick={handleForgetPassword}
                      className="btn btn-link pl-1"
                    >
                      Reset
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;