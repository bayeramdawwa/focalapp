import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './PopUp1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const PopUp = () => {
  const fileInputRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen && (
        <div className='BA-BlurBackground1'>
          <div className='PopUp1'>
            <Container>
              <p className='BA-Title'>Add Complain</p>
              <div className='BA-FormSelextAndP text-start '>
                <p className='BA-Pargraph text-start mb-0'>Complaint Types</p>
                <Form.Select aria-label="Default select example" className='BA-Select ' id="Select-lable">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className='BA-ParFontTextarea d-flex flex-column align-items-start gap-2'>
                <p className='BA-Pargraph text-start mb-0'>Complaint Reason</p>
                <label htmlFor="fileInput" className="custom-file-upload"><FontAwesomeIcon icon={faImage} /></label>
                <input type="file" id="fileInput" ref={fileInputRef} style={{ display: "none" }} />
                <Form.Control as="textarea" placeholder='Write the reason for the complaint here.....' className='BA-TextAreaInComplaint' />
                <p className='BA-ThePara'>The complaint will be reviewed and responded to within 24 hours</p>
              </div>
              <div className='BA-Group-btn text-end '>
                <Button variant="link" className='BA-BtnOne text-decoration-none' onClick={handleCancel}>Cancel</Button>
                <Button variant="dark" className='BA-BtnTwo'>Add Complaint</Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;