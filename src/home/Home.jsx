// 페이지 이동
import { useNavigate } from "react-router-dom";

import PageMove from "../component/PageMovie.jsx";
import { useState } from "react";

import centralPoint from "../img/center-point.png";
import eastPoint from "../img/east-point-2.png";
import southernPoint from "../img/south-point.png";
import westPoint from "../img/west-point.png";


import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    const [hoverRegion, setHoverRegion] = useState(null);
        
    return(
        // 페이지 전체
        <div className="home-container">

            <div className="home-body">
                <div className="buttons">
                <button className="central-btn" onClick={() => PageMove(navigate, "central")}>중부권</button>
                <button className="eastern-btn" onClick={() => PageMove(navigate, "eastern")}>동부권</button>
                <button className="southern-btn" onClick={() => PageMove(navigate, "southern")}>남부권</button>
                <button className="western-btn" onClick={() => PageMove(navigate, "western")}>서부권</button>
                </div>
                {/* 지도 이미지 홈 화면 지도 클릭 기능 구현을 위한 svg태그 사용 */}
                    <svg viewBox="0 0 953 700" className="busan-svg-map" xmlns="http://www.w3.org/2000/svg">
                    {/* 부산 지도 이미지 */}
                    <image href="src/img/busan-2.png" x="0" y="0" width="953" height="700" />
                    {/* 중부권 (point = 각 이미의 경계선을 좌표로 나타냄) */}
                    <polygon 
                        points="450,228,450,248,440,260,444,272,456,298,454,320,468,338,471,347,453,379,406,398,399,413,403,466,397,488,413,505,423,494,440,484,476,483,517,455,532,449,546,427,566,415,566,362,584,334,599,320,605,300,619,293,619,279,609,268,591,260,583,248,586,235,590,226,593,218,594,210,592,198,586,190,579,183,571,175,563,172,537,186,514,196,478,199"
                        fill="transparent"/* 내부를 투명하게 (지도가 보이게끔)*/
                        stroke="transparent"/**외곽선을 가려주는 기능 */
                        strokeWidth="2"/* 외곽선 두께 설정*/
                        className="region region-central"
                        onMouseEnter={() => setHoverRegion("central")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "central")} /* SVG 태그로 설정한 구역 클릭시 해당 디테일 페이지로 이동하게끔 설정  (이하 동부, 서부, 남부 동일)*/
                    />
                    {/* 동부권 */}
                    <polygon 
                        points="565,174,568,155,582,137,587,125,590,108,593,102,603,90,593,80,590,75,598,70,610,70,619,68,629,68,635,71,644,76,666,86,676,88,686,88,692,81,703,75,706,71,708,65,713,54,711,46,701,39,706,28,711,26,721,28,729,34,740,43,753,43,768,39,785,36,808,29,825,29,832,34,837,46,842,54,849,59,856,66,859,70,856,78,859,93,857,105,861,115,867,123,889,134,892,145,891,155,874,162,861,154,854,147,845,154,829,157,825,165,825,206,813,216,822,219,824,229,812,246,795,253,782,261,782,268,788,273,800,263,803,275,803,288,805,303,798,310,793,317,788,325,795,342,788,347,773,339,756,366,766,364,775,376,775,388,760,388,745,409,734,403,726,386,716,383,706,384,698,394,679,367,659,369,649,361,656,346,657,332,649,305,620,287,603,265,587,256,585,234,597,216,590,196,577,181" 
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-eastern"
                        onMouseEnter={() => setHoverRegion("eastern")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "eastern")}
                    />
                    {/* 서부권 */}
                    <polygon 
                        points="448,228,450,248,442,257,439,269,446,280,455,292,458,305,454,315,454,323,468,336,471,349,464,359,454,375,446,381,430,387,411,396,400,406,399,416,398,431,400,452,400,474,396,489,380,498,371,513,367,530,377,539,388,550,391,558,389,565,389,574,399,578,403,588,402,598,394,606,387,614,385,598,376,594,369,598,365,608,369,617,376,628,377,636,377,652,377,664,371,668,360,664,356,652,348,649,337,654,335,676,320,681,302,652,298,557,290,553,281,590,273,597,258,590,268,543,249,561,245,584,229,590,220,592,210,589,201,563,214,526,199,526,189,543,189,581,183,597,169,601,158,588,151,601,137,601,122,600,110,593,88,586,75,578,71,566,75,554,107,549,110,538,100,529,95,515,91,505,68,502,47,491,31,458,41,447,58,444,74,450,82,455,112,448,123,436,155,436,166,442,185,442,190,435,183,424,177,426,177,392,159,372,171,359,187,349,209,348,220,329,230,328,241,332,246,344,274,331,301,335,341,325,379,305,387,284,395,269,403,260,400,240,411,234,428,229"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-western"
                        onMouseEnter={() => setHoverRegion("western")}
                        onMouseLeave={() => setHoverRegion(null)}     
                        onClick={() => PageMove(navigate, "western")}
                    />
                    {/* 남부권 */}
                    <polygon 
                        points="634,290,621,286,614,293,610,304,604,312,597,322,581,324,577,351,565,358,564,376,565,388,568,403,570,413,557,413,549,425,541,427,537,438,537,451,517,453,503,469,493,474,485,473,475,481,460,479,446,479,439,484,439,492,416,506,400,489,384,489,373,520,367,529,375,537,385,544,392,571,400,576,404,599,388,613,389,636,395,644,402,644,414,637,407,616,420,608,424,605,420,584,424,580,431,588,431,597,474,622,482,638,491,641,513,659,533,663,538,657,541,645,522,624,521,605,501,580,474,554,470,537,485,527,487,541,506,550,531,541,537,547,538,563,550,567,561,558,565,566,574,569,581,567,590,563,593,547,598,539,585,505,573,501,566,491,577,482,581,464,597,459,609,462,624,471,637,470,645,459,659,459,675,468,688,455,707,451,709,443,713,419,738,411,729,388,716,381,705,385,696,393,688,376,677,365,661,369,651,363,656,343,659,325,649,304"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth="2"
                        className="region region-southern"
                        onMouseEnter={() => setHoverRegion("southern")}
                        onMouseLeave={() => setHoverRegion(null)}
                        onClick={() => PageMove(navigate, "southern")}
                    />
                    </svg>

                    {hoverRegion === "central" && (
                        /* 지도의 각 구역에 마우스 올려둘 때 미리 설정한 구역에 맞는 이미지 띄우도록 설정 */
                        <div className="region-preview-center"> 
                            <img src={centralPoint} alt="중부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "eastern" && (
                        <div className="region-preview-eastern">
                            <img src={eastPoint} alt="동부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "western" && (
                        <div className="region-preview-western">
                            <img src={westPoint} alt="서부권 미리보기" />
                        </div>
                        )}
                    {hoverRegion === "southern" && (
                        <div className="region-preview-southern">
                            <img src={southernPoint} alt="남부권 미리보기" />
                        </div>
                        )}

                    </div>
        </div>
    );
}