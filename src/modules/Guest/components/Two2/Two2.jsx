import Formm from "../Form/Formm"
import JobType from "../JobType/JobType"
import img from '../../Assets/icon1.svg'


const Two2 = () => {
  return (
    <div className="hu26 hu27">
      <Formm label='City' img={img} option1='Damascus' option2='Homs' option3='Latakia' option4='Tartous' option5='Aleppo' option6='Hama' option7='Idlib' option8='Al-Hasakah' option9='Deer Al-Zour' option10='Raqqa' option11='Al-Suwayda' option12='Daraa' option13='Al-Kenitra' option14='Outside Syria' />
      <JobType label='Education Level' img={img} option1='High School Diploma' option2='College Degree' option3='Master Degree' option4='A Ph.D' />
    </div>
  )
}

export default Two2
