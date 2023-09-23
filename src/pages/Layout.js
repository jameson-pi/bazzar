import { Outlet, Link } from "react-router-dom";
import "./App.css";
const Layout = () => {
  return (
    <>
      <div class="same-line">
      <h1>Bazzar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </div>
    </>

  )
};

export default Layout;