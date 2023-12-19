import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';




export default function Intersted(props) {
  const [buttonStates, setButtonStates] = useState([
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },
    { showBorder: false, isPositive: true, isText: false },

  ]);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    const updatedStates = buttonStates.map((state, index) => {
      if (index === buttonId) {
        return {
          ...state,
          showBorder: !state.showBorder,
          isPositive: !state.isPositive,
          isText: !state.isText
        };
      } else {
        return state;
      }
    });
    setButtonStates(updatedStates);
    const updatedButtons = [...selectedButtons, buttonId];
    setSelectedButtons(updatedButtons);
  };

  const handleContinueClick = () => {
    if (selectedButtons.length < 3) {
      alert('Choose three or more interested');
    } else {
      //continue process
    }
  };

  return (
    <>
      <div className='pt-5 row-areej'style={{display:'flex',alignItems:'center',justifyContent:'center',width:'93%',flexWrap:'wrap',gap:'3rem'}}>

        <button
        style={buttonStates[0].showBorder ?  { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(0)}
        className="Areej-button" 
      >
        <p className="Areej-text" style={buttonStates[0].isText ? { color: 'black' } : { color: 'gray' }}  >
        Marketing
        </p>
        {buttonStates[0].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}}/>
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"  />
        )}
      </button>
      <button
        style={buttonStates[1].showBorder ?  { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(1)}
        className="Areej-button"
      >
        <p className="Areej-text" style={buttonStates[1].isText ? { color: 'black' } : { color: 'gray' }}>
        programming
        </p>
        {buttonStates[1].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej"style={{color:'gray'}} />
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"   />
        )}
      </button>
   
      <button
        style={buttonStates[2].showBorder ?  { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(2)}
        className="Areej-button"
      >
        <p className="Areej-text" style={buttonStates[2].isText ? { color: 'black' } : { color: 'gray' }}>
        Mobile app
        </p>
        {buttonStates[2].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}} />
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"  />
        )}
      </button>

      <button
        style={buttonStates[3].showBorder ?  { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(3)}
        className="Areej-button"
      >
        <p className="Areej-text" style={buttonStates[3].isText ? { color: 'black' } : { color: 'gray' }}>
        Design
        </p>
        {buttonStates[3].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}}/>
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"/>
        )}
      </button>
  
    
      <button
        style={buttonStates[4].showBorder ?  { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(4)}
        className="Areej-button "
      >
        <p className="Areej-text" style={buttonStates[4].isText ? { color: 'black' } : { color: 'gray' }}>
        Sites Design
        </p>
        {buttonStates[4].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}}/>
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"  />
        )}
      </button>

      <button
        style={buttonStates[5].showBorder ? { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(5)}
        className="Areej-button"

      >
        <p className="Areej-text" style={buttonStates[5].isText ? { color: 'black' } : { color: 'gray' }}>
         Sites Design
        </p>
        {buttonStates[5].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}}/>
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej"  />
        )}
      </button>
     
      <button
        style={buttonStates[6].showBorder ? { border:' 2px solid var(--clr-secondary-black)'} : { border: 'none' }}
        onClick={() => handleButtonClick(6)}
        className="Areej-button"

      >
        <p className="Areej-text" style={buttonStates[6].isText ? { color: 'black' } : { color: 'gray' }}>
         Artificial intelligence 
        </p>
        {buttonStates[6].isPositive ? (
          <FontAwesomeIcon icon={faPlus} className="pb-1 icon-areej" style={{color:'gray'}}/>
        ) : (
          <FontAwesomeIcon icon={faCheck} className="pb-1 icon-areej" />
        )}
      </button>
      </div>
    
        <button className='btn-areej mt-5' onClick={handleContinueClick} ><p className='p-Areejmustafa' >{props.Text}</p></button>

    
    </>
  );
}