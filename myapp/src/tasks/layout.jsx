import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav>
        <ul className="horizontal-nav">
          <li>
            <u><Link to="/Table">Table</Link></u>
          </li>
          <li>
            <u><Link to="/Form">Form</Link></u>
          </li>
          <li>
            <u><Link to="/Formelements">Form Elements</Link></u>
          </li>
          <li>
            <u><Link to="/Addition">Addition</Link></u>
          </li>
          <li>
            <u><Link to="/jsondata">Json data in table</Link></u>
          </li>
          <li>
            <u><Link to="/Weather">Weather API</Link></u>
          </li>
          {/* <li>
            <u><Link to="/login">Login</Link></u>
          </li>
          <li>
            <u><Link to="/signup">Sign up</Link></u>
          </li> */}
          {/* <li>
            <u><Link to="/loginpage">Login</Link></u>
          </li>
          <li>
            <u><Link to="/signuppage">Sign up</Link></u>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Dashboard;
