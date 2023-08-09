import React, { FC } from "react";
import { IUser } from "../../types/types";
import Useritem from "../user-item/UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return (<Useritem user={user} key={user.id}/>)
      })}
    </div>
  );
};

export default UserList;
