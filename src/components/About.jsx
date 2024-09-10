import React from 'react'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'

const About = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#65c0b1]"
            id="about"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-3xl">
                    <span className="font-bold text-4xl mr-3">
                        So, what is Nacho?
                    </span>
                    Nacho is named after the beloved cat of Shai Wyborski, a key figure in the Kaspa ecosystem. This project is a tribute to Shai and his cat, Nacho, and stands as a celebration of the groundbreaking work by the Kasplex team in developing the KRC20 token standard.
                </p>
                <p className="text-3xl mt-4">
                    But Nacho is more than just a memecoin. It serves as a symbol of innovation and community within the Kaspa network, showcasing the possibilities that decentralized technology can offer. As the Kasplex protocol evolves, Nacho aims to lead the charge, setting the gold standard for all tokens on Kaspa.
                </p>
                <p className="text-3xl mt-4">
                    Official KRC20 Ticker: <span className="font-bold text-4xl mr-3">NACHO</span>
                </p>
                <div className="mt-6 hidden md:flex md:justify-center space-x-4">
                    <a
                        className="px-4 py-3 rounded-full border-2 border-black dark:border-white flex items-center"
                        href="https://t.me/kspr_home_bot?start=nacho"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="w-6 h-6 mr-1" />
                        Mint NACHO
                    </a>
                    <a
                        className="px-4 py-3 rounded-full border-2 border-black dark:border-white flex items-center"
                        href="https://discord.gg/nachothekat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord className="w-6 h-6 mr-1" />
                        Join Discord
                    </a>
                    <a
                        className="px-4 py-3 rounded-full border-2 border-black dark:border-white flex items-center"
                        href="https://x.com/NachoWyborski"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="w-6 h-6 mr-1" />
                        Follow on X
                    </a>
                </div>
            </div>

            <div className="md:hidden my-4 space-y-4 flex flex-col items-center">
                <a
                    className="px-4 py-3 rounded-full border-2 dark:border-white border-black flex items-center"
                    href="https://discord.gg/nachothekat"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDiscord className="w-6 h-6 mr-1" />
                    Join Discord
                </a>
                <a
                    className="px-4 py-3 rounded-full border-2 dark:border-white border-black flex items-center"
                    href="https://x.com/NachoWyborski"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter className="w-6 h-6 mr-1" />
                    Follow on X
                </a>
            </div>
        </div>
    )
}

export default About
