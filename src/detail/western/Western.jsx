import Footer from "../../footer/Footer.jsx";
import Header from "../../header/Header.jsx";

import "./Western.css";

import westernCafeImg1 from "../../img/westernCafe1.jpg";
import westernCafeImg2 from "../../img/westernCafe2.jpg";
import westernCafeImg3 from "../../img/westernCafe3.jpg";
import westernCafeImg4 from "../../img/westernCafe4.jpg";

export default function Western() {
    return (
        <div className="western-cafe">
            <Header />

            <div className="western-part1">
                <a href="https://naver.me/5GpJSfRL" target="_blank" rel="noopener noreferrer">
                    <img src={westernCafeImg1} alt="카페 토북베이커리 이미지" />
                </a>
                <p>토북베이커리</p>
                <p>주차시설 좋고, 빵 장인 김덕규씨가 운영하는 카페</p>
                <p>#빵이 대존맛</p>
            </div>

            <div className="western-part2">
                <a href="https://naver.me/xiqilvRj" target="_blank" rel="noopener noreferrer">
                    <img src={westernCafeImg2} alt="카페 보다 이미지" />
                </a>
                <p>카페 보다</p>
                <p>고급 원두를 사용해서 커피맛이 정말 좋음</p>
                <p>낙동강 뷰</p>
            </div>

            <div className="western-part3">
                <a href="https://naver.me/x7nJxtEm" target="_blank" rel="noopener noreferrer">
                    <img src={westernCafeImg3} alt="카페 바이버 이미지" />
                </a>
                <p>카페 바이버</p>
                <p>주차가 협소하지만 대형 카페라 공간이 넓음</p>
                <p>#대형 카페</p>
            </div>

            <div className="western-part4">
                <a href="https://naver.me/xjgQXu1F" target="_blank" rel="noopener noreferrer">
                    <img src={westernCafeImg4} alt="카페 오르디 이미지" />
                </a>
                <p>오르디</p>
                <p>주차가 편하고, 애견동반 가능</p>
                <p>#조용한 분위기</p>
            </div>
            
            <Footer />
        </div>
    );
}