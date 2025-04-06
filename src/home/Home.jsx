// 페이지 이동
import { useNavigate } from "react-router-dom";

import PageMove from "../component/PageMovie.jsx";
import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";

import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
        
    return(
        // 페이지 전체
        <div className="home-container">
            {/* header */}
            <Header />

            {/* body */}
            <div className="home-body">
                {/* 지도 이미지 */}
                <img className="busan-map" />
                {/* 지역별 버튼 */}
                <button className="central-btn" onClick={() => PageMove(navigate, "central")}>중부권</button>
                <button className="eastern-btn" onClick={() => PageMove(navigate, "eastern")}>동부권</button>
                <button className="southern-btn" onClick={() => PageMove(navigate, "southern")}>남부권</button>
                <button className="western-btn" onClick={() => PageMove(navigate, "western")}>서부권</button>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}