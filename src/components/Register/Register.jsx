import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle,FaGithub } from "react-icons/fa";

const Register = () => {
  const { user, createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  

  const [error, setError] = useState('');
  


  const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoUrl = form.photo_url.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photoUrl, email, password);
          
          createUser(email, password)
            .then((result) => {
              const createdUser = result.user;
              console.log(createdUser);
              form.reset();
            })
            .catch(error => {
            setError(error);
          })

  };

  const handleGoogleSignIn = () => {
          googleSignIn()
            .then(result => {
            console.log(result);
            })
            .catch(error => {
            console.error(error);
            })
  }


  const handleGithubSignIn = () => {
          githubSignIn()
            .then(result => {
            console.log(result);
            })
            .catch(error => {
            console.error(error);
          })
  }

    return (
      <div className="hero w-full bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo_url"
                  placeholder="Enter Your Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    Already have an account?
                    <Link to="/login" className="btn btn-link pl-1">
                      LogIn
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="py-4 flex justify-center items-center">
              <hr className="w-1/3 px-2 mx-2" /> OR{" "}
              <hr className="w-1/3 mx-2" />
            </div>
            <div className="flex gap-2 justify-center items-center pb-5">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-info w-5/12"
              >
                <FaGoogle className="text-2xl"></FaGoogle>Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-info w-5/12"
              >
                <FaGithub className="text-3xl"></FaGithub>Github
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;