import React from 'react';
import PropTypes from 'prop-types';

function Events(props){
  const headerPosition = {
    marginLeft: '40px',
    marginTop: '15px'
  }

  return(
    <div>

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
