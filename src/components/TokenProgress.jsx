import React, { useState, useEffect } from 'react';

const TokenProgress = () => {
    const [minted, setMinted] = useState(0);
    const [max, setMax] = useState(1); // Default to 1 to avoid division by zero

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const response = await fetch('https://api.kasplex.org/v1/krc20/token/nacho');
                const data = await response.json();
                const tokenData = data.result[0];
                const mintedValue = Number(tokenData.minted) / Math.pow(10, Number(tokenData.dec));
                const maxValue = Number(tokenData.max) / Math.pow(10, Number(tokenData.dec));
                setMinted(mintedValue);
                setMax(maxValue);
            } catch (error) {
                console.error('Error fetching token data:', error);
            }
        };

        fetchTokenData();
    }, []);

    const progress = (minted / max) * 100;

    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#231F20] text-white"
            id="token-progress"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-xl md:text-2xl">
                    <span className="font-bold text-3xl md:text-4xl mr-3">
                        Token Minting Progress
                    </span>
                </p>
                <div className="mt-6">
                    <div className="h-8 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-green-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="mt-2 text-xl md:text-2xl text-center">
                        {progress.toFixed(2)}% ({minted.toLocaleString()}) of NACHO tokens have been minted.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TokenProgress;
