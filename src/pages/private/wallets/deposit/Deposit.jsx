import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../../components/shared/spinner/Spinner'
import WalletGraph from '../../../../components/wallets/WalletGraph'
import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../../features/user/userSlice'
import '../wallets.css'
function Deposit() {

  const todayDays =  new Date().getDate()
  const todayMonth =  new Date().getMonth()
  const todayYear =  new Date().getFullYear()
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
  }, [])




if(!profil.user) {
  return <Spinner/>
}


  return (
    <section>
            <hgroup className='title-wallet'>


       <h2>Compte courant - 44 Jours</h2>
      <h2>{profil.user.walletsDeposit[0].amountMony} Krysto</h2>
      </hgroup>
      <div className="container-graph">
      <WalletGraph transactions={profil.user.walletsDeposit[0].transactions}/>
      </div>
      
     <div className="buttons">
      <button className='btn'>Envoyer</button>
      <button className='btn'>Recevoir</button>
     </div>
      <div className='cours'>
        <h4>Cours du Krysto au {todayDays}/{todayMonth}/{todayYear} </h4>
        <div>1 Krysto = {profil.monyConvertValue} ù</div>
      </div>
      <WalletsTable transactions={profil.user.walletsDeposit[0]}/>
    
    </section>
  )
}

export default Deposit
