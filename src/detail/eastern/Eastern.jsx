import Footer from "../../footer/Footer.jsx";
import Header from "../../header/Header.jsx";

import "./Eastern.css";

import easternCafeImg1 from "../../img/easternCafe1.jpg";
import easternCafeImg2 from "../../img/easternCafe2.jpg";
import easternCafeImg3 from "../../img/easternCafe3.jpg";
import easternCafeImg4 from "../../img/easternCafe4.jpg";

export default function Eastern() {
    return (
        <div className="eastern-cafe">
            <Header />

            <div className="eastern-part1">
                <a href="https://naver.me/GWeDhKuX" target="_blank" rel="noopener noreferrer">
                    <img src={easternCafeImg1} alt="카페 두루미 베이커리 이미지" />
                </a>
                <p>두루미 베이커리 카페</p>
                <p>주차시절이 잘 되어있고, 애견 동반이 가능하고 커피가 맛있음</p>
                <p>#애견동반 가능 #강아지 귀여움</p>
            </div>

            <div className="eastern-part2">
                <a href="https://naver.me/GoDhEXqz" target="_blank" rel="noopener noreferrer">
                    <img src={easternCafeImg2} alt="카페 웨이브온 이미지" />
                </a>
                <p>웨이브온 커피</p>
                <p>인스타 사진 찍기 좋으나 유명해서 사람이 너무 많음</p>
                <p>#뷰 이쁨</p>
            </div>

            <div className="eastern-part3">
                <a href="https://naver.me/Fjbgyb3X" target="_blank" rel="noopener noreferrer">
                    <img src={easternCafeImg3} alt="카페 코랄라니 이미지" />
                </a>
                <p>코랄라니</p>
                <p>주차가 편하고, 바다가 바로 보여서 뷰가 좋음</p>
                <p>#바다뷰</p>
            </div>

            <div className="eastern-part4">
                <a href="https://naver.me/FIfAxpaE" target="_blank" rel="noopener noreferrer">
                    <img src={easternCafeImg4} alt="카페 문토스트 이미지" />
                </a>
                <p>문토스트 기장점</p>
                <p>살구 주스와 문토스트 조합이 맛있음</p>
                <p>#살구주스</p>
            </div>

            <Footer />
        </div>
    );
}