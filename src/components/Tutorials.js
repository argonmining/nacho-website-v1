import React from 'react';

const Tutorials = () => {
    return (
        <div
            className="py-12 px-12 md:px-28 bg-[#65c0b1]"
            id="tutorials"
            data-aos="fade-up"
        >
            <div className="mt-8 md:mt-0">
                <p className="text-xl md:text-2xl">
                    <span className="font-bold text-3xl md:text-4xl mr-3">
                        Easy Learning with Nacho
                    </span>
                    Prefer a video? Dive into quick tutorials about Nacho the cat and the KRC20 standard in Kasplex.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/B2G2fiezubk"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/KYtmyJUvBRs"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/1J-uadP_AM4"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/LB5X1vEDx7w"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/wUZ2cBiDHmc"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full" style={{ paddingBottom: '50%', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/m6N7Po-ogVE"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorials;
