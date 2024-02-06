import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const { user, loading, signIn } = useContext(AuthContext);
  

  const [error, setError] = useState('');
  console.log(error);

  const Navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

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

    return (
      <div className="hero bg-base-200">
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
                <label className="label">
                  <p>
                    Don't have an account?
                    <Link to="/register" className="btn btn-link pl-1">
                      Register
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