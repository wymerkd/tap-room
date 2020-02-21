import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
return (
  <div>
    <p>Would you like to add a new beer to the beer list?</p>
    <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
  </div>
);
}

ConfirmationQuestions.propTypes = {
onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
