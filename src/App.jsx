// 메인 페이지는 클릭만
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/Home.jsx";
import Central from "./detail/central/Central.jsx";
import Eastern from "./detail/eastern/Eastern.jsx";
import Southern from "./detail/southern/Southern.jsx";
import Western from "./detail/western/Western.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 기본 경로(Home) */}
          <Route index element={<Home />} />
          {/* 권역별 상세 */}
          <Route path="central" element={<Central />} />
          <Route path="eastern" element={<Eastern />} />
          <Route path="southern" element={<Southern />} />
          <Route path="western" element={<Western />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App