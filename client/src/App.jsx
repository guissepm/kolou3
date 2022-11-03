import React, { Component } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from './components/Homepage';
import Dashboard from "./components/Dashboard";
import GenerateForm from './components/GenerateForm';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#fafafa" }}>
        <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Homepage/>} exact  />
            <Route path="/login" element={<SignIn/>} />
            <Route path="/generate-certificate" element={<GenerateForm/>} />
            <Route path="/display/certificate/:id" element={<Dashboard/>} />
        </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
