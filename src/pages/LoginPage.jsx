import React from 'react'
import Login from '../components/Login/Login'
import { BackBtn } from '../components/StylingComponents'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {
const history = useHistory()

  function backToStart(){
    history.push("/")
  }

  return (
    <div>
      <BackBtn onClick={backToStart}>Till startsidan</BackBtn>
      <Login/>
    </div>
  )
}
