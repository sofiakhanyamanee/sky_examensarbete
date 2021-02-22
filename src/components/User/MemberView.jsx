import React from 'react'
import MemberList from '../User/MemberList'
import styled from 'styled-components'

export default function MemberView() {
  return (
    <WrapperMemberView>
      <MemberList/>
    </WrapperMemberView>
  )
}


export const WrapperMemberView = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: 20vw;
`