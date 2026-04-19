import React from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import LeftArrow from "../components/Icons/LeftArrow";
import RightArrow from "../components/Icons/RightArrow";
import remote from "../assets/Remote.png";
import HeartIcon from "../components/Icons/HeartIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import StarIcon from "../components/Icons/StarIcon";
import Button from "../components/Button";
const OurProduct = () => {
  return (
    <section className="mb-[164px]">
      <Container>
        <div>
          <div className="flex justify-between items-end mb-15">
            <SectionHeader title="Categories" subtitle="Browse by category" />
            <div className="flex gap-2">
              <LeftArrow />
              <RightArrow />
            </div>
          </div>
          <div className="flex gap-7.5 flex-wrap">
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
            <ProductCard
              title="HAVIT HV-G92 Gamepad"
              price="$120"
              review="(4.5)"
            />
          </div>
          <div>
            <Button title={'View All Product'} />
          </div>
        </div>
      </Container>
    </section>
  );
};
const ProductCard = ({ title, price, review }) => {
  return (
    <div className="w-[270px] h-[350px]  rounded-[4px]">
      <div className="relative">
        <img src={remote} alt="Remote" />
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          <div className=" size-6   rounded-full ">
            <HeartIcon />
          </div>

          <EyeIcon className=" size-6  rounded-full " />
        </div>
      </div>
      <div className="mt-4  ">
        <h3 className=" text-[16px] font-medium leading-6 mb-2 ">{title}</h3>
      </div>

      <div className=" flex gap-2 items-center h-[24px]   ">
        <div>
          <p className=" text-[16px] text-maroon font-poppins font-medium leading-0  ">
            {price}
          </p>
        </div>
        <div className="">
          <ul className=" flex gap-1  ">
            <li>
              <StarIcon className=" size-4 bg-amber-950 " fill=" red " />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
            <li>
              <StarIcon />
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-[14px] font-semibold font-poppins leading-[21px] text-black50 ">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurProduct;
