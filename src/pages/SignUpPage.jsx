import React from 'react'
import SignUp from '../components/Login/SignUp'
import { useHistory } from 'react-router-dom'
import { BackBtn } from '../components/StylingComponents'

export default function SignUpPage() {
  const history = useHistory()

  function backToStart(){
    history.push("/")
  }

  return (
    <div>
      <BackBtn onClick={backToStart}>Till startsidan</BackBtn>
      <SignUp/>
    </div>
  )
}
