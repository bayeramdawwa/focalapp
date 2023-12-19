import Formm from '../Form/Formm'
import JobType from '../JobType/JobType'
import img from '../../Assets/icon1.svg'
import './TwoStyle.css'
const Two = () => {
  return (
    <div className='hu26'>
      <Formm label='Job Role' img={img}/>
      <JobType label='Job Types' img={img} option1='Trainee' option2='Full Time' option3='Part Time' option4='Remotely' />
    </div>
  )
}

export default Two
