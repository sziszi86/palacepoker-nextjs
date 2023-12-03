import axios from "axios";
import React from "react";

const page = async ({params}: any) => {
  let id = params.id;
  console.log(id);
  let data = await axios.get(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  let response = data.data.data;
  let description = response.attributes.description;

  return (
    <div className="container mx-auto max-w-full xl:max-w-[1100px] pt-[25px]">
      <div className="flex flex-col sm:flex-row">
        <div className="h-auto w-[300px] mx-auto sm:mx-0 rounded">
          <img
            src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
            alt=""
            className="rounded"
          />
        </div>
        <div className="ml-8 flex flex-col">
          <h1 className="text-white text-xl md:text-[32px] font-bold">{response.attributes.title}</h1>
          <span className="text-red-600 my-4">{response.attributes.versenytipusa}</span>
          <span className="text-xl text-white font-bold">{response.attributes.date}</span>
          <p className="text-white text-base mt-4">{response.attributes.bevezeto}</p>
        </div>
      </div>

      <div id="leiras"
           className="text-white pt-[20px] pb-[40px] font-sm px-[20px] sm: px-0"
           dangerouslySetInnerHTML={{__html: `${description}`}}
      ></div>
    </div>
  );
};

export default page;
