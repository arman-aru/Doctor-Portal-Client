import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfofoCards = () => {

    const cardData = [
      {
        id: 1,
        name: "Opening Hours",
        description: "Opening Hours Opening Hours Opening Hours",
        icon: clock,
        bgClass: "bg-primary",
      },
      {
        id: 2,
        name: "Opening Hours",
        description: "Opening Hours Opening Hours Opening Hours",
        icon: marker,
        bgClass: "bg-secondary",
      },
      {
        id: 3,
        name: "Opening Hours",
        description: "Opening Hours Opening Hours Opening Hours",
        icon: phone,
        bgClass: "bg-primary",
      },
    ];

    return (
        <div>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfofoCards;