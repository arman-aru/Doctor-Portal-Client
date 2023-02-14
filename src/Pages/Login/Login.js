import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    
    const{signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const handleLogin = data =>{
      console.log(data);
      setLoginError('');
      signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message)
      });
    }

    return (
      <div className="h-[500px] flex justify-center items-center my-48">
        {/* React form */}
        <form
          className="text-center shadow-2xl px-24 py-10 rounded-2xl"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <h2 className="text-4xl font-bold  text-primary mb-6">
              This is Login page
            </h2>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
              {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.email?.message}
                </p>
              )}
            </label>
            <input
              {...register("email", {
                required: "Email dite hobe",
                minLength: { value: 6, message: "Email 6 ta hoite hobe" },
              })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          {/* Password field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
              {errors.password && (
                <p role="alert" className="text-red-600">
                  {errors.password?.message}
                </p>
              )}
            </label>
            <input
              {...register("password", {
                required: "Password dite hobe",
                minLength: { value: 6, message: "Password 6 ta hoite hobe" },
              })}
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <div>
              { loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
            <label className="label">
              <span className="label-text-alt">
                <a href="gg" className="text-info">
                  Forgot Password ?
                </a>
              </span>
            </label>
          </div>

          <input className="btn btn-wide btn-secondary mt-6" type="submit" />
          <br />
          <label className="label">
            <span className="label-text-alt mx-auto">
              New to Doctors Portal?
              <Link to="/signup" className="text-info">
                Create new account
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button className="btn btn-wide btn-outline btn-secondary mb-5">
            CONTINUE WITH GOOGLE
          </button>
          <br />
          <button className="btn btn-wide btn-outline btn-secondary mb-8">
            CONTINUE WITH Facebook
          </button>
        </form>
      </div>
    );
};

export default Login;