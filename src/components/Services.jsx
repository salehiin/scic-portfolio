import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-72 pt-28 block text-center" id="services">
      <div>
        <h1 className="text-5xl">My Quality Services</h1>
        <p className="py-4 px-72">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="mt-10">
        <ul className="w-full">
          
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center w-3/12">01 <span className="text-3xl ml-4">Web Design</span></h3>
              <p className="w-6/12">
                I break down complex user experience problems to
                create integrity focussed solutions that connect billions of
                people 
              </p>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center w-3/12">01 <span className="text-3xl ml-4">Web Development</span></h3>
              <p className="w-6/12">
                I break down complex user experience problems to
                create integrity focussed solutions that connect billions of
                people 
              </p>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center w-3/12">01 <span className="text-3xl ml-4">Word Press</span></h3>
              <p className="w-6/12">
                I break down complex user experience problems to
                create integrity focussed solutions that connect billions of
                people 
              </p>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center w-3/12">01 <span className="text-3xl ml-4">Email Template</span></h3>
              <p className="w-6/12">
                I break down complex user experience problems to
                create integrity focussed solutions that connect billions of
                people 
              </p>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
