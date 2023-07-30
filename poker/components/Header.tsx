"use client"
import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Header = () => {
    const [data, setData] = useState<any>(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        fade: true,
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("http://localhost:1337/api/banners?populate=*");
            let response = await data.data.data;
            setData(response)
            console.log(response);
        };
        fetchData()
    }, []);
    console.log(data);
    return (
        <div className="header">
            <div className="container mx-auto xl:max-w-[1180px] object-cover">
                <Slider {...settings}>
                    {
                        data?.map((item: any, index: number) => {
                            return (
                                <>
                                    <div className="flex justify-center max-h-[560px] overflow-hidden object-cover ">
                                        <img className="w-full object-cover" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt={`${item.attributes.image.data.attributes.name}`} />
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Header;
