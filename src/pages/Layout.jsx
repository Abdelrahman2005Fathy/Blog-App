import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (
    <div>
        <Link to="/Header"></Link>
        <Outlet />
    </div>
  );
};

export default Layout;