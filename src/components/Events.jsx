import React from 'react';
import PropTypes from 'prop-types';

function Events(props){
  return(
    <div>
      <span>{props.name}</span>
      <span>{props.description}</span>
      <span>{props.date}</span>
      <span>{props.time}</span>
    </div>
  );
}

Events.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Events;
