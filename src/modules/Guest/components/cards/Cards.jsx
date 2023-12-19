import React from 'react'
import "../cards/cards.css"
import glas from './img/glass.svg'
import small from './img/small.svg'
import Vector from './img/Vector.svg'
import laptop from './img/laptop.svg'
import robot2 from './img/robot.svg'
import girl from './img/girl.svg'
import boy from './img/boy.svg'
// import back from './img/back.svg'
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';
function Cards() {
  return (
<>
<NavBar/>
    <section className='AS-Hero1'>
    <div className='AS-container'>


      <h1 className="AS-main-head">Save Blogs</h1>
      <p className='AS-main-p'>Save the blogs you like to come to them later</p>
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
      <img className='AS-small-img' src={small} alt='not found'
      />
      <p className='AS-second-p'>User Name</p>
      </div>
      <p className='AS-date'>2022-12-12   03:35 pm</p>
      </div>
      <p className='AS-last-p'>
          #UI,#Ux,#Design,#VR,#AI,#Gaming,#Ui&Ux
        </p>

      </div>
      <div className='AS-box'>
      <img className='AS-first-image' src={laptop} alt='not found'
      />
      <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-minute reality
      checks from users</p>
      
      <img className='AS-vector' src={Vector} alt='not found'
      />

      <div className='AS-small-div'>
        <div className='AS-smallest-div'>
      <img className='AS-small-img' src={girl} alt='not found'
      />
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
      <img className='AS-small-img' src={boy} alt='not found'
      />
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
      <Footer />
      </>
  )
}

export default Cards