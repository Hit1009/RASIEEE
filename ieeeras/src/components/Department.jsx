import React from 'react';
import data from "../constants/departments";

const Dept = (props) => {
    return (
        <div className={`h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 flex flex-col items-center bg-gradient-to-b from-black via-black to-[#016FAA99] mt-${props.index % 2 === 0 ? 0 : 5}`}>
            <div className="flex justify-center items-center">
                <img src={props.icon} alt={props.name} className="object-contain w-full h-full" />
            </div>
            <p className="text-white mt-5 text-xl">{props.name}</p>
        </div>
    );
};

function Departments() {
    return (
        <div id="Departments" className="py-20">
            <div className="absolute left-[50%] top-[200%] w-[10%] h-80 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FC67FA] filter blur-[200px] rounded-full transform rotate-45"></div>
            <div className="absolute left-[20%] top-[270%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#F4C4F3] to-[#FFF] filter blur-[180px] rounded-full transform rotate-90"></div>
            <div className="absolute left-[80%] top-[270%] w-[10%] h-60 -mt-60 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] filter blur-[180px] rounded-full transform rotate-90"></div>


            <div className="text-4xl sm:text-5xl lg:text-7xl ml-[10%]">
                <span className="text-white underline-offset-2">Departments </span>
                <span className="text-white">.</span>
            </div>
            <hr className="ml-[10%] w-[19%] md:w-[14%] lg:w-[16%] xl:w-[11%] mt-5 h-1 rounded-lg border-0 bg-[#0073AE]" />
            <div className="content">
                <p className="text-white ml-[10%] mt-5 sm:text-lg text-base max-w-3xl">
                    The IEEE RAS is a global organization with a wide range of technical expertise. As such, it is involved in a wide range of projects, from developing new technologies to improving existing ones.
                </p>
            </div>
            <div className="flex gap-4 mt-5 ml-[10%] justify-center">
                {data && data.map((details, index) => (
                    <Dept key={details.id} index={index} {...details} />
                ))}
            </div>
        </div>
    );
}

export default Departments;
