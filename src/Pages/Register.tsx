import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { updateProfile } from "firebase/auth";

const Register: React.FC = () => {
  const { createUser, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const userName = e.currentTarget.userName.value;
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: userName,
        })
          .then(() => {
            console.log("Register Successfully Done");
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
                name="userName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="py-4">
            Already have account? <Link to={`/login`}>Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
