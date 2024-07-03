const Nav = () => {
  return (
    <div className="navbar bg-[#1e1e1e] shadow-lg px-4 fixed z-10">
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
            className="menu menu-sm dropdown-content bg-[#1e1e1e] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
                <a>Services</a>
            </li>
            
            <li>
                <a>Works</a>
            </li>
            <li>
                <a>Resume</a>
            </li>
            <li>
                <a>Skills</a>
            </li>
            <li>
                <a>Testimonials</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost gap-0 text-xl">S<span className="text-primary">salehin</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>
          
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Hire me!</a>
      </div>
    </div>
  );
};

export default Nav;
