import "./App.css";
import { NavBar } from "./components";
import { Main, Register } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element= {<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
