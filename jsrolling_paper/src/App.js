import React, { useState } from 'react';
import Title from './components/Title';
import Login from './components/Login';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Test from './components/Test';
import Profile from './components/Profile';
import { signIn } from './server/auth';
import AuthRoute from './server/AuthRoute';

function App() {
  const [ user , setUser] = useState(null);
  const authenticated = user !=null;
  const login = ({email, password}) => setUser(signIn({email, password}));
  const logout =()=>setUser(null);
  return (
    <Router>
      <header>
        <Link to="/">
          <button className="menu">Home</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Title">
          <button>Title</button>
        </Link>
      </header>
      <hr />
      <Routes>
        <Route path = "/*" element={<Test/>} />
        <Route path = "/Login" element={<Login/>} />
        <Route path = "/Title" element={<Title/>} />
      </Routes>
    </Router>

  );
}

export default App;
