import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../components/shared/spinner/Spinner'
import { getOffer, reset } from '../features/offer/offerSlice'
import '../components/offer/offer.css'
import coco from '../assets/coco_svg/Fichier 1.svg'

function Offer() {
  const [toggleModal, setToggleModal] = useState(false)
  const params = useParams()

  const { offer, isLoading, isError, isSuccess } = useSelector(
    (state) => state.offer,
  )
  const dispatch = useDispatch()

  const toggle = () => {
    setToggleModal(!toggleModal)
  }
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getOffer(params.id))
  }, [])
  console.log(offer)

  if (!offer.offer || isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1 className="title title-offer ">{offer.offer.title}</h1>
      </section>
      <div className="offer-cover">
        <img
          src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
          alt=""
        />
      </div>

      <div className="offer-info-top">
        <div className="offer-datetime">
          <p className="publish">
            Publiée le :
            <span>{new Date(offer.offer.created).toLocaleDateString()} </span>
          </p>
          par :<span>{offer.offer.creator.name}</span>
        </div>

        <div className="offer-price">
          <div className="price">
            <p>{offer.offer.amountMony}</p>
            <img src={coco} alt="" />
          </div>
          <div className="offer-info">
            <p className="price-translate">
              {offer.offer.amountMony * 1000} xpf
            </p>
          </div>
        </div>
      </div>

    

      <div className="offer-description">{offer.offer.text}</div>
      <div>
        <button className="btn btn-block" onClick={toggle}>
          Contacter le vendeur
        </button>
      </div>
    </>
  )
}

export default Offer
