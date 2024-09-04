import "./App.css";
import { NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
