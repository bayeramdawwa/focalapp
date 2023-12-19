import React from 'react'
import './style.css'
import Logo from './google.png'
import {Container, Image } from 'react-bootstrap'
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
// import axios from 'axios'
// import { REGISTER, baseURL } from '../../../../Api/Api'

export default function Signup(props) {
    // const[form,setForm]= useState({
    //     email:'',
    //     password:'',
    //     role_name:'Bloger',
    // })
    const [type,setType]=useState('password');
    const[icon,setIcon]=useState(eyeOff)

    // function handleChange(e) {
    //     e.preventDefault();
    //     setForm({...form, [e.target.name]: e.target.value});
  
    // }

//    async function handleSubmit(e){
//         e.preventDefault();
//         console.log("run");
//        try{ 
//         await axios.post(`${baseURL}/${REGISTER}`, form,);
//         console.log("success");
//        }
//        catch (err){
//         console.log("err");
//        } 
//     }
    
    const handleToggle=()=>{
        if(type==='password'){
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType('password');
        }
    }
  return (
    <div className='signup template   'style={{marginTop:'4rem',marginBottom:'4rem',flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'start',flexDirection:'column',position:'relative'}}>
    <div className='form-container  rounded '>
    <form  style={{width:'80%', margin:'0 auto'}}>
         <div className='mb-5'>
             <input id='email' name="email" type="email" placeholder='Enter Business Email' className='from-control 'required 
             />
         </div>
         <div className='mb-4 input-field' style={{position:'relative'}}>
            <input id='password' name="password" type={type} placeholder='Enter Password' className='from-control' 
             />
            <span onClick={handleToggle} style={{position:'absolute',right:'0'}}><Icon icon={icon} /></span>
             

             <a href='' style={{textDecoration:'none',color:'gray',display:'flex',alignItems:'end',justifyContent:'end'}}>{props.dic5}</a>
         </div>
         
         <div className=' mb-2' style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <button className='btn-arejmustafa '><p className='p-Areej'>{props.Text}</p></button>
         </div>

        </form>
        <div className=' mb-2'style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <button className='btn-AM'>
            <a href='http://127.0.0.1:8000/api/login/google'style={{textDecoration:'none'}}>
            <p className='p-Areej1'><Image src={Logo} alt="" className=' Google'/>Continue With Google</p></a></button>
          </div>
    </div>
    <div className='pt-3' style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}><p >{props.dic1}</p>
    <a style={{textDecoration:'none',color:'black',fontWeight:'bolder',paddingLeft:'3px'}} href='#'>{props.dic2}</a><p style={{paddingLeft:'3px'}}>{props.dic3}</p><a href='#' style={{textDecoration:'none',color:'black',fontWeight:'bolder',paddingLeft:'3px'}}>{props.dic4}</a></div>
 </div>
 
  )
}
