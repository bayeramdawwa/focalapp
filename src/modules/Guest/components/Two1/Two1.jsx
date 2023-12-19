import Experience from '../Experience/Experience'
import Formm from '../Form/Formm'
import img from '../../Assets/icon1.svg'
import img1 from '../../Assets/min.svg'
import img2 from '../../Assets/plus.svg'
import './Two1Style.css'

const Two1 = () => {
  return (
    <div>
      <div className='hu26 hu27'>
        <Experience label='Experience' img1={img1} img2={img2}/>
        <Formm label='Salary Rabge' img={img}/>
      </div>
    </div>
  )
}

export default Two1
