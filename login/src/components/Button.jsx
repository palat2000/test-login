import { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

function Button() {
  const { handleLogout, user } = useContext(LoginContext);
  return user ? <button onClick={handleLogout}>Logout</button> : <></>;
}

export default Button;
