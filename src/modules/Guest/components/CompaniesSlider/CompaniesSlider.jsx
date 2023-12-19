import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CompaniesSlider.css';


import Instagramcomapny from './../../Assets/Instagram-company.svg'
import AIClubCompany from './../../Assets/AIClub-company.svg'
import AppleCompany from './../../Assets/Apple-company.svg'
import AudioCompany from './../../Assets/Audio-company.svg'
import BluemanCompany from './../../Assets/Blueman-company.svg'




const CompaniesSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,   
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <>
      <div className="BT_SliderContainer">
        <Slider {...settings}>
          <div className="BT_SliderImageContainer">
            <img id="BT_FirstImgSlider" className="BT_SliderImage" src={Instagramcomapny} alt="Instagram" />
            <p className="BT_CompanyName">Instagram</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img className="BT_SliderImage" src={AIClubCompany} alt="YouTube" />
            <p className="BT_CompanyName">YouTube</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img className="BT_SliderImage" src={AppleCompany} alt="Audio" />
            <p className="BT_CompanyName">Audio</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img className="BT_SliderImage" src={AudioCompany} alt="Blue Man" />
            <p className="BT_CompanyName">Blue Man</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img className="BT_SliderImage" src={BluemanCompany} alt="Apple" />
            <p className="BT_CompanyName">Apple</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img className="BT_SliderImage" src={AIClubCompany} alt="AI Club" />
            <p className="BT_CompanyName">AI Club</p>
          </div>
          <div className="BT_SliderImageContainer">
            <img id="BT_LastImgSlider" className="BT_SliderImage" src={AudioCompany} alt="Blue Man" />
            <p className="BT_CompanyName">Blue Man</p>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default CompaniesSlider