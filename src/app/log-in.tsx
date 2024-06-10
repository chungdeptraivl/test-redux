"use client";

import React, { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { UseDispatch, useDispatch } from "react-redux";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";

const LogIn = () => {
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onCLickLogIn = () => {
    dispatch(logIn(username));
  };

  const onCLickLogOut = () => {
    dispatch(logOut());
  };

  const onCLickToggle = () => {
    dispatch(toggleModerator());
  };
  return (
    <div>
      <input
        className="text-black"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      {!isAuth && <button onClick={onCLickLogIn}>Log In</button>}
      <br />
      {isAuth && <button onClick={onCLickLogOut}>Log Out</button>}
      <br />
      {isAuth && (
        <button onClick={onCLickToggle}>Toggle Moderator status</button>
      )}
    </div>
  );
};

export default LogIn;
