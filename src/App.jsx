import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewFlights from './components/ViewFlights'

function App() {
  return (
    <>
      <ViewFlights/>
    </>
  );
}

export default App;
