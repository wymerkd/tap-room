import React from "react";
import Events from "./Events";

const allEvents = [
   {
    eventName: "Bingo",
    eventDescription: "Get Weird Bingo Night",
    eventDate: "3/4/2020",
    eventTime: "8:00 PM",
  }
];

function EventsList() {
  return (
    <div>
      {allEvents.map((givenEvent, index) => (
        <Events
          eventName={givenEvent.eventName}
          eventDescription={givenEvent.eventDescription}
          eventDate={givenEvent.eventDate}
          eventTime={givenEvent.eventTime}
          key={index}
        />
      ))}
    </div>
  );
}

export default EventsList;
