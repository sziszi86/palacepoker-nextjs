"use client";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Header = () => {
    const [data, setData] = useState<any>(null);
    const settings = {
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(
                "http://localhost:1337/api/banners?populate=*"
            );
            let response = data.data.data;
            setData(response);
            console.log(response);
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="header">
            <div className="overflow-hidden max-h-[735px] container mx-auto w-full rounded-2xl">
                <Slider {...settings}>
                    {data?.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <img
                                    src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                    alt="Palace Poker Club Szombathely"
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Header;
