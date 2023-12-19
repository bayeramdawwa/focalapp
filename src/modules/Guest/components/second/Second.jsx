import React, { Fragment } from 'react'
import "../second/second.css"
import glas from './img/glass.svg'
import small from './img/small.svg'
import Vector from './img/Vector.svg'
import laptop from './img/laptop.svg'
import robot2 from './img/robot.svg'
import girl from './img/girl.svg'
import boy from './img/boy.svg'
import collection from './img/collection.svg'
import mobile from './img/mobile.svg'
import check from './img/check.svg'
import background from './img/background13.svg'
import CompanyPicture from'./img/T.svg'
import tall from'./img/tall.svg'
import icon from'./img/icon.svg'
import newest from'./img/newest.svg'



function Second() {
  return (
    <section className='AS-Hero'>
    <div className='AS-big'>
          <div className="AS_CompanySideInfo">
                <div className='AS_CompanyPictureInfoCard'>
                    <img className='AS_CompanyPictureInfo' src={CompanyPicture} alt="" />
                    <div className='AS_CompanyCheckIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32" viewBox="0 0 27 32" fill="none">
                            <g filter="url(#filter0_i_3_12749)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.81818L13.3333 0L26.6667 5.81818V14.5455C26.6667 22.6182 20.9778 30.1673 13.3333 32C5.68889 30.1673 0 22.6182 0 14.5455V5.81818ZM4.44444 17.4545L10.3704 23.2727L22.2222 11.6364L20.1333 9.57091L10.3704 19.1564L6.53333 15.4036L4.44444 17.4545ZM14.2715 24.2703C20.4726 24.2703 25.4996 20.5686 25.4996 16.0023C25.4996 11.4361 20.4726 7.73438 14.2715 7.73438C8.07044 7.73438 3.04346 11.4361 3.04346 16.0023C3.04346 20.5686 8.07044 24.2703 14.2715 24.2703Z" fill="#282828" />
                            </g>
                            <g filter="url(#filter1_i_3_12749)">
                                <path d="M13.3333 0L0 5.81818V14.5455C0 22.6182 5.68889 30.1673 13.3333 32C20.9778 30.1673 26.6667 22.6182 26.6667 14.5455V5.81818L13.3333 0ZM10.3704 23.2727L4.44444 17.4545L6.53333 15.4036L10.3704 19.1564L20.1333 9.57091L22.2222 11.6364L10.3704 23.2727Z" fill="#FF8500" />
                            </g>
                            <defs>
                                <filter id="filter0_i_3_12749" x="0" y="0" width="26.8665" height="32.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="0.2" dy="0.5" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_12749" />
                                </filter>
                                <filter id="filter1_i_3_12749" x="0" y="0" width="27.1665" height="32.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="0.5" dy="0.5" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_12749" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                <p className='AS_CompanyNameProfile'>Taplin Company</p>
                <p className='AS_CompanyTypeInfo'>Software Services</p>
                <p className='AS_CompanyNumOfFollowers'>15.6 Followers</p>
                <button className='AS_FollowCompanyButton'>Follow</button>
                <button className='AS_AddCompaint'>Add Complaint</button>
                <hr className='AS_CompanyInfoLine' />
                <p className='AS_CompanyInformationTab'><a href="/">INFORMATION</a></p>
                <p className='AS_CompanyBlogsTab'><a href="/">BLOGS</a></p>
            </div>


<div className='AS-larg-container'>


    <div className='AS-box'>
    <img className='AS-first-image' src={glas} alt='not found'
    />
    <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-minute reality
    checks from users</p>
    
    <img className='AS-vector' src={Vector} alt='not found'
    />

    <div className='AS-small-div'>
      <div className='AS-smallest-div'>
        <div className='AS-small-img-container'>
    <img className='AS-small-img' src={check} alt='not found'
    />
    </div>
    <p className='AS-second-p'>User Name</p>
    </div>
    <p className='AS-date'>2022-12-12   03:35 pm</p>
    </div>
    <p className='AS-last-p'>
        #UI,#Ux,#Design,#VR,#AI,#Gaming,#Ui&Ux
      </p>

    </div>
    <div className='AS-box'>
    <img className='AS-first-image' src={robot2} alt='not found'
    />
    <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-minute reality
    checks from users</p>
    
    <img className='AS-vector' src={Vector} alt='not found'
    />

    <div className='AS-small-div'>
      <div className='AS-smallest-div'>
      <div className='AS-small-img-container'>

    <img className='AS-small-img' src={newest} alt='not found'
    />
    </div>
    <p className='AS-second-p'>User Name</p>
    </div>
    <p className='AS-date'>2022-12-12   03:35 pm</p>
    </div>
    <p className='AS-last-p'>
        #UI,#Ux,#Design,#VR,#AI,#Gaming,#Ui&Ux
      </p>

    </div>
    <div className='AS-box'>
    <img className='AS-first-image' src={collection} alt='not found'
    />
    <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-minute reality
    checks from users</p>
    
    <img className='AS-vector' src={Vector} alt='not found'
    />

    <div className='AS-small-div'>
      <div className='AS-smallest-div'>
      <div className='AS-small-img-container'>

    <img className='AS-small-img' src={check} alt='not found'
    />
    </div>
    <p className='AS-second-p'>User Name</p>
    </div>
    <p className='AS-date'>2022-12-12   03:35 pm</p>
    </div>
    <p className='AS-last-p'>
        #UI,#Ux,#Design,#VR,#AI,#Gaming,#Ui&Ux
      </p>

    </div>
    <div className='AS-box'>
    <img className='AS-first-image' src={mobile} alt='not found'
    />
    <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-minute reality
    checks from users</p>
    
    <img className='AS-vector' src={Vector} alt='not found'
    />

    <div className='AS-small-div'>
      <div className='AS-smallest-div'>
      <div className='AS-small-img-container'>

    <img className='AS-small-img' src={check} alt='not found'
    />
    </div>
    <p className='AS-second-p'>User Name</p>
    </div>
    <p className='AS-date'>2022-12-12   03:35 pm</p>
    </div>
    <p className='AS-last-p'>
        #UI,#Ux,#Design,#VR,#AI,#Gaming,#Ui&Ux
      </p>

    </div>
    </div>





  

    </div>
    </section>






  )
}

export default Second