import axios from "axios";
import React from "react";
import DefaultPics from "@/public/assets/default.jpg";
import HomeEvents from "@/components/HomEvents";

const page = async ({params}: any) => {
    try {
        let id = params.id;
        console.log(id);
        let data = await axios.get(`http://localhost:1337/api/blogs/${id}?populate=*`);
        let response = data.data.data;
        let description = response.attributes.description;

        return (
            <div className="container mx-auto max-w-full xl:max-w-[1100px] pt-[25px]">
                <div className="flex flex-col sm:flex-row">
                    <div className="h-auto w-[300px] mx-auto sm:mx-0 rounded">
                        {response.attributes.image && response.attributes.image.data && response.attributes.image.data.attributes && response.attributes.image.data.attributes.url ? (
                            <img
                                src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
                                alt=""
                                className="rounded sm:ml-4"
                            />
                        ) : (
                            // Render a placeholder or handle the layout differently when there's no image
                            <img src={DefaultPics.src}
                                 className="w-full h-[100%]  hover:scale-[102%] transition-all duration-300 ease-in-out"
                                 alt="PalacePoker"/>
                        )}
                    </div>
                    <div className="ml-8 flex flex-col">
                        <h1 className="text-white text-xl md:text-[32px] font-bold mt-[20px] text-center sm:text-left">{response.attributes.title}</h1>
                        <span className="text-red-600 my-4">{response.attributes.versenytipusa}</span>
                        <span className="text-xl text-white font-bold">{response.attributes.date}</span>
                        <p className="text-white text-base mt-4">{response.attributes.bevezeto}</p>
                    </div>
                </div>

                <div
                    id="leiras"
                    className="text-white pt-[20px] pb-[40px] font-sm px-[20px] sm: px-0"
                    dangerouslySetInnerHTML={{__html: `${description}`}}
                ></div>
                <HomeEvents/>
            </div>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error or redirect to an error page
        return <div>Error loading data</div>;
    }
};

export default page;
