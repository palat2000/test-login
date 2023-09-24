import { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

function User() {
  const { user } = useContext(LoginContext);

  return (
    <h1>{user?.username ? `Welcome ${user.username}` : "Welcome Guest"}</h1>
  );
}

export default User;
