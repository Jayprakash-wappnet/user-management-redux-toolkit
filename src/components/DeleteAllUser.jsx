import React from "react";
import { useDispatch } from "react-redux";
import { removeAllusers } from "../store/userSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const handleRemoveAllUsers = () => {
    dispatch(removeAllusers());
  };
  return (
    <div>
      <button className="btn btn-delete" onClick={() => handleRemoveAllUsers()}>
        DeleteAllUser
      </button>
    </div>
  );
};
