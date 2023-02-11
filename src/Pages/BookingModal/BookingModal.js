import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;

    const booking = {
        appointmentDate: date,
        treatment: name,
        patient: name,
        slot: slot,
        email: email,
        number: number,
    }

    console.log(booking);
    setTreatment(null);
    
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="text-center" onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full my-5"
            />
            <select
              required
              name="slot"
              className="select select-bordered w-full mb-5"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="number"
              name="number"
              required
              placeholder="Enter your phone number"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary btn-wide text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
