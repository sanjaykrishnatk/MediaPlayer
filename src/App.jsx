import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import Home from "./pages/Home";
import Watchhistory from "./pages/Watchhistory";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      {/*slash represent baseURL*/}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watch-history" element={<Watchhistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
