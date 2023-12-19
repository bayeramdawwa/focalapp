import Formm from "../Form/Formm"
import Radio from "../Radio/Radio"
import img from '../../Assets/icon1.svg'

const Two3 = () => {
  return (
    <div className="hu26 hu27">
      <Formm label='Languages' img={img}/>
      <Radio label='Gender' input='Male' input1='Female' input2='No Profrence'/>
    </div>
  )
}

export default Two3
