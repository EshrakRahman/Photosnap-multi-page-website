import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Stories } from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
