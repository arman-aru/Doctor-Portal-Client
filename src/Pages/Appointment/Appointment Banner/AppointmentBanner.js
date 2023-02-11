
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="hero min-h-screen -mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt="" />
          <div className="w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
