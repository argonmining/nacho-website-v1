import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="bg-custom-bg bg-cover bg-center bg-no-repeat relative h-screen">
            <Navbar />
            <div
                id="hero"
                className="p-12 text-center mt-8 flex flex-col justify-center items-center bg-[#231f20] bg-opacity-70 h-[70%] w-[80%] md:w-[40%] mx-auto text-white rounded-3xl"
                data-aos="fade-up"
            >
                <img
                    src="kaspa_logo_nacho_512.png"
                    alt="Nacho"
                    className="h-48 w-48"
                />

                <p className="text-4xl my-4">Nacho the 𐤊at</p>
                <p className="text-3xl">
                    Inspired by Shai Wyborski's pet cat Nacho
                </p>
                <p>
                    &nbsp;
                </p>
                <p className="text-3xl">
                    Ticker: NACHO
                </p>
            </div>
        </div>
    )
}

export default Hero