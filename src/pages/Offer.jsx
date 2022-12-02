import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../components/shared/spinner/Spinner'
import { getOffer, reset } from '../features/offer/offerSlice'
import Coins from '../assets/coins/coinGif.gif'


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
    <div className='page-content' >
      <div className="offer-cover">
        <img
          src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
          alt=""
        />
      </div>

      <div className="box-offer-info">
        <div className="offer-datetime">
          <p className='publish'>
            Publiée le :
            <span>

             {new Date(offer.offer.created).toLocaleDateString()}
            </span>
          </p>
          <p className='publish'>
           par :
            <span>
{offer.offer.creator.name}
            </span>
          </p>
        </div>

        <div className="offer-price">
          <div className="price">
            <p>{offer.offer.amountMony}</p>
            <img src={Coins} alt="" />
          </div>
          <div className="offer-info">
            <p className="price-translate">
              {offer.offer.amountMony * 1000} xpf
            </p>
          </div>
        </div>
      </div>

      <div className="buttons mt-5">
        <button className="submit-btn" onClick={toggle}>
          Contacter le vendeur
        </button>
       
      </div>
      <h1 className="title title-offer ">{offer.offer.title}</h1>

      <div className="box box-description">{offer.offer.text}</div>

     
    </div>
  )
}

export default Offer
