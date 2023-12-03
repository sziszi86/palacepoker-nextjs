"use client";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {format} from "date-fns";

const Blogs = () => {
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
  }, [limit]);

  const handleLimit = () => {
    setLimit(limit + 3);
  };

  console.log(data);
  return (
    <div className="container mx-auto xl:max-w-[600px] pt-[40px] text-white pb-[40px]">
      <h1 className="text-start text-[24px] font-bold">Latest Post</h1>
      <div className=" mt-[20px] flex flex-col gap-[20px]">
        {data?.map((item: any, index: number) => (
          <Link href={`/versenyek/${item.id}`}>
            <div className="cursor-pointer w-full shadow-2xl">
              <div className="p-[12px] bg-white flex rounded-xl items-center min-h-[120px]">
                <p className="text-base text-red-500 font-semibold">
                  {format(new Date(item.attributes.date), "MMMM")} <br/>
                  <span
                    className="text-2xl font-bold text-center flex justify-center text-black">{format(new Date(item.attributes.date), " d")}</span>
                </p>
                <div className="ml-[15px]">
                  <h2 className="text-[18px] font-bold text-black mb-[5px]  w-full">{item.attributes.title}</h2>
                  <p className="text-gray-800 text-[12px]">{item.attributes.bevezeto}</p>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[40px]">
        <button
          onClick={handleLimit}
          className="h-[50px] w-[150px] border border-[#2f3241] text-[#97989F] hover:text-white"
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default Blogs;
