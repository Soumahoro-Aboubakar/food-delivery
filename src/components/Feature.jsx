import React from "react";
import man from "../assets/grocery-image.png";
const Feature = () => {
  return (
    <body className=" h-full">
      <div className="flex flex-col lg:flex-row  items-center ">
        <div className="left_part items-center w-full lg:w-1/2 dark-scheme !lg:flex flex-col lg:flex-row justify-center">
          <div className="text-center lg:text-left">
            <h4 className="text-4xl lg:text-6xl my-4">Groceries </h4>
            <h6>
              <span className="text-4xl lg:text-6xl">delivery</span>{" "}
              <span className="text-3xl lg:text-4xl font-thin">in 15 mins</span>
            </h6>
          </div>
          <p className="text-lg text-center lg:text-left  lg:text-xl text-gray-50 leading-relaxed mb-8 lg:mb-12 mt-6 px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            dolores nihil. Quae, error assumenda? Ad voluptates nihil autem
            laboriosam, reiciendis, ea quas quisquam beatae, fugiat libero atque
            incidunt ab explicabo.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="border border-yellow-300 bg-yellow-300 text-black font-semibold rounded-full py-3 px-6 hover:bg-yellow-400 transition duration-300">
              Order Now
            </button>
            <button className="border border-gray-800 bg-gray-900 text-white font-semibold rounded-full py-3 px-6 hover:bg-gray-800 transition duration-300">
              Download App
            </button>
          </div>
        </div>
        <div className="right_part w-full lg:w-1/2 dark-scheme">
          <img src={man} alt="user image" />
        </div>
      </div>
    </body>
  );
};

export default Feature;
