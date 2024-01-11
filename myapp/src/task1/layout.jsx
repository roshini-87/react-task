import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h1>HTML element in React</h1>
      <nav>
        <ul>
          <li>
            <u><Link to="/Table">Table</Link></u>
          </li>
          <li>
            <u><Link to="/Form">Form</Link></u>
          </li>
          <li>
            <u><Link to="/Formelements">Form Elements</Link></u>
          </li>
        </ul>
      </nav>
      <h1>Addition of Two Numbers</h1>
      <nav>
        <ul>
          <li>
            <u><Link to="/Addition">Addition</Link></u>
          </li>
        </ul>
      </nav>
      <h1>JSON data in HTML table</h1>
      <nav>
        <ul>
          <li>
            <u><Link to="/jsondata">Json data in table</Link></u>
          </li>
        </ul>
      </nav>
      <h1>Weather </h1>
      <nav>
        <ul>
          <li>
            <u><Link to="/Weather">Weather API</Link></u>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
