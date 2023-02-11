import React from 'react';
import chair from '../../../../assets/images/chair.png'

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-screen -mt-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt="" />
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;