import React from 'react';
import './EmployeeCard.css';
import Profile_Picture from './../../Assets/Profile-Picture.svg';


const ProjectCard = () => {
    return (
        <>
            <div className='BT_EmpcardContainer'> 
                <div className='BT_EmpCardHeader'>
                    <div className='BT_EmpCardIcon'>
                        <img src={Profile_Picture} alt="" className='BT_EmployeeImage'></img>
                        <p className='BT_EmployeeName'>Kareem s</p>
                    </div>
                   
                </div>
                <div className='BT_EmpCardTitle'>
                    Web Developer
                </div>
                <div className='BT_EmpCardDescription'>
                    <div>
                      <div><p className='BT_EmpCardLocation'>City : <span className='BT_Black_Text'>Damascus</span> </p></div>
                      <div><p className='BT_EmpCardAge'>Age : <span className='BT_Black_Text'>28</span></p></div>
                    </div>
                    <div>
                    <div><p className='BT_EmpCardExperirnce'>Exp : <span className='BT_Black_Text'>3 years</span></p></div>
                    <div> <p className='BT_EmpCardSalary'>Salary : <span className='BT_Black_Text'>1000000 SP</span></p></div>
                    </div>
                </div>

                <button className='BT_ViewResumeButton'>View Resume</button>

            </div>
        </>
    )
}

export default ProjectCard