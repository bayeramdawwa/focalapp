import React, { useState } from 'react';
import PopUp from './PopUp1/PopUp.jsx';

const JobMainScreenAsCompnyProfileInformayion = () => {
        const [showPopup, setShowPopup] = useState(false);
    
        const togglePopup = () => {
          setShowPopup(!showPopup)};
          
  return (
    <div>
        <button onClick={togglePopup}>Add Complaint</button>
      {showPopup && (
        <PopUp onClose={togglePopup} />)}
    </div>
  )
}

export default JobMainScreenAsCompnyProfileInformayion