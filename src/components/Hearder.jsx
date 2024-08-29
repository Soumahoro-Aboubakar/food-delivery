import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Hearder = () => {
  return (
    <div className="sticky  z-50 top-0 py-2 mb-3  w-full mx-auto  px-4 lg:px-0 backdrop-blur-lg border-b border-neutral-700/80">
      <nav className="flex justify-between items-center">
        <div>
          <img className="h-12" src={logo} alt="here is a logo" />
        </div>
        <ul className="hidden lg:flex items-center lg:space-x-7">
          <li className="text-2xl"><a href="#">Home</a></li>
          <li className="text-2xl"><a href="#">About US</a></li>
          <li className="text-2xl"><a href="#">Feature</a></li>
          <li className="text-2xl"><a href="#">Restaurants</a></li>
        </ul>
        <img src={cart} alt="here is about cart" className="h-9 lg:mr-12" />
      </nav>
    </div>
  );
};

export default Hearder;
