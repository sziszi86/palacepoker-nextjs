"use client";
import React, {useEffect, useState} from 'react';
import axios from "axios";

const Events = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(3);

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
    }, [limit])

    console.log(data);
    return (
        <div className="container mx-auto xl:max-w-[1180px] py-[40px] text-white">
            <h1 className="text-start font-bold text-[24px] mb-5">Közelgő versenyeink</h1>
            <div className="grid grid-cols-3 gap-[20px]">
                {
                    data?.map((item: any, index: number) => (
                        <div className="cursor-pointer w-full border border-gray-700 rounded-md bg-gray-50 drop-shadow-[3px_4px_8px_rgba(108,122,137,1)]">
                            <div className="h-[250px] w-full overflow-hidden rounded-2xl p-3">
                                <img className="w-full h-[100%] object-cover hover:scale-[103%] transition-all duration-300 ease-in-out rounded-2xl" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
                            </div>
                            <div className="text-gray-700">
                                <h2 className="pt-3 pb-2 pl-3.5">{ item.attributes.category}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Events;
