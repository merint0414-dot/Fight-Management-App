import { Routes, Route } from "react-router-dom"
import "./App.css"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AddFlight from "./components/AddFlight"
import ViewFlights from "./components/ViewFlights"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-flight" element={<AddFlight />} />
        <Route path="/flights" element={<ViewFlights />} />
      </Routes>
    </>
  );
}

export default App