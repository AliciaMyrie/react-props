import React, { useState } from "react";
import Menubar from "./components/Menubar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import Coffee from "./components/Coffee";

function App() {
  const [name, setName] = useState("Cisco");
  return (
    <>
      <Menubar name={name} setName={setName} />
      <Main name={name} />
      <Coffee />
      <Footer />
    </>
  );
}

export default App;
