import CV from '../assets/cv.pdf';

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen px-16 pt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/fygPq2F8/ppic.png"
            className="max-w-sm rounded-lg shadow-2xl brightness-50 border-2 border-[#52b788] rotate-6 hover:border-cyan-500/100 hover:rotate-0 ease-in-out duration-300 delay-300"
          />
          <div className="pr-[150px] text-xl">
            <h3 className="text-3xl font-semibold leading-10">✋ Hello! I’m Shoeb Salehin Khan</h3>
            <h1 className="text-6xl font-bold">Web Developer+ <br></br> UX Designer</h1>
            <p className="py-6">
            
Full stack MERN developer passionate about creating dynamic and engaging web applications. With a keen interest in both front-end and back-end development, I leverage the power of MongoDB, Express.js, React.js, and Node.js to build seamless user experiences. As I continue to grow and refine my skills, I’m excited to take on new challenges and bring innovative ideas to life through code. Let’s connect and explore the possibilities together!
            </p>
            <div className="flex items-center gap-4">
                <a className="btn btn-outline btn-wide btn-success"
                  href={CV}
                  // href='/cv.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  // download="Shoeb_Salehin_Khan_CV.pdf"
                  
                >
                Download CV
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
                    <li><a href="">fb</a></li>
                    <li><a href="">in</a></li>
                    <li><a href="https://github.com/salehiin" target="_blank">gh</a></li>
                    <li><a href="">tw</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
