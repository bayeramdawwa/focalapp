import './FindProjectUI.css';
import React, { useState } from 'react';
import ProjectCard from './../../components/ProjectCard/ProjectCard';
import SearchBar from './../../components/SearchBar/SearchBar';
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';

function FindProjectUI () {
  const [ActiveTab, setSelectedTab] = useState(1);

  const SelectedTab = (index) => {
    setSelectedTab (index)
  }

  return (
    <>
    <NavBar />
    {/* search bar section with title  */}
      <div className='BT_FindUIContainer'>
        <div className='BT_FindUITopSection'>
          <h1 className='BT_FindUITiltle'>Find Project</h1>
          <p className='BT_FindUIText'>The largest and most active companies... <br/>
            Find an opportunity to work there.</p>
          <button className='BT_FindUICreatAccountButton'>Create Account</button>
          <SearchBar ></SearchBar>
        </div>
       {/* tabs */}
        <div className='BT_FindUITabsContainer'>
        <ul className='BT_FindUITabs'>
            <li className='BT_FindUITab' onClick={()=>SelectedTab(1)}><span className={ActiveTab ===1 ? "BT_Active" : ""}>All </span>Posts</li>
            <li className='BT_FindUITab' onClick={()=>SelectedTab(2)}><span  className={ActiveTab ===2 ? "BT_Active" : ""}>Graphic</span> Designer</li>
            <li className='BT_FindUITab' onClick={()=>SelectedTab(3)}><span  className={ActiveTab ===3 ? "BT_Active" : ""}>UI</span>&UX</li>
            <li className='BT_FindUITab'onClick={()=>SelectedTab(4)}><span  className={ActiveTab ===4 ? "BT_Active" : ""} >Web</span> Developer</li>
          </ul>
        </div>
        {/* projects cards  */}
        <div className='BT_FindUICardsContainer'>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindProjectUI;