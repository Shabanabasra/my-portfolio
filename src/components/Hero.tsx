import React from "react";
import Navbar from "./Navbar";  // This is the correct import


const Hero = () => {
    return (
        <div id="hero" className="min-h-screen flex flex-col">
            {/* Navbar positioned at the top */}
            <Navbar />

            {/* Main Hero content */}
            <div className="flex items-center justify-start pl-80 flex-grow">
                <div className="flex items-center space-x-60 w-full">
                    {/* Circular Image */}
                    <div
                        className="w-80 h-80 rounded-full bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/banner_bg.PNG') ",
                        }}
                    ></div>

                    {/* Text Content */}
                    <div className="text-[80px] sm:text-[100px] font-bold leading-tight">
                        <p data-aos="zoom-in-up">I'm</p>
                        <p data-aos="zoom-in-up">Shabana</p>
                        <p data-aos="zoom-in-up">Basra</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;