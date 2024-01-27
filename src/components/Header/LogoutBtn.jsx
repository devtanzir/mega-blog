import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-3 duration-200 hover:bg-[#e6e9e9] rounded-md uppercase font-semibold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
