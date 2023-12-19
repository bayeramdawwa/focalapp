import React from 'react'

function Text(props) {
  return (
    <>
        <div className='container ' style={{textAlign:'center'}}>
              <h1 className='text-areejj' >{props.Title}</h1>
              <p className=' mt-3 text-center text-areejj1' style={{textAlign:'center'}}>{props.dic}</p>
        </div>
    </>
  )
}

export default Text