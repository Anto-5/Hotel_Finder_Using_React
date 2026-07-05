import { Routes, Route } from "react-router-dom";
import HotelDetails from "./pages/HotelDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/hotel/:id"
    element={<HotelDetails />}
  />
</Routes>

      <Footer />
    </>
  );
}

export default App;