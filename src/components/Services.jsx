import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-72 pt-28 block text-center" id="services">
      <div>
        <h1 className="text-5xl">Core Competencies</h1>
        <p className="py-4 px-72">
          Throughout my journey as a web developer, I’ve honed a diverse set of technical skills that allow me to craft dynamic, user-friendly web applications. From front-end design to back-end architecture, these tools and technologies form the foundation of my expertise, enabling me to deliver seamless and efficient solutions tailored to each project’s needs.
        </p>
      </div>
      <div className="mt-10">
        <ul className="w-full">

          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center gap-4">
              <div className="grid grid-cols-6 items-center justify-around  m-2 " >
                <h3 className="text-xl font-bold flex items-center "> <span className="text-3xl ml-4">Language</span></h3>
                <p className="col-span-5 px-10 flex-grow">
                  Proficient in JavaScript, the core language for both front-end and back-end development. I leverage its versatility to build dynamic, responsive web applications, ensuring seamless interaction between client and server.
                </p>
              </div>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center gap-4">
              <div className="grid grid-cols-6 items-center justify-around  m-2 " >
                <h3 className="text-xl font-bold flex items-center "> <span className="text-3xl ml-4">Technologies</span></h3>
                <p className="col-span-5 px-10 flex-grow">
                  Skilled in the MERN stack technologies, including MongoDB for database management, Express.js for back-end logic, React.js for building dynamic user interfaces, and Node.js for server-side development. I focus on creating full-stack applications with a seamless integration between the front-end and back-end.
                </p>
              </div>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center gap-4">
              <div className="grid grid-cols-6 items-center justify-around  m-2 " >
                <h3 className="text-xl font-bold flex items-center "> <span className="text-3xl ml-4">Tools</span></h3>
                <p className="col-span-5 px-10 flex-grow">
                  Experienced with essential development tools like Git and GitHub for version control, Postman for API testing, and VS Code as a powerful code editor. I also use NPM for managing project dependencies and tools like ESLint and Prettier to maintain clean and well-structured code.
                </p>
              </div>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li>
          {/* <li className="border-b m-5 p-6 hover:bg-[#52b788] duration-500">
            <Link className="flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center w-3/12">01 <span className="text-3xl ml-4">Email Template</span></h3>
              <p className="w-6/12">
                I break down complex user experience problems to
                create integrity focussed solutions that connect billions of
                people 
              </p>
              <div className="w-8 h-1 bg-blue-700"></div>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Services;
