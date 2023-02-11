import React from 'react';
import icon1 from '../../../../assets/icons/clock.svg';
import icon2 from "../../../../assets/icons/marker.svg";
import icon3 from "../../../../assets/icons/phone.svg";

const InfoCard = () => {
    return (
      <div>
        <div className="flex flex-col w-full lg:flex-row mb-16">
          <div className="mx-5 grid flex-grow card bg-secondary py-4 rounded-box place-items-center">
            <div className="">
              <img src={icon1} alt="" />
            </div>
            <div className="text-center text-white">
              <h4 className="text-2xl font-bold">Opening Hours</h4>
              <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
          </div>
          <div className="mx-5 grid flex-grow card bg-secondary py-4 rounded-box place-items-center">
            <div className="">
              <img src={icon2} alt="" />
            </div>
            <div className="text-center text-white">
              <h4 className="text-2xl font-bold">Opening Hours</h4>
              <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
          </div>
          <div className="mx-5 grid flex-grow card bg-secondary py-4 rounded-box place-items-center">
            <div className="">
              <img src={icon3} alt="" />
            </div>
            <div className="text-center text-white">
              <h4 className="text-2xl font-bold">Opening Hours</h4>
              <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;