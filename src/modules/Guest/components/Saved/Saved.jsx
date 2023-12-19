import "./Saved.css"
import cardOne from './../assets/img/Card1.svg'
import cardtwo from './../assets/img/Card2.svg'
import cardthree from './../assets/img/card3.svg'
import userone from './../assets/img/Ellipse 57.svg'
import usertwo from './../assets/img/Ellipse 2.svg'
import userthree from './../assets/img/Ellipse 3.svg'
import Vector from './../assets/img/Vector (2).svg'
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';

export default function Saved() {
  return (
    <>
    <NavBar/>
    // Start Section Saved Blog
    <section className="MI-SavedBlog ">
    {/* Start  */}
      <div className="container">
        {/* Start Hero it contains header and paragraph  */}
        <div className="d-flex justify-content-center">
          <div className="MI-HeroSaved  col-lg-4 col-md-6 col-sm-12 ">
            <h1>Saved Blog</h1>
            <p>Save the blogs you like to come to them later</p>
          </div>
        </div>
        {/* End Hero */}
        {/* Start Cards it contains Three cards */}
        <div className="row MI-CardSaved  d-flex flex-wrap justify-content-center align-items-center mb-0">
          {/* Start  First Card */}
          <div className="MI-Widthcard col-lg-4 col-md-8 col-sm-8 mb-3 ">
            <div className="MI-FirstCard">
              <img className="MI-FirstLogo" src={cardOne} alt="Boy" />
                <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
              <div className="MI-Icon text-end">
                <img className="" src={Vector} alt="Icon" />
              </div>
              <div className="MI-BottomText d-flex  align-items-center ">
                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                  <img className="" src={userone} alt='not found' />
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
          {/* End First Card */}
          {/* Start Second Card */}
          <div className="MI-Widthcard  col-lg-4 col-md-8 col-sm-8   mb-3 ">
            <div className="MI-FirstCard">
              <img className="MI-FirstLogo" src={cardtwo} alt="Boy" />
              <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
              <div className="MI-Icon text-end">
                <img className="" src={Vector} alt="Icon" />
              </div>
              <div className="MI-BottomText d-flex  align-items-center ">
                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                  <img className="" src={usertwo} alt='not found' />
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
          {/* End Second Card */}
          {/* Start Third Card */}
          <div className="MI-Widthcard  col-lg-4 col-md-8 col-sm-8  mb-3 ">
            <div className="MI-FirstCard">
              <img className="MI-FirstLogo" src={cardthree} alt="Boy" />
              <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
              <div className="MI-Icon text-end">
                <img className="" src={Vector} alt="Icon" />
              </div>
              <div className="MI-BottomText d-flex  align-items-center ">
                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                  <img className="" src={userthree} alt='not found' />
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
          {/* End Third Card */}
        </div> 
        {/* End Cards */}
      </div>
      {/* End */}
    </section>
    <Footer />
        </>
    // End Section Saved Blog
  )
}
