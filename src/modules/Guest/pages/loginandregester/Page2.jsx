import React from 'react'
import Signup from '../../components/loginandregester/Signup'
import Text from '../../components/loginandregester/Text'
import '../../components/loginandregester/style.css'
import './homeStyle.css'
import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';

function Page2() {
  return (
    <>
    <NavBar/>
    <div className='page2'>   
       <div className='container pt-5'>
          <Text Title={'Login as a blogger '} dic={'Welcome to the blogger community'}/>
          <Signup Text={'Login'} dic3={'No account?'} dic4={'creat New One'} dic5={'forget a password?'}/>
       </div></div>
       <Footer/>
       </>
  )
}

export default Page2