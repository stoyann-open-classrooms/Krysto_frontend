import React from 'react'
import { Link } from 'react-router-dom'

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
          <h2>200 XPF / Mois</h2>
          <p>Engagement d'un mois renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
          <h2>Gratuit</h2>
          <p>En vous inscrivant dés aujourd'hui <br /> Vous bénéficier d'un compte <strong>gratuit a vie !</strong></p>
          <Link to={'/register'}>  <button className="btn btn-block">Choisir cette formule</button></Link>
          <a href="#"> Détails de l'offre</a>
        </div>
        <div>
          <h2>1 800 XPF / Mois</h2>
          <p>Engagement d'un an renouvelable <br /> Résiliable à tout moment.</p>
          <button className="btn btn-block">Choisir cette formule</button>
          <a href="#"> Détails de l'offre</a>
        </div>
      </div>
    </>
  )
}

export default RegisterPlan
