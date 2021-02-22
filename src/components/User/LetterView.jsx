import React from 'react'
import styled from 'styled-components'

export default function LetterView() {
  return (
    <WrapperLetterView>
      <h2>Styrelse brev</h2>
    </WrapperLetterView>
  )
}

export const WrapperLetterView = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: 20vw;
`
