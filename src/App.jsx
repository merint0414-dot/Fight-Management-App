<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddFlight from "./components/AddFlight";
import ViewFlights from "./components/ViewFlights";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
>>>>>>> 0fdacb7 (Complete Add Flight feature)

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-flight" element={<AddFlight />} />
<<<<<<< HEAD
        <Route path="/flights" element={<ViewFlights />} />
      </Routes>
    </>
  );
}

export default App
=======
        <Route path="/view-flights" element={<ViewFlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 0fdacb7 (Complete Add Flight feature)
