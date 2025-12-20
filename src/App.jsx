import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Features, Home, Pricing, Stories } from "./pages";

export default function App() {
  return (
    <div className="mx-auto max-w-360">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
