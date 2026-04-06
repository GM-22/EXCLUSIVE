import React from "react";
import { Link } from "react-router";
import Container from "./Container";
import Exclusive from "../assets/Exclusive.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import love from "../assets/love.svg";
import cart from "../assets/Cart1.svg";
const NavBar = () => {
  return (
    <nav className=" ">
      <div className=" bg-black  mb-7">
        <Topbar />
      </div>
      <Mainbar />
      <div className=" w-full bg-black30 h-[0.5px] mt-7"> </div>
    </nav>
  );
};
const Topbar = () => {
  return (
    <Container>
      <div className=" h-[48px]  items-start ml-[316px] py-3 flex ">
        <p className=" text-[14px] text-white leading-[21px]   ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          to="/shop"
          className=" text-[14px] underline font-semibold text-white leading-[24px]  ml-2 "
        >
          ShopNow
        </Link>
        <select
          name="language"
          id="language"
          className=" ml-[231px] text-[14px] text-white leading-[21px]"
        >
          <option value="en">English</option>
          <option value="es">Bangla</option>
        </select>
      </div>
    </Container>
  );
};
const Mainbar = () => {
  return (
    <Container>
      <div className="  flex  items-center">
        <div className=" mr-[160px]">
          <img className=" w-[118px]" src={Exclusive} alt="Exclusive" />
        </div>
        <div className=" mr-[130px] ">
          <ul className=" flex gap-12 text-[16px]  leading-6 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="mr-6 w-[243px] h-[38px] py-[7px] flex  items-center  bg-graybg  rounded-[4px] ">
          <form action="">
            <input className="mr-[34px] pl-5  text-[12px] leading-4.5 text-black50 " type="text" placeholder="What are you looking for?"/>
          </form>
          <button><img src={search} alt="Search" /></button>
        </div>
        <div className=" flex gap-4 ">
          <div><img className=" size-8" src={love} alt="Love" /></div>
          <div><img className=" size-8" src={cart} alt="Cart" /></div>
          <div><img className=" size-8" src={user} alt="User" /></div>
         
        </div>
      </div>
      
    </Container>
  );
};

export default NavBar;
