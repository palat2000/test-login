import Button from "./components/Button";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import LoginContextProvider from "./context/LoginContextProvider";

function App() {
  return (
    <LoginContextProvider>
      <User />
      <Login />
      <Register />
      <Button />
    </LoginContextProvider>
  );
}

export default App;
