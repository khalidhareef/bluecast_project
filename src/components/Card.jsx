import React from 'react'

import FrontCard from './FrontCard'
import BackCard from './BackCard'

function Card() {
    return (
        <div>
            <div className='' style={{marginLeft:'-250px'}} >
               <FrontCard/>
            </div>
            <div style={{marginLeft:'-150px'}}>
              <BackCard/>
            </div>
        </div>
    )
}

export default Card