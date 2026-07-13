import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from "./components/NavBar";
import AddFlight from "./components/AddFlight";
import ViewFlights from "./components/ViewFlights";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<AddFlight />} />
        <Route path="/add-flight" element={<AddFlight />} />
        <Route path="/flights" element={<ViewFlights />} />
      </Routes>
    </>
  );
}

export default App;
