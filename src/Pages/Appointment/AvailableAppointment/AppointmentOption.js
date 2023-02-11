import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-primary">
            {name}
          </h2>
          <p className="text-center">
            {slots.length > 0 ? slots[0] : "Try another day!"}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "space" : "spaces"} available
          </p>
          <div className="card-actions justify-end">
            <label
              onClick={() => setTreatment(appointmentOption)}
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-secondary mx-auto text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
