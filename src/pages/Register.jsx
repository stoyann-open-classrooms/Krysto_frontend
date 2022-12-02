import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/shared/spinner/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    planKey: 'premium',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth,
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    // redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      toast.error('Vous devez entrer votre nom !')
    }
    if (!email) {
      toast.error('Vous devez entrer votre email !')
    }
    if (password !== password2) {
      toast.error('Les mots de passe ne correspondent pas !')
    } else {
      const userData = {
        name,
        email,
        password,
        planKey,
      }

      console.log(userData)

      dispatch(register(userData))
    }
  }

  const { name, email, password, password2, planKey } = formData
 
 
 
 
 
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
        </h1>
        <p className="explain">
          Créer votre compte pour commencer a troquer et gagner des coco tous
          les jours
        </p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Entrer votre nom"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="mail"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Entrer votre email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Entrer votre mot de passe"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password2"
              type="password"
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirmer votre mot de passe"
            />
          </div>
          <div className="form-group">
            <button className=" btn btn-block">S'inscrire</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
