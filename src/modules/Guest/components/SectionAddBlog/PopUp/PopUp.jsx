import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './PopUp.css';

const PopUp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen && (
        <div className='BA-BlurBackground'>
          <div className='PopUp'>
            <Container>
              <div className='BA-FormSelextAndP text-start '>
                <p className='BA-Pargraph text-start mb-0'>Select the category of this blog.<span className='BA-Span'>(You can select more than one)</span></p>
                <Form.Select aria-label="Default select example" className='BA-Select ' id="Select-lable">
                  <option className='BA-OneOption' selected >Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <p className='BA-ThePar text-start'>The blog will be reviewed and the publishing process will be confirmed within the next 24 hours.</p>
              <div className='BA-Group-btn text-end '>
                <Button variant="link" className='BA-BtnOne text-decoration-none' onClick={handleCancel}>Cancel</Button>
                <Button variant="dark" className='BA-BtnTwo'>Posted</Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;