import React,{useState} from 'react'

import heart from '../../images/heart.svg'
import heartFilled from '../../images/heartFilled.svg'

import './Card.css';

const Card = ({photo}) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className='card'>
           <img src={photo.img_src} alt='' className='card-photo'/>
           <div className='card-body'>
           <p>{photo.earth_date}</p>
           <button  onClick={()=> setLiked(!liked)}>{!liked?<img src={heart} alt='heart' />:<img src={heartFilled} alt='heartFilled'/>}</button>
           </div>
           
        </div>
    )
}

export default Card
