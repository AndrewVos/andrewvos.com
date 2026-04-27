import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import "./index.css";
import Books from "./pages/Books";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
