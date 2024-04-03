import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="mb-8">
        <ul className="flex justify-end gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
