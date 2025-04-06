// 루트에서 지역 클릭 시 페이지 이동
export default function PageMove(navigate, pram) {
    switch (pram) {
        case "/":
            navigate("/");
            break;
        case "central" :
            navigate("/central");
            break;
        case "eastern":
            navigate("/eastern");
            break;
        case "southern":
            navigate("/southern");
            break;
        case "western":
            navigate("/western");
            break;
        default :
            alert('잘못된 경로입니다.');
            break;
    }
}
