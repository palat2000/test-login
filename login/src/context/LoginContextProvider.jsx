import { createContext, useState } from "react";
import axios from "axios";
export const LoginContext = createContext();
function LoginContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(true);
  const [isUsed, setIsUsed] = useState(null);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const register = async () => {
    try {
      const result = { username: registerUsername, password: registerPassword };
      const response = await axios.post(
        "http://localhost:8080/register",
        result
      );
      if (response.data.used) {
        setIsUsed({ used: true });
        return;
      }
      setRegisterUsername("");
      setRegisterPassword("");
      setConfirmPassword("");
      setIsUsed(null);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const result = { username: username.trim().toLowerCase(), password };
      const response = await axios.post("http://localhost:8080/login", result);
      if (response.data.notFound) {
        setIsUsed({ userWrong: true });
        return;
      }
      setUser(response.data);
      setUsername("");
      setPassword("");
      setIsUsed(null);
    } catch (err) {
      console.log("err from catch", err);
    }
  };

  const handleUsername = (e) => {
    setRegisterUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
      setCheck(false);
      return;
    }
    setCheck(true);
    register();
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider
      value={{
        username,
        password,
        handleChangeUsername,
        handleChangePassword,
        handleSubmit,
        check,
        handleUsername,
        handlePassword,
        handleConfirmPassword,
        handleRegister,
        registerUsername,
        registerPassword,
        confirmPassword,
        isUsed,
        user,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
