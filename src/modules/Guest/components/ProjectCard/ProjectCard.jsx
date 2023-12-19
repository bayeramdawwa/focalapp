import React from 'react';
import './ProjectCard.css';
import card_icon from './../../Assets/Youtube.svg';


const ProjectCard = () => {
    return (
        <>
            <div className='BT_cardContainer'> 
                <div className='BT_CardHeader'>
                    <div className='BT_CardIcon'>
                        <img src={card_icon} alt="" className='BT_CompanyImage'></img>
                        <p className='BT_CompanyName'>Youtube</p>
                    </div>
                    <p className='BT_NumOfViewers'>15K Viewers</p>
                </div>
                <div className='BT_CardTitle'>
                    Video Editor
                </div>
                <div className='BT_Description'>
                    <p className='BT_Role'>job roles: <span className='BT_Black_Text'>Youtube Script Writer</span></p>
                    <p className='BT_Location'>job location : <span className='BT_Black_Text'>remotly</span> </p>
                    <p className='BT_Type'>job types : <span className='BT_Black_Text'>Part time</span></p>
                    <p className='BT_Experirnce'>Experience : <span className='BT_Black_Text'>3 years</span></p>
                    <p className='BT_Salary'>Salary : <span className='BT_Black_Text'>1000000 SP - 15000000 SP</span></p>
                </div>
                <div className='BT_Timeinfo'>
                    <div className='BT_ActiveDiv'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#71AA27" />
                        </svg>
                        <p className='BT_CardActive'>Active</p>
                    </div>
                    <div className='BT_DTdetails'>
                        <p className='BT_CardTime'>02:30 pm</p>
                        <p className='BT_CardTime'>2022-08-23</p>
                    </div>

                </div>
                <button className='BT_MoreInfoButton'>More information</button>

            </div>
        </>
    )
}

export default ProjectCard