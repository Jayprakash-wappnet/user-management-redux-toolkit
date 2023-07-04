import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { AiFillDelete } from "react-icons/ai";

const UserDetails = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addNewUSer = (payload) => {
    dispatch(addUser(payload));
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={() => addNewUSer(fakeApi())}>
            Add New Users
          </button>
        </div>
        <div className="user-list">
          <ul>
            {user.map((user, id) => {
              return (
                <li key={id}>
                  <div className="user-list1">
                    <div>
                      <span className="user-name">{user}</span>
                    </div>
                    <div>
                      <button className="btn-delete" onClick={() => handleRemoveUser(id)}>
                        <AiFillDelete className="delete-icon" />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .user-list1 {
    display: flex;
    justify-content: space-around;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .user-list {
    margin-bottom: 2rem;
  }

  .user-list ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .user-item {
    display: flex;
    align-items: center;
  }

  . .user-name {
    margin-left: 1rem;
  }

  .btn-delete {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
