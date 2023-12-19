import Formm from '../Form/Formm'
import Two from '../Two/Two'
import Two1 from '../Two1/Two1'
import Two4 from '../Two4/Two4'
import Two5 from '../Two5/Two5'
import './JobFiltStyle.css'
import img from '../../Assets/icon1.svg'
import Btn from '../Btn/Btn'
const JobFilt = () => {
  return (
    <div className="huu">
      <h3>Job Filter</h3>
      <Two/>
      <Two1/>
      <Two4/>
      <Two5/>
      <Formm label='Job Requirements'img={img} width="100%"/>
      <Btn/>
    </div>
  )
}

export default JobFilt
