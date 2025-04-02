import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트(Home) */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App