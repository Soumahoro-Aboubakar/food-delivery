import "./section.css";
import React from "react";

const Section = () => {
  return (
    <article>
      <div className="flex justify-between  pr-2 mt-20 mb-15 items-center article-container">
        <img
          src="https://landing.pixelstrap.net/angular/zomo/assets/images/home/1.png"
          alt=""
          className="w-1/4"
        />
        <div className="w-2/3 p-2 item">
          <h3 className="text-3xl lg:text-5xl text-center mb-10">
            Vivez la Saveur et les Delice de nos restaurant
          </h3>
          <h4 className="text-3xl lg:text-5xl text-center bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
            {" "}
            N'hesitez surtout a faire un bon
          </h4>
          <p className="text-gray-50 leading-relaxed text-1xl lg:text-2xll my-10 text-center">
            Platform for ordering food online from local restaurants. Browse
            through menus, check ratings and reviews, explore discounts, and
            more for eateries in your area.
          </p>
        </div>
        <img
          className="w-1/4"
          src="https://landing.pixelstrap.net/angular/zomo/assets/images/home/2.png"
          alt=""
        />
      </div>
      <div className="flex justify-center mb-10">
        {" "}
        <button className="border  border-yellow-300 bg-yellow-300 text-black font-semibold rounded-full py-3 px-6 hover:bg-yellow-400 transition duration-300">
          Order Now
        </button>
      </div>
      <img
        src="https://landing.pixelstrap.net/angular/zomo/assets/images/home-laptop.png"
        alt=""
      />
    </article>
  );
};

export default Section;
