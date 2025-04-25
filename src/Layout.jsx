import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
// Layout 컴포넌트를 만들어 각각 디테일 화면 및 홈 화면에 Header, Footer 태그를 넣는게 아닌
// 미리 틀을 짜서 그 안에 각각의 화면을 삽입해서 페이지 이동이 Header 및 Footer 의 위치에 관여하지 않도록함
export default function Layout() {
    return (
        <div className="app-layout">
            <Header />
                <main>
                    <Outlet /> {/* 여기에 각 페이지(Home, Central...)가 렌더됨 */}
                </main>
            <Footer />
        </div>
    );
}