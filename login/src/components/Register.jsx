import { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";
import "./Register.css";

function Register() {
  const {
    registerUsername,
    registerPassword,
    confirmPassword,
    handleUsername,
    handlePassword,
    handleConfirmPassword,
    handleRegister,
    isUsed,
    check,
  } = useContext(LoginContext);
  return (
    <div className="form-register">
      <form onSubmit={handleRegister}>
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          onChange={handleUsername}
          value={registerUsername}
        />
        <label htmlFor="register-password">Password</label>
        <input
          className={check ? "" : "check"}
          id="register-password"
          onChange={handlePassword}
          value={registerPassword}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          className={check ? "" : "check"}
          id="confirm-password"
          onChange={handleConfirmPassword}
          value={confirmPassword}
        />
        {isUsed?.used ? (
          <p style={{ color: "red" }}>Username is already used</p>
        ) : (
          ""
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
