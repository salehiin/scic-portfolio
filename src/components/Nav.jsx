import { Link } from "react-router-dom";
import { scroller } from 'react-scroll'; 

const Nav = () => {
  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  };

  return (
    <div className="navbar bg-[#1e1e1e] text-white shadow-lg px-4 fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-2 pl-5 bg-[#1e1e1e] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link onClick={() => scrollToElement('services')}><a href="#services">Services</a></Link>
            <Link onClick={() => scrollToElement('works')}><a href="#works">Works</a></Link>
            <Link onClick={() => scrollToElement('resume')}><a href="#resume">Resume</a></Link>
            <Link onClick={() => scrollToElement('skill')}><a href="#skill">Skills</a></Link>
            <Link onClick={() => scrollToElement('contact')}><a href="#contact">Contact</a></Link>
          </ul>
        </div>
        <a className="btn btn-ghost gap-0 text-xl">S<span className="text-[#52b788]">salehin</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-bold">
          <Link onClick={() => scrollToElement('services')}><a href="#services">Services</a></Link>
          <Link onClick={() => scrollToElement('works')}><a href="#works">Works</a></Link>
          <Link onClick={() => scrollToElement('resume')}><a href="#resume">Resume</a></Link>
          <Link onClick={() => scrollToElement('skill')}><a href="#skill">Skills</a></Link>
          <Link onClick={() => scrollToElement('contact')}><a href="#contact">Contact</a></Link>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-black hover:text-white hover:bg-[#00BFFF] bg-[#52b788] border-none">Hire me!</a>
      </div>
    </div>
  );
};

export default Nav;
