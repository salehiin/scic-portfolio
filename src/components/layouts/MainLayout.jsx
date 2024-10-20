// import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";
import Contact from "../Contact";
import Footer from "../Footer";
import Nav from "../Nav";
import Resume from "../Resume";
import Services from "../Services";
import Skills from "../Skills";
import Works from "../Works";


const MainLayout = () => {
    return (
        <div className="bg-[#1e1e1e] text-white border">
            <div className="">
                <Nav></Nav>
            </div>
            {/* <Home></Home> */}
            {/* <div>
                <Services></Services>
                <Works></Works>
                <Resume></Resume>
                <Skills></Skills>
                <Contact></Contact>
            </div> */}
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <div className="bg-[#52b788] text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;