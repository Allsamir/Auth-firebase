import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { useAuth } from "./AuthProvider";

function App() {
  const { user, logOut } = useAuth();

  const hanldeSignOut = () => {
    logOut()
      .then((result) => {
        console.log("Logout successfully", result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const email = user?.email;
  return (
    <>
      <div className="mb-8">
        <ul className="flex justify-end gap-4 items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          {user && <li>{email}</li>}
          {user ? (
            <button onClick={hanldeSignOut}>SignOut</button>
          ) : (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
