import { FaLocationArrow, FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function OfferItem({ offer }) {
  return (
    <div className="offer-card">
      <div className="offer-card_img">
        <img src={`http://152.228.137.213:4001/${offer.gallery[0]}`} alt="" />
      </div>
      <div className="offer-card_body">
        <div className="offer-card_body_header">
          <h5>{offer.title}</h5>
          <div className="offer-card_body_header_info">
            <p>
              <FaTag />
              {offer.category ? offer.category.name : 'aucune categorie'}
            </p>
            <p>
              <FaLocationArrow />
              {offer.city}
            </p>
          </div>
        </div>
        <div className="offer-card_body_text">
            {offer.text}
        </div>
      </div>
      <Link className="btn btn-block btn-card" to={`/offer/${offer._id}`}>Détails</Link>
    
    </div>
  )
}

export default OfferItem
