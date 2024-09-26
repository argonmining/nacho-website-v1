import React from 'react'
import FaqItem from './FaqItem'

const Faq = () => {
    const faqItems = [
        {
            question: 'What is KRC-20?',
            answer: 'KRC-20 is the token standard for the Kaspa network, defining the guidelines for creating and managing fungible tokens. Similar to Ethereum’s ERC-20 standard, KRC-20 ensures consistency and interoperability across the Kaspa ecosystem. This allows any token built using KRC-20 to integrate seamlessly with wallets, exchanges, and decentralized applications, empowering developers and users alike to easily interact with the broader Kaspa network.',
        },
        {
            question: 'When and how can I buy Nacho?',
            answer: 'Nacho isn’t bought—it’s minted. The initial launch took place on June 30, 2024, and the remainder of the supply was minted on September 15, 2024. The easiest way to mint KRC-20 tokens is by using the Kat Bot in our Discord. Alternatively, you can use the KSPR Bot in Telegram via this link: https://t.me/kspr_home_bot?start=nacho. Through this fair launch process, everyone has equal access to mint tokens and join the Nacho community.',
        },
        {
            question: 'What does mint mean?',
            answer: 'Minting a token means creating new tokens and adding them to the total supply, making them available for use within the Kaspa ecosystem. For Nacho, you can mint tokens through any KRC-20 compatible wallet. Nacho’s official ticker is NACHO.',
        },
        {
            question: 'Does Nacho have an official ticker?',
            answer: `Yes, it does. Official ticker for Nacho is NACHO, it was deployed on Kasplex on June 30.`,
        },        
        {
            question: 'Will Nacho offer airdrops?',
            answer: `No. Fair launch won't make it possible.`,
        },
        {
            question: 'What is Kasplex?',
            answer: (
                <>
                    Kasplex is designed as a versatile solution, incorporating
                    the data insertion protocol, an open-source indexer, data
                    availability, and comprehensive APIs. It leverages Kaspa's
                    high block rate, scalability, and decentralized POW Layer-1
                    to facilitate efficient data insertion, address the UTXO
                    bloat issue, and support a sustainable ecosystem. Kasplex
                    provides an open-source indexer that enables developers and
                    users to effectively retrieve and check data associated with
                    KRC-20 tokens, NFTs, and other digital assets on Kaspa.
                    Kasplex introduces the KRC-20 token standard, which defines
                    a set of rules and conventions for creating and managing
                    fungible tokens on Kaspa.{' '}
                    <a
                        href="https://www.kasplex.org/home"
                        className="text-[#65c0b1]"
                    >
                        (https://www.kasplex.org/home)
                    </a>
                </>
            ),
        },
        {
            question: 'Will Nacho have a presale?',
            answer: 'No, Nacho will not have a presale. As a fair launch project, everyone has an equal opportunity to mint tokens without any presale or special privileges. This approach promotes trust, transparency, and equal access, ensuring the entire community can participate right from the start.',
        },
        {
            question: 'Where can I store Nacho?',
            answer: (
                <>
                    Once the KRC-20 standard is live on the Kaspa Mainnet, several wallet providers are expected to update their wallets to support KRC-20 tokens. Currently, you can store your Nacho tokens using the following options:
                    <ul>
                        <li>
                            Kat Bot in Discord -{' '}
                            <a
                                href="https://discord.gg/nachothekat"
                                className="text-[#65c0b1]"
                            >
                                https://discord.gg/nachothekat
                            </a>
                        </li>
                        <li>
                            KSPR Bot in Telegram -{' '}
                            <a
                                href="https://t.me/kspr_home_bot?start=nacho"
                                className="text-[#65c0b1]"
                            >
                                https://t.me/kspr_home_bot?start=nacho
                            </a>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question: 'Can I mine Nacho?',
            answer: 'No, Nacho and other KRC-20 tokens cannot be mined. Instead, Nacho tokens are minted, meaning they are created and distributed through a minting process on the Kaspa network. This minting process allows users to acquire tokens directly, rather than through traditional mining methods.',
        },        
        {
            question: 'How much will Nacho cost?',
            answer: 'The cost of Nacho is determined through the minting process. Each mint requires a gas fee of 1 KAS, paid to Kaspa miners. For each batch, this gas fee will allow you to mint 28,700 Nacho tokens.',
        },        
        {
            question: 'What will be the DEX for Nacho?',
            answer: `While the exact DEX for Nacho is still to be determined, we are aware of two DEXs and a marketplace currently in development on the Kaspa network. Once the KRC-20 standard is fully live on the Kaspa Mainnet, it's likely that Nacho will be available for trading on one or more of these platforms. Stay tuned as the ecosystem evolves!`,
        },
        {
            question: 'Does Nacho receive donations?',
            answer: (
                <div className="text-center">
                    <p>
                        Yes, Nacho does accept donations! You can send donations to the following wallet address:
                    </p>
                    <p className="font-bold text-lg">kaspa:qrlk2f25g4clhzhadd26u502rqfn287y59mm2tj5k6mwamgp2jzkg904jfrc6</p>
                    <button
                        onClick={() => navigator.clipboard.writeText('kaspa:qrlk2f25g4clhzhadd26u502rqfn287y59mm2tj5k6mwamgp2jzkg904jfrc6')}
                        className="bg-[#65c0b1] hover:bg-[#50a08e] text-white font-bold py-2 px-4 rounded mt-2"
                    >
                        Copy Wallet Address
                    </button>
                    <div className="flex justify-center mt-4">
                        <img src="donation_wallet.png" alt="donation wallet QR code" />
                    </div>
                </div>
            ),
        },
        
    ]

    return (
        <div className="py-12 px-12 md:px-28" id="about" data-aos="fade-up">
            <div>
                {faqItems.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default Faq
