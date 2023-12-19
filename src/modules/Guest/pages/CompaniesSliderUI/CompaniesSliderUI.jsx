import NavBar from '../../../../components/NavBarAll/NavBar';
import Footer from '../../../../components/Footer/Footer';
import CompaniesSlider from './../../components/CompaniesSlider/CompaniesSlider'
import './CompaniesSliderUI.css'

const CompaniesSliderUI = () => {
  return (
    <>
     <NavBar />
    <div className="BT_CompaniesSliderContainer">
    <h1 className="BT_CompaniesSliderTitle">Top Syria's Companies</h1>
    <CompaniesSlider></CompaniesSlider>
    <h1 className="BT_CompaniesSliderTitle">Sister Companies & Digital Partners</h1>
    <CompaniesSlider></CompaniesSlider>

    </div>
    <Footer />
    </>
  )
}

export default CompaniesSliderUI