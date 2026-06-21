import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      toast.success("Logout Successfully", {
        autoClose: 3000,
        position: "bottom-right",
      });
      navigate("/");
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
