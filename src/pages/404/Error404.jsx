import React from 'react'
import GifCoins from '../../assets/coins/coinGif.gif'
import './error404.css'


function Error404() {
  return (
    <div className="  main-404 ">
      <h2 className="title  ">oups !</h2>
      <h1 className="title ">404</h1>
      <h3 className='subtitle '>Il semblerait que vous vous soyez perdus...</h3>

<div className='coins-404'>

<img src={GifCoins} alt="piéce Krysto qui tourne sur elle même"  />
</div>

     
   <a href='/' className='submit-btn'>
     Retour a l'accueil</a>
    </div>
  )
}

export default Error404
