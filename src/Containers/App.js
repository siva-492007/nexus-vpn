import React from "react";
import './App.css';
import Navbar from "../Components/Navbar/Navbar";
import {Routes, Route} from 'react-router';
import Users from "../Pages/Users/Users";
import Servers from "../Pages/Servers/Servers";

const App = () => {

    const AdminRoute =
        <Routes>
            <Route exact path="/users" element={<Users/>}/>
            <Route exact path="/servers" element={<Servers/>}/>
        </Routes>

  return (
    <div className="App">
        <Navbar />
            {AdminRoute}
    </div>
  );
}

export default App;
