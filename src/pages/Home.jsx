import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";


const Home = () => {
    return (
        <div className="text-white bg-[#1e1e1e] px-4    ">
            
            <Hero></Hero>
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