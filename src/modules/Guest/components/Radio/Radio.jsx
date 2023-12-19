import { useState } from 'react'
import './RadioStyle.css'

const Radio = (props) => {

  const [name , setname] = useState ({
    activeObj : null ,
     objects : [{id:1 , title:props.input} , {id:2 , title:props.input1} , {id:2 , title:props.input2} ]
  })
  const nameClass = (index) => {
    setname ({...name ,activeObj : name.objects[index]} )
   
  }
  const nameClassStyle = (index) => {
    if (name.objects[index] === name.activeObj){
      return "hu18 active"
    }else {
      return "hu18"
    }
  }

  return (
    <div className="hu14">
      <p className="hu15">{props.label}</p>
      <form action="" className="hu17">

      {name.objects.map(({title} , index)=> (
        <div className={nameClassStyle(index)}
        onClick={()=> {
          nameClass(index)
        }}>
         <input type="radio" name="hu" id={title} value={props.input} className='hu19'/>
            <label htmlFor={title} key={index} className='hu20'>{title}</label>
        </div>
      )
      )}
      </form>
    </div>
  )
}

export default Radio

