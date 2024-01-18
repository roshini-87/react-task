
import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './tasks/layout';
import TableComponent from './tasks/table';
import FormComponent from './tasks/form';
import FormElementsComponent from './tasks/formelements';
import Addition from './tasks/addition';
import DataList from './tasks/jsondata';
import Weather from './tasks/weather';
import Logout from './tasks/logout';
import Loginpage from './tasks/class-login';
import Signuppage from './tasks/class-signup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { isAuthenticated } = this.state;
    const { history } = this.props;

    return (
      <Router>
        <div>
          <nav>
            <ul>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                  <li>
                    <Link to="/layout">Dashboard</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <Routes>
            <Route
              path="/logout"
              element={<Logout onLogout={this.handleLogout} />}
            />
            <Route
              path="/login"
              element={<Loginpage onLogin={this.handleLogin} history={history} />}
            />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/layout" element={<Dashboard />} />
            <Route path="/Table" element={<TableComponent />} />
            <Route path="/Form" element={<FormComponent />} />
            <Route path="/Formelements" element={<FormElementsComponent />} />
            <Route path="/Addition" element={<Addition />} />
            <Route path="/jsondata" element={<DataList />} />
            <Route path="/Weather" element={<Weather />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
