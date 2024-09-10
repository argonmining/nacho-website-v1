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
            answer: 'Nacho isn’t bought—it’s minted. The initial launch occurred on June 30, 2024, but minting will resume on September 15, 2024, at 8:00 AM (New York City time). To mint your NACHO tokens, simply use the Kasware Wallet. Through this fair launch process, you can mint tokens directly and become part of the Nacho community.',
        },
        {
            question: 'What does mint mean?',
            answer: 'Minting a token means creating new tokens and adding them to the total supply, making them available for use within the Kaspa ecosystem. For Nacho, you can mint tokens through any KRC-20 compatible wallet, such as Kasware. Nacho’s official ticker is NACHO.',
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
            answer: `No, Nacho is a fair launch project. This means there will be no presale or preferential treatment—everyone has an equal opportunity to mint tokens from the start. A fair launch fosters trust, transparency, and ensures that the entire community has equal access from day one.`,
        },
        {
            question: 'Where can I store Nacho?',
            answer: (
                <>
                    Once the KRC20 standard is live on the Kaspa Mainnet, wallet
                    providers are highly likely to update their wallets to
                    support KRC20. The only wallet known to be working on
                    supporting KRC20 at the time of launch is Kasware -{' '}
                    <a
                        href="https://www.kasware.xyz/"
                        className="text-[#65c0b1]"
                    >
                        https://www.kasware.xyz/
                    </a>
                </>
            ),
        },
        {
            question: 'Can I mine Nacho?',
            answer: `No, Nacho and other KRC-20 tokens cannot be mined. Instead of mining, Nacho tokens are minted, meaning they are created and distributed through a minting process within the Kaspa ecosystem.`,
        },
        {
            question: 'How much will Nacho cost?',
            answer: `The cost of Nacho is determined by the minting process. Based on the Kasplex whitepaper, each mint requires a gas fee of 1 KAS, paid to Kaspa miners. For Nacho, this gas fee will allow you to mint 28,700 tokens per batch. Please note that this structure is subject to change as the final details are confirmed.`,
        },
        {
            question: 'What will be the DEX for Nacho?',
            answer: `While the exact DEX for Nacho is still to be determined, we are aware of two DEXs and a marketplace currently in development on the Kaspa network. Once the KRC-20 standard is fully live on the Kaspa Mainnet, it's likely that Nacho will be available for trading on one or more of these platforms. Stay tuned as the ecosystem evolves!`,
        },
        {
            question: 'Does Nacho receive donations?',
            answer: (
                <div className="flex justify-center">
                    <img src="donation_wallet.png" alt="donation wallet" />
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
