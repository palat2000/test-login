import { createContext, useState } from "react";
import axios from "axios";

export const RegisterContext = createContext();
function RegisterContextProvider({ children }) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(true);

  const register = async () => {
    try {
      const result = { username: registerUsername, password: registerPassword };
      const { data } = await axios.post(
        "http://localhost:8080/register",
        result
      );
      setRegisterUsername("");
      setRegisterPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.log(err);
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
    // register();
  };
  return (
    <RegisterContext.Provider
      value={{
        registerUsername,
        registerPassword,
        confirmPassword,
        handleUsername,
        handlePassword,
        handleConfirmPassword,
        handleRegister,
        check,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContextProvider;
