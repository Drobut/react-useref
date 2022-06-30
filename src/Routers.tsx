import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Example from "./Pages/Example";
import Explication from "./Pages/Explication";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/explication" element={<Explication />} />
      </Routes>
    </BrowserRouter>
  );
}
