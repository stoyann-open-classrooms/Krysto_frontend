import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../features/auth/authSlice'
import {
  FaHome,
  FaMoneyBill,
  FaPlusCircle,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserEdit,
} from 'react-icons/fa'

import Coco from '../../../assets/coco_svg/Fichier 1.svg'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem('userToken'))

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  console.log(user)

  return (
    <>
      <header className="header">
        <div>
          <Link className="logo" to={'/'}>
            <img src={Coco} alt="piéce krysto qui tourne" />
            <p>KRYSTO</p>
          </Link>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            {user ? (
              <>
               <li>
               <Link to={'/'}>
                 {' '}
                 <FaHome /> Accueil
               </Link>
             </li>
             <li>
               <Link to={'/search'}>
                 {' '}
                 <FaSearch /> Rechercher
               </Link>
             </li>
             <li>
               <Link to={'/money'}>
                 {' '}
                 <FaMoneyBill /> La monnaie
               </Link>
             </li>
             <li>
               <Link to={'/add-offer'}>
                 {' '}
                 <FaPlusCircle /> Publier un troc
               </Link>
             </li>
             <li>
               <Link to={'/private/dashboard'}>
                 {' '}
                 <FaUserEdit /> Dashboard
               </Link>
             </li>
              <li>
                {' '}
                <button onClick={onLogout} className="btn">
                  {' '}
                  <FaSignOutAlt /> deconection
                </button>
              </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={'/'}>
                    {' '}
                    <FaHome /> Accueil
                  </Link>
                </li>
                <li>
                  <Link to={'/search'}>
                    {' '}
                    <FaSearch /> Rechercher
                  </Link>
                </li>
                <li>
                  <Link to={'/money'}>
                    {' '}
                    <FaMoneyBill /> La monnaie
                  </Link>
                </li>
                <li>
                  <Link to={'/login'}>
                    {' '}
                    <FaSignInAlt />
                    Connexion
                  </Link>
                </li>
                <li>
                  <Link to={'/register-plan'}>
                    {' '}
                    <FaUser /> S'inscrire
                  </Link>
                </li>{' '}
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
