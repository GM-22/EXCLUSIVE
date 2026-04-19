import React from "react";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router";
import ps5 from "../assets/ps5.png";
import ladies from "../assets/ladies.png";
import speaker from "../assets/speaker.png";
import perfume from "../assets/perfume.png";
const Feature = () => {
  return (
    <section >
      <Container>
        <div>
          <div className="w-[216px] mx-auto mb-15">
            <SectionHeader title="Featured" subtitle="New Arrival" />
          </div>
          <div className="grid grid-cols-2">
            <div>
                <Link to='/feature' className=''>
                    <img src={ps5} alt="PS5" />
                </Link>
            </div>
            <div className="flex flex-col gap-8">
                <div><Link to='/feature' className=''><img src={ladies} alt="Ladies Wear" /></Link></div>
                <div className="grid grid-cols-2">
                    <div>
                        <Link to='/feature' className=''><img src={speaker} alt="Speaker" /></Link>
                    </div>
                    <div className="">
                        <Link to='/feature' className=''><img src={perfume} alt="Perfume" /></Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feature;
