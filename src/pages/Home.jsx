import { Link } from 'react-router-dom'
import { FaPlusCircle, FaSearch, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
function Home() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <section className="heading">
        <h1>Le troc nouvelle génèration !</h1>
        <p>Donnez, pretez, troquer et gagnez en pouvoir d'achats !</p>
      </section>
      <Link to={'/search'} className="btn btn-reverse btn-block">
        {' '}
        <FaSearch /> Rechercher un troc
      </Link>

      {user ? (
        <>
          <Link to={'/register-plan'} className="btn btn-reverse btn-block">
            {' '}
            <FaPlusCircle />
            Publier un troc
          </Link>
          )
        </>
      ) : (
        <Link to={'/register-plan'} className="btn btn-reverse btn-block">
          {' '}
          <FaUser /> s'inscrire gratuitement
        </Link>
      )}
    </>
  )
}

export default Home
