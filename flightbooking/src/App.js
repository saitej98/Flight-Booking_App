import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="*" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
