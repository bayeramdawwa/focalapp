import React from 'react'
import Signup from '../../components/loginandregester/Signup'
import '../../components/loginandregester/style.css'
import './homeStyle.css'
import Text from '../../components/loginandregester/Text'
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';




function Home() {
  return (
    <>
    <NavBar/>
    <div className='page3'>
      <div className='container pt-5'>
        <Text Title={'Creat New Account as a Blogger '} dic={'Register as a blogger to reach your interests and express your opinions.'}/>
        <Signup Text={'Creat New Account'}dic1={'By singing up you agree to the'} dic2={' terms of as'} dic3={'and'} dic4={'privacy policy'}/>
      </div>
    
    </div>
<Footer/>
    </>
  )
}

export default Home