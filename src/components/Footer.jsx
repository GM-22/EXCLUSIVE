import React from "react";
import Container from "./Container";
import plan from "../assets/plan.svg";
import qr from "../assets/Qr Code.png";
import googlePlay from "../assets/GooglePlay.png";
import appStore from "../assets/AppStore.png";
import fb from "../assets/fb.svg";
import twitter from "../assets/twit.svg";
import linkedin from "../assets/link.svg";
import insta from "../assets/ins.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black  pt-20 pb-6">
      <Container>
        <div className=" flex gap-[87px]">
          {/* Subscribe */}
          <div className=" w-[217px] flex flex-col gap-5">
            <h2 className=" font-inter text-[24px] leading-6 tracking-[3%] font-bold ">
              Exclusive
            </h2>
            <p className="text-[20px] leading-7 font-medium ">Subscribe</p>
            <p className="text-sm ">Get 10% off your first order</p>

            <div className="w-[217px] px-4 py-3 flex gap-3 border-[1.5px] border-white rounded-[4px]">
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-[150px] text-[16px] font-normal leading-6"
              />
              <button className="  text-white">
                <img className="" src={plan} alt="" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div className=" w-[175px]  ">
            <h2 className="text-[20px] leading-7  font-medium  mb-6">
              Support
            </h2>
            <div className=" flex flex-col gap-4">
              <p className="text-[16px] leading-6 ">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="text-[16px] leading-6 ">exclusive@gmail.com</p>
              <p className="text-[16px] leading-6 ">+88015-88888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h2 className="text-[20px] leading-7  font-medium  mb-6">
              Account
            </h2>
            <ul className="flex flex-col gap-4 text-[16px] leading-6">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[20px] leading-7  font-medium  mb-6">
              Quick Link
            </h2>
            <ul className="flex flex-col gap-4 text-[16px] leading-6">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h2 className="text-[20px] leading-7  font-medium  mb-6">
              Download App
            </h2>
            <p className="text-[12px] text-white70 leading-4.5 mb-2">
              Save $3 with App New User Only
            </p>

            <div className="flex gap-2 mb-6">
              <img src={qr} alt="QR" className=" size-20 object-cover" />
              <div className="flex flex-col gap-1">
                <img src={googlePlay} alt="Google Play" className="" />
                <img src={appStore} alt="App Store" className="" />
              </div>
            </div>

            <div className="flex gap-6">
              <div>
                <img className=" size-6" src={fb} alt="Facebook" />
              </div>
              <div>
                <img className=" size-6" src={twitter} alt="Twitter" />
              </div>
              <div>
                <img className=" size-6" src={insta} alt="Instagram" />
              </div>
              <div>
                <img className=" size-6" src={linkedin} alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Bottom copyright */}
      <div className="border-t border-white40 mt-[60px] pt-4 text-center text-[16px] leading-6 text-white40">
        © Copyright Golam Morshed 2026. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
