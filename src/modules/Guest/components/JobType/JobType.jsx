
const JobType = ({label , img , width , option1 , option2 , option3 , option4}) => {
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
    </select>
    <img src={img} alt="" className='hu5'/>
    </div>
</div>
  )
}

export default JobType
