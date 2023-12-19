import './FormmStyle.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const Formm = ({label , img , width , option1 , option2 , option3 , option4 , option5 , option6 , option7 , option8 , option9 , option10 , option11 , option12 , option13 , option14}) => {

  return (
    <div className='hu1' style={{width:width}}>
        <p className='hu2'>{label}</p>
        <div className="hu3">
        <select className="hu4" >
          <option value="" hidden>Select</option>
          <option value="">{option1}</option>
          <option value="">{option2}</option>
          <option value="">{option3}</option>
          <option value="">{option4}</option>
          <option value="">{option5}</option>
          <option value="">{option6}</option>
          <option value="">{option7}</option>
          <option value="">{option8}</option>
          <option value="">{option9}</option>
          <option value="">{option10}</option>
          <option value="">{option11}</option>
          <option value="">{option12}</option>
          <option value="">{option13}</option>
          <option value="">{option14}</option>
        </select>
        <img src={img} alt="" className='hu5'/>
        </div>
    </div>
  )
}

export default Formm ;
