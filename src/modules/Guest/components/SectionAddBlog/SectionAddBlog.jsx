import React, { useState } from 'react';
import PopUp from "./PopUp/PopUp";
import './SectionAddBlog.css'
import TextEditor from './TextEditor/TextEditor'
import { Container } from 'react-bootstrap';
import img from '../../Assets/arrow.svg'

const SectionAddBlog = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
  };
  
  return (
    <div>
      <div className='BA-SectionAddBlog text-start '>
        <Container>
          <img src={img} alt="" />
          <div className='BA-ContentSectionAddBlog'>
            <TextEditor />
          </div>
          <div className='BA-GropBtnSectionAddBlog text-center d-flex justify-content-center flex-wrap  gap-2'>
            <button className='BA-BtnOneSectionAddBlog'>Save as Draft</button>
            <button className='BA-BtnTwoSectionAddBlog' onClick={togglePopup}>Posted</button>
            {showPopup && <PopUp />}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SectionAddBlog