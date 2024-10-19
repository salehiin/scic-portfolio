

const Works = () => {
    return (
        <div className=" min-h-72 pt-28" id="works">
            <div className="text-center mb-6 pb-5">
                <h1 className="text-5xl">My Work</h1>
                <p className="py-4 px-72">
                    Here’s a collection of my recent projects, where I’ve applied my skills in full stack development to bring ideas to life. Each project reflects my passion for creating dynamic, user-friendly applications and showcases my journey as a developer. Explore how I combine creativity and technical expertise to solve real-world problems.
                </p>
            </div>
            <div className="flex justify-around gap-2">
                <div className="max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
                <div className="max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
                <div className="max-w-1/2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;