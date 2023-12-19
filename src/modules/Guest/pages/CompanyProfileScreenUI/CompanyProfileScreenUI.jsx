import './CompanyProfileScreenUI.css';
import CompanySideInfo from '../../components/CompanySideInfo/CompanySideInfo';
import ArticleSection from '../../components/ArticleSection/ArticleSection';
import SaveArticleIcon from '../../Assets/Save-Icon.svg';
import isSavedArticleIcon from '../../Assets/saved-icon.svg';
import ShareLinkedInIcon from '../../Assets/LinkedIn-Icon.svg';
import ShareFacebookIcon from '../../Assets/Facebook-Icon.svg';
import ShareTwitterIcon from '../../Assets/Twitter-Icon.svg';
import AttachArticleIcon from '../../Assets/Attachment-Icon.svg';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';



const CompanyProfileScreenUI = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  const [isSaved, changeSaveIcon] = useState(true)
  const setSaveIcon = () => {
    changeSaveIcon (!isSaved);
  }
 
  const [sideBar, setSideBar] = useState(false);
  const ShowSideBar = () => {
    setSideBar(!sideBar);
  }

  
 
  return (
    <>
    <NavBar/>
      <div className="BT_CompProfileScreenContainer">
        <div className="BT_CompanySideInfoContainer">
         
          <Link to='#' id='BT_menu-bars_Id' className={isMobile ? 'BT_Add-menu-bars': 'BT_No-menu-bars'}>
            <FaIcons.FaBars onClick={()=> ShowSideBar()} />
          </Link>

        
          <CompanySideInfo className={sideBar ? 'BT_ActiveSideBar': ''} />
       
           

        </div>

        <div className='BT_ArticleSection'>
          <div className='BT_ShareTimeViewsContainer'>
            <div className="BT_ShareArticleIcons">
              <div className="BT_SaveArticleIcon"> <Link> <img src={isSaved ? SaveArticleIcon : isSavedArticleIcon} alt="" onClick={()=>setSaveIcon()} /></Link> </div>
              <div className="BT_ShareLinkedInIcon"><Link to="/"><img src={ShareLinkedInIcon} alt="" /></Link></div>
              <div className="BT_ShareFacebookIcon"><Link to="/"><img src={ShareFacebookIcon} alt="" /></Link></div>
              <div className="BT_ShareTwitterIcon"><Link to="/"><img src={ShareTwitterIcon} alt="" /></Link></div>
              <div className="BT_AttachArticleIcon"><Link to="/"><img src={AttachArticleIcon} alt="" /></Link></div>
            </div>

            <div className='BT_ViewsTimeContainer'>
              <p className="BT_ArticleNumOfViews">36.8K Viewers</p>
              <p className="BT_ArticleTimeDetails">2022-12-12 03:35 pm</p>
            </div>
          </div>

          <ArticleSection></ArticleSection>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default CompanyProfileScreenUI