import React from 'react'
import Coco from '../../../assets/coco_svg/Fichier 1.svg'
import Dots from '../../../assets/dots.gif'
import './spinner.css'
function Spinner() {
  return (
    <div className='loadingSpinnerContainer'>
        <img src={Coco} alt="Chargement ..." />
        <img src={Dots} alt="" />
    </div>
  )
}

export default Spinner