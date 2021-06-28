import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHead from "./components/Navbar/navbar";
import MainPage from "./components/Layout/MainPage";

function App() {
  return (
      <div className="wrapper">
          <NavbarHead/>
          <MainPage/>
      </div>
  )
}

export default App;
