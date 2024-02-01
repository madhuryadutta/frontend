import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          {/* <Profile /> */}
          {/* </Route> */}
          <Route path="/" element={<Profile />} />
          {/* <Profile /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;