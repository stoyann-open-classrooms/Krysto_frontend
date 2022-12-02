import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../../../../components/shared/spinner/Spinner'
import WalletGraph from '../../../../components/wallets/WalletGraph'
import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'

import { getProfil, reset } from '../../../../features/user/userSlice'
import '../wallets.css'

function Main() {
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

  console.log(profil)

  if (!profil.user) {
    return <Spinner />
  }

  return (
    <section>
    
      <hgroup className='title-wallet'>

      <h2>Compte courant - 44 Jours</h2>
      <h2>{profil.user.walletMain.amountUnity / profil.monyConvertValue} Krysto</h2>
      </hgroup>
      <div className="container-graph">
       <WalletGraph transactions={profil.user.walletMain.transactions}/>
      </div>
 
     <div className="buttons">
      <button className='btn'>Envoyer</button>
      <button className='btn'>Recevoir</button>
     </div>
    
      <WalletsTable transactions={profil.user.walletMain} />
    </section>
  )
}

export default Main
