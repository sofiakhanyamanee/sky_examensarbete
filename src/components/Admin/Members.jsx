import React from 'react'
import useAuth from '../../store/actions/auth'

export default function Members({ user }) {
  const { acceptUserToDB } = useAuth();
 
  const state = {
    user
  }

  function handleAccept() {
    acceptUserToDB(state.user.id).then((resp) => {
      // setMemberList(resp);
      console.log("accept")
      // console.log("resp", resp)
    })
  }


  
  return (
    <div>
      <p>{state.user.name}</p>
      <p>{state.user.id}</p>
      <button onClick={handleAccept}>Godkänn</button>
    </div>

  )
}
