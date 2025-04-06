// 메인 페이지는 클릭만
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/Home.jsx";
import Central from "./detail/central/Central.jsx";
import Eastern from "./detail/eastern/Eastern.jsx";
import Southern from "./detail/southern/Southern.jsx";
import Western from "./detail/western/Western.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트(Home) */}
        <Route path="/" element={<Home />}></Route>

        {/* 중부권(Central) */}
        <Route path="/central" element={<Central />}></Route>
        
        {/* 동부권(Eastern) */}
        <Route path="/eastern" element={<Eastern />}></Route>

        {/* 남부권(Southern) */}
        <Route path="/southern" element={<Southern />}></Route>

        {/* 서부권(Western) */}
        <Route path="/western" element={<Western />}></Route>
      </Routes>
    </Router>
  )
}

export default App