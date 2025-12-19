import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Stories } from "./pages";

export default function App() {
  return (
    <div className="mx-auto max-w-360">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
