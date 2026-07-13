import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddFlight from "./components/AddFlight";
import ViewFlights from "./components/ViewFlights";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-flight" element={<AddFlight />} />
        <Route path="/view-flights" element={<ViewFlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;