import React from "react";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import remote from "../assets/remote.png";
import HeartIcon from "../components/Icons/HeartIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import StarIcon from "../components/Icons/StarIcon";
import Button from "../components/Button";
// for slider

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TodaySection = () => {
  return (
    <section>
      <Container>
        <div>
          <div className="mb-10">
            <SectionHeader title="Today's" subtitle="Flash Sales" />
          </div>
          <div className="mb-6.5">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  title="HAVIT HV-G92 Gamepad"
                  price="$120"
                  originalPrice="$160"
                  review="(88)"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Button title="View All Products" />
          </div>
        </div>
      </Container>
    </section>
  );
};
const ProductCard = ({ title, price, originalPrice, review }) => {
  return (
    <div className="w-[270px] h-[350px]  rounded-[4px]">
      <div className="relative">
        <img src={remote} alt="Remote" />
        <div className="text-white absolute top-3 left-3 bg-maroon px-3 py-1 rounded text-[12px] leading-4.5 ">
          - 40%
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          <div className=" size-6   rounded-full ">
            <HeartIcon />
          </div>

          <EyeIcon className=" size-6  rounded-full " />
        </div>
      </div>
      <div className="mt-4 ">
        <h3 className=" text-[16px] font-medium leading-6 mb-2 ">{title}</h3>
        <p className=" gap-3 text-[16px] font-medium leading-6 mb-2  ">
          <span className=" text-maroon"> {price} </span>
          <del className=" text-black50">{originalPrice}</del>
        </p>
        <div className=" flex gap-2">
          <div>
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
    </div>
  );
};

export default TodaySection;
