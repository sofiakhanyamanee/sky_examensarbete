import React from 'react'
import useAuth from '../../store/actions/auth'
import { WrapperMembersComp, MemberBox, AcceptBtn, RejectBtn } from ".././StylingComponents";

export default function Members({ user }) {
  const { acceptUserToDB, removeNewUser } = useAuth();
  
  const state = {
    user
  }
  // const currentBrf = state.user.brf

  function handleAccept() {
    acceptUserToDB(state.user.id);
  }

  function handleReject() {
    console.log("remove")
    console.log(state.user.id)
    removeNewUser(state.user);
  }

  
  return (
    <WrapperMembersComp>
    <MemberBox>
      <p>{state.user.name}</p>
      <AcceptBtn onClick={handleAccept}>Godkänn</AcceptBtn>
      <RejectBtn onClick={handleReject}>Neka</RejectBtn>
    </MemberBox>
</WrapperMembersComp>
  )
}
