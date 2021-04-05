import styled from 'styled-components'


export const WrapperMembersComp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
width: 80%;
padding-top: 40px;
margin: 0px auto;

@media (min-width: 375px) {
  padding-top: 0px;
  width: 70%;
}

@media (min-width: 645px) {
  padding-top: 0px;
  width: 50%;
}
`


export const Heading = styled.h2`
margin-bottom: 30px;
color: darkslategrey;
display: flex;
justify-self: flex-start;
`

export const MemberListBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0 ;
width: 80%;
// background: pink;
`

export const FlexRow = styled.div`
display: flex;
`