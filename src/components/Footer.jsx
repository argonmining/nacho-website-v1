import React from 'react'
import {
    FaDiscord,
    FaRegNewspaper,
    FaTelegram,
    FaXTwitter,
} from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="bg-[#231f20] text-white px-12 py-8 flex justify-between flex-col md:flex-row">
            <div className="flex md:flex-col items-center justify-center">
                <img
                    src="kaspa_logo_nacho.png"
                    alt="Nacho"
                    className="h-12 w-12"
                />
                <p className="md:mt-4 ml-2 md:ml-0">Nacho the 𐤊at</p>
            </div>
            <div className="my-8 md:my-0">
                <ul className="space-y-4 flex flex-col items-center md:items-start">
                    <li>
                        <a href="https://discord.gg/nachothekat" className="flex items-center">
                            <FaDiscord className="w-6 h-6 mr-1" />
                            <p>Discord</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/NachoWyborski" className="flex items-center">
                            <FaXTwitter className="w-6 h-6 mr-1" />
                            <p>Twitter</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/nachothecat" className="flex items-center">
                            <FaTelegram className="w-6 h-6 mr-1" />
                            <p>Telegram</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Nacho_the_kat_Whitepaper_240605.pdf" className="flex items-center">
                            <FaRegNewspaper className="w-6 h-6 mr-1" />
                            <p>Whitepaper</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="md:max-w-[40%] text-sm">
                <p>
                    This project is community-driven, and there is no legal or
                    official representation. The information provided here does
                    not constitute financial advice, and we do not recommend
                    this project as an investment.
                </p>
                <p className="mt-2">
                    We are not affiliated with any company or group, including
                    KRC20, Kaspa, and Kasplex. We are not in control of or
                    responsible for any changes to KRC20 standards or the
                    unavailability of any app or tool to mint, swap, or perform
                    any operation that may affect this initiative.
                </p>
            </div>
        </footer>
    )
}

export default Footer
