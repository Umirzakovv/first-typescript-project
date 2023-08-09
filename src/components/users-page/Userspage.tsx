import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../types/types";
import { List } from "../list/List";
import Useritem from "../user-item/UserItem";

const Userspage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <Useritem user={user} key={user.id} />}
      />
    </div>
  );
};

export default Userspage;
