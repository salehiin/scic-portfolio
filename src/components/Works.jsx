import hangout from '../assets/hangout.png';
import fabricraft from '../assets/fabricraft.png';
import luxstay from '../assets/luxstay.png';
import { FaSquareFacebook, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";

const Works = () => {
    return (
        <div className=" min-h-72 pt-28" id="works">
            <div className="text-center mb-6 pb-5">
                <h1 className="text-4xl md:text-5xl text-[#52b788] font-bold">Featured Projects</h1>
                <p className="py-4 md:px-3 lg:px-72">
                    Here’s a collection of my recent projects, where I’ve applied my skills in full stack development to bring ideas to life. Each project reflects my passion for creating dynamic, user-friendly applications and showcases my journey as a developer. Explore how I combine creativity and technical expertise to solve real-world problems.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  justify-around gap-6">
                <div className=" max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-4 md:mb-0">
                    <img src={hangout} alt="" className="object-contain object-center w-full rounded-t-md lg:h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between md:p-2 lg:p-6 space-y-1 md:space-y-2 lg:space-y-8 bg-gray-500">
                        <div className="space-y-2 p-1 md:p-0">
                            <h2 className="text-3xl font-semibold tracking-wide">Hangout</h2>
                            <p className="dark:text-gray-800">A house rental platform where users can browse and book properties. It features user authentication, property listings, and a booking system. The project is built using React, Firebase, and Node.js.</p>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-2 p-2 md:p-0'>
                            <a href="https://atwelve-hangout.web.app/" target="_blank" type="button" className="flex items-center justify-center p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:bg-[#52b788] dark:text-gray-800">Live Site</a>
                            <a href="https://github.com/salehiin/hangout" target="_blank" type="button" className="flex items-center justify-center p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:text-[#52b788] dark:bg-gray-800">Code Link</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-4 md:mb-0">
                    <img src={fabricraft} alt="" className="object-contain object-center w-full rounded-t-md lg:h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between md:p-2 lg:p-6 space-y-1 md:space-y-2 lg:space-y-8 bg-gray-500">
                        <div className="space-y-2 p-1 md:p-0">
                            <h2 className="text-3xl font-semibold tracking-wide">Fabricraft</h2>
                            <p className="dark:text-gray-800">An e-commerce platform for high-quality, unique art and craft supplies. It offers product listings, a shopping cart, and secure checkout. The technologies used include React, Firebase, and Tailwind CSS.</p>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-2 p-2 md:p-0'>
                            <a href="https://aten-fabricraft.web.app/" target="_blank" type="button" className="flex items-center justify-center w-full p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:bg-[#52b788] dark:text-gray-800">Live Site</a>
                            <a href="https://github.com/salehiin/fabricraft" target="_blank" type="button" className="flex items-center justify-center p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:text-[#52b788] dark:bg-gray-800">Code Link</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={luxstay} alt="" className="object-contain object-center w-full rounded-t-md lg:h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between md:p-2 lg:p-6 space-y-1 md:space-y-2 lg:space-y-8 bg-gray-500">
                        <div className="space-y-2 p-1 md:p-0">
                            <h2 className="text-3xl font-semibold tracking-wide">Luxstay</h2>
                            <p className="dark:text-gray-800">A property rental website designed for luxury accommodations. It includes features like property search, a booking system, and user reviews. The project is developed using React, Node.js, and MongoDB.</p>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-2 p-2 md:p-0'>
                            <a href="https://anine-luxstay.web.app/" target="_blank" type="button" className="flex items-center justify-center w-full p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:bg-[#52b788] dark:text-gray-800">Live Site</a>
                            <a href="https://github.com/salehiin/luxstay" target="_blank" type="button" className="flex items-center justify-center p-2 lg:p-3 font-semibold tracking-wide rounded-md dark:text-[#52b788] dark:bg-gray-800">Code Link</a>
                            {/* <div className='grid grid-cols-2 gap-2'>
                                <a href="https://anine-luxstay.web.app/" target="_blank" type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#52b788] dark:text-gray-800">Live Site</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;