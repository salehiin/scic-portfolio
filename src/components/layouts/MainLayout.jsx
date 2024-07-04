// import Home from "../../pages/Home";
import Contact from "../Contact";
import Nav from "../Nav";
import Resume from "../Resume";
import Services from "../Services";
import Skills from "../Skills";
import Works from "../Works";


const MainLayout = () => {
    return (
        <div className="">
            <Nav></Nav>
            {/* <Home></Home> */}
            <Services></Services>
            <Works></Works>
            <Resume></Resume>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default MainLayout;