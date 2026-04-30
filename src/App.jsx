import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/twovillas/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;