import RESUME from '../assets/resume.pdf';
import { FaSquareFacebook, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
// import { BsLinkedin } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen px-0 md:px-16 pt-12">
        <div className="hero-content flex-col lg:flex-row-reverse py-10 md:py-12">
          <img
            src="https://i.postimg.cc/fygPq2F8/ppic.png"
            className="max-w-[300px] md:max-w-sm rounded-lg shadow-2xl brightness-50 border-2 border-[#52b788] rotate-6 hover:border-cyan-500/100 hover:rotate-0 ease-in-out duration-300 delay-300 w-full"
          />
          <div className="pr-0 lg:pr-[150px] md:mt-10 lg:mt-0 text-base md:text-xl text-[#52b788]">
            <h3 className="text-lg md:text-3xl font-semibold leading-10">✋ Hello! I’m<span className='text-white'> Shoeb Salehin Khan</span></h3>
            <h1 className="text-4xl md:text-6xl font-bold">Web Developer+ <br></br> UX Designer</h1>
            <p className=" py-6 text-white">

              Full stack MERN developer passionate about creating dynamic and engaging web applications. With a keen interest in both front-end and back-end development, I leverage the power of MongoDB, Express.js, React.js, and Node.js to build seamless user experiences. As I continue to grow and refine my skills, I’m excited to take on new challenges and bring innovative ideas to life through code. Let’s connect and explore the possibilities together!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a className="btn btn-outline btn-wide btn-success"
                href={RESUME}
                // href={CV}
                // href='/cv.pdf'
                target="_blank"
                rel="noopener noreferrer"
              // download="Shoeb_Salehin_Khan_CV.pdf"

              >
                Download Resume
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg> */}
              </a>
              <ul className="flex gap-4">
                <li><a target="_blank" className='text-[#52b788]' href="https://facebook.com/salehiin"><FaSquareFacebook /></a></li>
                <li><a target="_blank" className='text-[#52b788]' href="https://www.linkedin.com/in/shoebsalehinkhan/"><FaLinkedin /></a></li>
                <li><a target="_blank" className='text-[#52b788]' href="https://github.com/salehiin"><FaSquareGithub /></a></li>
                <li><a target="_blank" className='text-[#52b788]' href=""><FaSquareTwitter /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
