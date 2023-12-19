import Button from 'react-bootstrap/Button';
import './Company.css'
import { useState } from 'react';
import laptop from './../assets/img/Card2.svg'
import Vectorone from './../assets/img/Vector.svg'
import Vectortwo from './../assets/img/Vector (2).svg'
import logo from './../assets/img/Tapline.svg'
import logocheck from './../assets/img/Group 414.svg'
import small from './../assets/img/Tsmall.svg'
import robot from './../assets/img/card3.svg'
import box from './../assets/img/Box.svg'
import mobile from './../assets/img/mobile.svg'
import PopUp from '../JobMainScreenAsCompnyProfileInformayion/PopUp1/PopUp';
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';

const CompanySideInfo = () => {
    const [showPopup, setShowPopup] = useState(false);
    
        const togglePopup = () => {
          setShowPopup(!showPopup)};
    return (
        <>
        <NavBar/>
        <section section className="MI-SavedBlog ">
            {/* Start Compny  */}
            <div className="container">
                <div className="MI-CardSaved MI-Company row d-flex align-items-center">
                    {/* Start SideBar */}
                    <div className='MI-SideBar col-lg-4 col-md-9 col-sm-12 '>
                        <div className='MI-Photo'>
                            <img className='MI-Tapline' src={logo} alt="logo" />
                            <img className='MI-Check' src={logocheck} alt="logo" />
                        </div>
                        <div style={{textAlign:'center'}}>
                            <h1>Taplin Company</h1>
                            <p className='MI-Sideparagraph'>Software Services</p>
                            <p className='MI-Sideparagraph'>15.6K Followers</p>
                        </div>
                        <div className='d-flex MI-Button justify-content-center align-items-center'>
                            <Button className='MI-ButtonFollow text-center'>Follow</Button>{' '}
                            <Button  className='MI-ButtonAdd text-center' onClick={togglePopup}>Add Complaint</Button>{' '}
                            {showPopup && (<PopUp onClose={togglePopup} />)}
                            <hr className='MI-hr'/>
                        </div>
                        <div className='d-flex MI-LinkBar'>
                            <a href="#" className='MI-Linkblog'>INFORMATION</a>
                            <a href="/blog" className='MI-Linkblog'>BLOGS</a>
                        </div>
                    </div>
                    {/* Start SideBar */}
                    {/* Start First Card */}
                    <div className="col-lg-4 col-md-9 col-sm-12 mt-3 mb-0">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={laptop} alt="Boy" />
                            <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={small} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End First Card*/}
                    {/* Start Second Card */}
                    <div className="col-lg-4 col-md-9 col-sm-12 mt-3 mb-0">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={robot} alt="Boy" />
                            <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={small} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Second Card*/}
                    {/* Start Third Card */}
                    <div className="col-lg-4 col-md-9 col-sm-12 mb-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={box} alt="Boy" />
                            <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={small} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#">#UI,</a>
                                <a href="#">#Ux,</a>
                                <a href="#">#Design,</a>
                                <a href="#">#VR,</a>
                                <a href="#">#AI,</a>
                                <a href="#">#Gaming,</a>
                                <a href="">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Third Card */}
                    {/* Start Fourth Card */}
                    <div className="col-lg-4 col-md-9 col-sm-12 mb-3 ">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={mobile} alt="Boy" />
                            <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={small} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Fourth Card */}
                </div>
            </div>
            {/* End Company */}
        </section>
        <Footer />
        </>
    )
}

export default CompanySideInfo