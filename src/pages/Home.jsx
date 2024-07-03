import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";


const Home = () => {
    return (
        <div >
            {/* Navbar */}
            <div className="h-20">
                <Nav></Nav>
            </div>
            <Services></Services>
            <Works></Works>
            <Resume></Resume>
            <Skills></Skills>
            <Contact></Contact>
            {/* <h2>Home Page</h2> */}
        </div>
    );
};

export default Home;