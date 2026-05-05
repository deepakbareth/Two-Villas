import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen ">
      <Routes>
        <Route path="/twovillas/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;