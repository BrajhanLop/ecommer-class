import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, loginUser } from "../store/slices/userInfo.slice";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, user } = useSelector((store) => store.userInfo);

  const handleLogin = (values) => {
    dispatch(loginUser(values));
  };

  const handleLogout = () => {
   
    dispatch(logOut())
  }

  return (
    <div className="grid place-content-center min-h-screen">
      {token ? (
        <div className="">
          <h2 className=" text-2xl">
            {user.firstName} {user.lastName}{" "}
          </h2>
          <button onClick={handleLogout} className=" text-blue-600">Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleLogin)}>
          <h3>Welcome</h3>
          <div>
            <p>Email</p>
            <input className="border" type="text" {...register("email")} />
          </div>
          <div>
            <p>Password</p>
            <input
              className="border"
              type="password"
              {...register("password")}
            />
          </div>
          <button  className=" bg-red-600 text-white px-3">Login</button>
        </form>
      )}
    </div>
  );
};
