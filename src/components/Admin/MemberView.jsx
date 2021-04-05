import React from 'react'
import MemberList from './MemberList'
import NewMembers from './NewMembers'
import styled from 'styled-components'

export default function MemberView() {
  return (
    <Wrapper>
      {/* <HeadingMemberView>Medlemmar</HeadingMemberView> */}
      <NewMembers/>
      <MemberList/>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
width: 100vw;
`