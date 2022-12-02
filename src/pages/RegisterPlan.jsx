import React from 'react'
import { Link } from 'react-router-dom'
import coco1 from '../assets/coco_svg/Fichier 1.svg'
import coco2 from '../assets/coco_svg/Fichier 2.svg'
import coco3 from '../assets/coco_svg/Fichier 7.svg'

function RegisterPlan() {
  return (
    <>
      <section className="heading">
        <h1>Choisissez votre formule...</h1>
        <p className="heading-subtitle">
          {' '}
          <strong> Inscription gratuite </strong> pour les 5000 premmiers
          utilisateurs !
        </p>
      </section>
      <p className="explain">
        Pour accéder à tous les services de Krysto et commencer a recevoir des
        Cocos tous les jours, inscrivez-vous en choisissant parmis les formules
        suivantes:
      </p>
      <div className="boxes">
        <div>
          <img src={coco1} alt="" />
          <h2>400 XPF / Mois</h2>
          <p>Engagement d'un mois renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
        <img src={coco2} alt="" />
          <h2>Gratuit a vie !</h2>
          <p>En vous inscrivant dés aujourd'hui <br /> Vous bénéficier d'un compte <strong>gratuit a vie !</strong></p>
          <Link to={'/register'}>  <button className="btn btn-block">Choisir cette formule</button></Link>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
        <img src={coco3} alt="" />

          <h2>3 800 XPF / Mois</h2>
          <p>Engagement d'un an renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
      </div>
    </>
  )
}

export default RegisterPlan
