import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "../../types/types";

type SingleUserPageParams = {
  id: string;
};
const SingleUserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<SingleUserPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  });

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }


  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {" "}
        {user?.address?.city} {user?.address?.street} {user?.address?.zipcode}
      </div>
    </div>
  );
};

export default SingleUserPage;
