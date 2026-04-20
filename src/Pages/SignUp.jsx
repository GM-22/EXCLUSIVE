import React from "react";
import SlidImage from "../assets/slideImage.jpg";
import Button from "../components/Button";
const SignUp = () => {
  return (
    <section className="mt-[60px] mb-[140px] max-w-[1440px] mx-auto">
      <div className="  grid grid-cols-[805px_1fr] gap-[129px]">
        <div>
          <img src={SlidImage} alt="Slider" />
        </div>
        
        <div className="w-[371px] bg-transparent mt-[125px] ">
         
          <h1 className=" font-inter text-[36px] leading-7.5 tracking-[4%] font-medium mb-6">Create an account</h1>
          <p className=" font-poppins text-[16px] leading-6 mb-12 ">Enter your details below</p>
          {/* Form */}
          <form className=" flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-black40 border-b border-black40 bg-transparent py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full text-black40 border-b border-black40 bg-transparent py-2 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black40 border-b border-black40  bg-transparent py-2 outline-none"
            />
          </form>
           <div>
            {/* Create Account Button */}
            {/* <button className="w-full bg-red-500 text-white py-3 rounded mt-4 hover:bg-red-600 transition">
              Create Account
            </button> */}
            <Button title={'Create Account'} />
            {/* Google Button */}
            <button
              type="button"
              className="w-full border border-gray-400 py-3 rounded flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          
          {/* Login */}
          <p className="text-center text-gray-600 ">
            Already have account?
            <a href="#" className="text-black font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default SignUp;
