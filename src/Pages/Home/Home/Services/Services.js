import React from 'react';
import img1 from '../../../../assets/images/fluoride.png';


const Services = () => {
    return (
      <div>
        <div className="text-center my-14">
          <h2 className="text-2xl font-bold text-primary">OUR SERVICES</h2>
          <h3 className="text-3xl text-black">
            Services We Provide
          </h3>
        </div>
        <div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow card text-center bg-white shadow-2xl px-8 py-12 rounded-box place-items-center mx-4">
              <img src={img1} alt="Fluoride" />
              <h3 className="font-bold text-2xl py-3">Fluoride Treatment</h3>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
            <div className="grid flex-grow card text-center bg-white shadow-2xl px-8 py-12 rounded-box place-items-center mx-4">
              <img src={img1} alt="Fluoride" />
              <h3 className="font-bold text-2xl py-3">Fluoride Treatment</h3>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
            <div className="grid flex-grow card text-center bg-white shadow-2xl px-8 py-12 rounded-box place-items-center mx-4">
              <img src={img1} alt="Fluoride" />
              <h3 className="font-bold text-2xl py-3">Fluoride Treatment</h3>
              <p>
                Lorem Ipsum is simply dummy printing and typesetting indust
                Ipsum has been the
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;