import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/shared/spinner/Spinner'
import { reset } from '../../features/user/userSlice'
import { getProfil } from '../../features/user/userSlice'
import { Outlet, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Private() {
  const user = JSON.parse(localStorage.getItem('userToken'))

  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getProfil())
  }, [dispatch])
  console.log(profil)

  if (isLoading === false) {
    if (profil.error === true) {
      
      return <Navigate to={'/login'} />
    }
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default Private
