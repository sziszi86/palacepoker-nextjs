"use client";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {format} from "date-fns";
import Slider from "react-slick";
import DefaultPics from "@/public/assets/default.jpg";

const HomeEvents = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(30);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(
                `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
            );
            let response = data.data.data;
            console.log(response);
            setData(response);
        };
        fetchData();
    }, [limit]);

    const handleLimit = () => {
        setLimit(limit + 3);
    };

    return (
        <div className="container mx-auto xl:max-w-[1180px] pt-[40px] text-white pb-[40px]">
            <h2
                className="mb-8 text-xl text-center md:text-left font-extrabold leading-none tracking-tight  md:text-2xl lg:text-4xl text-white ">Kiemelt <span
                className="underline underline-offset-3 decoration-8 decoration-red-500 ">eseményeink</span>
            </h2>
            <div className="w-full">
                <Slider {...settings}>
                    {data?.map((item: any, index: number) => (
                        <Link key={index} href={`/versenyek/${item.id}`}>
                            <div className="cursor-pointer w-full shadow-2xl">
                                <div className="h-[240px] w-full  rounded-t-xl">
                                    {item.attributes.image && item.attributes.image.data && item.attributes.image.data.attributes.url ? (
                                        <img
                                            src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                            alt="Palace Poker Szombathely"
                                            className="w-full h-[100%]  hover:scale-[102%] transition-all duration-300 ease-in-out"
                                        />
                                    ) : (

                                        <img src={DefaultPics.src}
                                             className="w-full h-[100%]  hover:scale-[102%] transition-all duration-300 ease-in-out"
                                             alt="PalacePoker"/>
                                    )}
                                </div>
                                <div className="p-[12px] bg-white flex rounded-b-2xl items-center min-h-[150px]">
                                    <p className="i text-base text-red-500 font-semibold">
                                        {format(new Date(item.attributes.date), "MMMM")} <br/>
                                        <span className="text-2xl font-bold text-center flex justify-center text-black">
                        {format(new Date(item.attributes.date), " d")}
                    </span>
                                    </p>
                                    <div className="ml-[15px]">
                                        <h2 className="text-[18px] font-bold text-black mb-[5px]  w-full">{item.attributes.title}</h2>
                                        <p className="text-gray-800 text-[12px]">{item.attributes.bevezeto}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeEvents;
