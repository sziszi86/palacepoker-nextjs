import React from 'react';

const Footer = () => {
    return (
        <div className="container mx-auto max-w-full xl:max-w-[1100px] pt-[35px] px-[20px]">
            <div className="flex items-center">
                <h4 className="text-white font-bold text-base sm:text-xl">
                    Üzemeltető gazdasági társaság:
                </h4>
                <span
                    className="text-white text-base sm:ml-2">Pannon Póker Kft, 9700 Szombathely Semmelweis u. 2.</span>
            </div>
            <div className="flex items-center">
                <h4 className="text-white font-bold text-base sm:text-xl">
                    Kártyaterem hivatalos neve:
                </h4>
                <span
                    className="text-white text-base sm:ml-2">&nbsp;All-In Póker Club</span>
            </div>
        </div>
    );
};

export default Footer;
