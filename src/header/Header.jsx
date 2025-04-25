// 어느 페이지든 상단에 위치
import { useNavigate } from "react-router-dom";

import PageMove from "../component/PageMovie.jsx";

import "./Header.css";

export default function Header() {
    const navigate = useNavigate();
    return(
        <div className="header">
            {/* 클릭 시 루트로 복귀와 이미지 태그를통해 버튼내부에 커피 이미지 추가*/}
            <button onClick={() => PageMove(navigate, "/")}><img src="src\img\header-img.png" alt="coffee icon" className="icon" />
                카페기행
            </button>
        </div>
    );
}