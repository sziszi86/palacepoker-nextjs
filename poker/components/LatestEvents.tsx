"use client"
import axios from "axios";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {format} from "date-fns";

interface BlogItem {
    id: number; // Vagy a megfelelő típus, ami a blog elemek azonosítóját reprezentálja
    attributes: {
        date: string;
        title: string;
        bevezeto: string;
    };
}

const LatestEvents = () => {
    const [data, setData] = useState<BlogItem[]>([]);
    const [limit, setLimit] = useState(3);
    const [showMoreButton, setShowMoreButton] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:1337/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
            );
            const responseData = response.data.data;
            setData(responseData);
        };

        fetchData();
    }, [limit]);

    const handleLimit = () => {
        setLimit(limit + 2);
        if (data.length <= limit + 3) {
            setShowMoreButton(false);
        }
    };

    return (
        <div className="container mx-auto w-full text-white">

            <h2 className="mb-8 text-xl text-center md:text-left font-extrabold leading-none tracking-tight  md:text-2xl lg:text-4xl text-white ">Közelgő <span
                className="underline underline-offset-3 decoration-8 decoration-red-500 ">versenyeink</span>
            </h2>
            <div className=" mt-[20px] flex flex-col gap-[20px]">
                {data?.map((item, index) => (
                    <Link href={`/versenyek/${item.id}`} key={index}>
                        <div className="cursor-pointer w-full shadow-2xl px-[20px] sm:px-0">
                            <div
                                className="p-[12px] bg-white flex flex-row sm:flex-row rounded-xl items-center min-h-[120px]">
                                <p className="text-base text-red-500 font-semibold mb-4 sm:mb-0">
                                    {format(new Date(item.attributes.date), "MMMM")} <br/>
                                    <span
                                        className="text-2xl font-bold text-center flex justify-center text-black">
                    {format(new Date(item.attributes.date), " d")}
                  </span>
                                </p>
                                <div className="ml-[15px]">
                                    <h2 className="text-[14px] sm:text-[18px] font-bold text-black mb-[5px] w-full">
                                        {item.attributes.title}
                                    </h2>
                                    <p className="text-gray-800 text-[12px]">
                                        {item.attributes.bevezeto}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex items-center justify-center pt-[40px]">
                {showMoreButton && (
                    <button
                        onClick={handleLimit}
                        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
                    >
                        További versenyek
                    </button>
                )}
            </div>
        </div>
    );
};

export default LatestEvents;
