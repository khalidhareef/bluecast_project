import React from 'react'
import cardFrontBg from '../assets/bg-card-front.png'

function FrontCard() {
    

  return (
    <div >
        {
            
        }
        <div className='font-monospace' style={{position:'relative'}}>
        <img src={`${cardFrontBg}`} alt="" />
        <div style={{position:'absolute', top:'10px',left:'50px'}}>
            <div style={{height:'40px',width:'40px', borderRadius:'50%',backgroundColor:'white'}}>
                
            </div>
            <div style={{position:'absolute', top:'130px',left:'10px'}}>
                <h1 className='text-light'>000000000000</h1>
            </div>
            <div style={{position:'absolute', top:'190px',left:'5px'}}>
                <h5 className='text-light'>CardholderName</h5>
            </div>
            <div style={{position:'absolute', top:'190px',left:'275px'}}>
                <h5 className='text-light'>00/00</h5>
            </div>
        </div>
        </div>
    </div>
   
  )
}

export default FrontCard