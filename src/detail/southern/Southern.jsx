import Footer from "../../footer/Footer.jsx";
import Header from "../../header/Header.jsx";

import "./Southern.css";

import southernCafeImg1 from "../../img/southernCafe1.jpg";
import southernCafeImg2 from "../../img/southernCafe2.jpg";
import southernCafeImg3 from "../../img/southernCafe3.jpg";
import southernCafeImg4 from "../../img/southernCafe4.jpg";
import dogImg from "../../img/dogImg.jpg";

export default function Southern() {
    return (
        <div className="southern-cafe">
            <Header />
            
            <div className="southern-part1">
                <a href="https://naver.me/FqWtmvhO" target="_blank" rel="noopener noreferrer">
                    <img src={southernCafeImg1} alt="카페 피아크 이미지" />
                </a>
                <p>피아크</p>
                <p>주차장이 넓고, 아이스크림이 맛있는곳</p>
                <p>#주차장 넓음</p>
            </div>

            <div className="southern-part2">
                <a href="https://naver.me/x1V577b1" target="_blank" rel="noopener noreferrer">
                    <img src={southernCafeImg2} alt="카페 오구 이미지" />
                </a>
                <p>오구 카페</p>
                <p>뷰가 좋고, 커피와 빵이 맛있음</p>
                <p>#빵존맛</p>
            </div>

            <div className="southern-part3">
                <a href="https://naver.me/5FmdGhxe" target="_blank" rel="noopener noreferrer">
                    <img src={southernCafeImg3} alt="카페 깜봉 이미지" />
                </a>
                <p>깜봉</p>
                <p>깜봉이라는 강아지가 있고, 커피와 위스키를 함께 팜</p>
                <p>깜봉이 졸귀</p>
                <img src={dogImg} alt="검정 강아지 이미지" />
            </div>

            <div className="southern-part4">
                <a href="https://naver.me/xv3Jxd8T" target="_blank" rel="noopener noreferrer">
                    <img src={southernCafeImg4} alt="카페 글루크 이미지" />
                </a>
                <p>글루크</p>
                <p>분위기 있는 브런치 카페</p>
                <p>#의자 불편함</p>
            </div>
            
            <Footer />
        </div>
    );
}