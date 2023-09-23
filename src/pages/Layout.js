import { Outlet, Link } from "react-router-dom";
import "./App.css";
const Layout = () => {
  return (
    <>
      <div class="route">
      <nav>
        <ul>
          <li>
            <Link to="/"><button class="btn-hover color-1">Bazzar</button></Link>
          </li>
          <li>
            <Link to="/blogs"><button class="btn-hover color-2">Blogs</button></Link>
          </li>
          <li>
            <Link to="/contact"><button class="btn-hover color-3">Contact</button></Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </>

  )
};

export default Layout;