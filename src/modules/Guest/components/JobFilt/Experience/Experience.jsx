import './ExperienceStyle.css';
import { useState } from 'react';

const Experience = ({label , img1 , img2}) => {
const [num , setnum]= useState(3);
if(num<0){
  setnum(0);
}
  return (
    <div className='hu6'>
        <p className='hu7'>{label}</p>
        <div className="hu8">
          <img src={img1} alt="" className='hu9 hu12' onClick={()=> setnum(num-1)}/>
          <p className='hu10'>{num} year</p>
          <img src={img2} alt="" className='hu11 hu12' onClick={()=> setnum(num+1)}/>
        </div>
    </div>
  )
}

export default Experience ;
