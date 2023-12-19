import React from 'react'
import Btn from '../Btn/Btn'
import Formm from '../Form/Formm'
import Two from '../Two/Two'
import Two1 from '../Two1/Two1'
import Two2 from '../Two2/Two2'
import Two3 from '../Two3/Two3'
import img from './../../assets/icon1.svg'
import './EmployeeStyle.css'
const Employee = () => {
  return (
    <div className='hu25'>
        <h3>Employee Filter</h3>
        <Two/>
        <Formm label='Job Keywords'img={img} width="100%"/>
        <Two1/>
        <Two2/>
        <Two3/>
        <Btn/>
    </div>
  )
}

export default Employee
