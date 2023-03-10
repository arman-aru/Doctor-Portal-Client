import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const { createUser, updateUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState('')

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      // toast.success("User created Succesfully");
      toast((t) => (
        <span className="text-primary">
            User created <b>Succesfully </b>
          <button
            className="bg-red-600 btn btn-sm btn-circle"
            onClick={() => toast.dismiss(t.id)}
          >
            {" "}
            ✕
          </button>
        </span>
      ));
      // Toast close
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(() =>{})
      .catch(err => console.log(err));
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    });
  };
  return (
    <div className="h-[500px] flex justify-center items-center my-48">
      {/* React form */}
      <form
        className="text-center shadow-2xl px-24 py-10 rounded-2xl"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <div>
          <h2 className="text-4xl font-bold  text-primary mb-6">
            Create an Account
          </h2>
        </div>
        {/* Name  */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
            {errors.text && (
              <p role="alert" className="text-red-600">
                {errors.text?.message}
              </p>
            )}
          </label>
          <input
            {...register("text", {
              required: "text dite hobe",
              minLength: { value: 6, message: "text 6 ta hoite hobe" },
            })}
            type="text"
            placeholder="Enter your text"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
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
              pattern: {value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])/, message: "Password must be super strong"}
            })}
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
          {/* Sign up error message */}
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </div>

        <input className="btn btn-wide btn-secondary mt-6" type="submit" />
        <br />
        <label className="label">
          <span className="label-text-alt mx-auto">
            Have an account Doctors Portal?
            <Link to="/login" className="text-info">
              Sign In Now
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

export default Signup;
