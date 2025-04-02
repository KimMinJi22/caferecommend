import "./Home.css";

export default function Home() {
    return(
        // 페이지 전체
        <div className="home-container">
            {/* header */}
            <div className="home-header">
                <h1>카페기행(임시)</h1>
            </div>
            {/* body */}
            <div className="home-body">
                {/* 지도 이미지 */}
                <img className="busan-map" />
                <button>서부권</button>
                <button>중부권</button>
                <button>남부권</button>
                <button>동부권</button>
            </div>
            {/* footer */}
            <div className="home-footer">
                <p>카페기행(임시) | 김민지 김대웅 | 발표일자</p>
                <p>코리아IT아카데미 | 부산 부산진구 중앙대로 668 4층</p>
                <button>후기</button>
            </div>
        </div>
    );
}