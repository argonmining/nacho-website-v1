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
                <div className="flex space-x-4 mt-8">
                    <a
                        className="px-4 py-3 rounded-full border-2 border-white flex items-center"
                        href="https://t.me/kspr_home_bot?start=nacho"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mint w/ KSPR Bot
                    </a>
                    <a
                        className="px-4 py-3 rounded-full border-2 border-white flex items-center"
                        href="https://discord.gg/nachothekat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mint w/ Kat Bot
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
