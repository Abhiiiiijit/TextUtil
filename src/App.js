import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); //Light and Dark Mode
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = 'black';
      document.body.style.backgroundColor = "#000317";
      document.body.style.color = "white";
      // showAlert("Dark Mode Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // showAlert("Light Mode Enabled","success");
    }
  };
  return (
    <>
      <Router>
        <Navbar Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/"></Route>
        </Routes>
        <TextForm name="Enter Your Text Below ...." showAlert={showAlert} />
        <div className="container my-3"></div>
      </Router>
      {/* <h3 className='mx-2'>Format your Text</h3> */}
    </>
  );
}

export default App;
