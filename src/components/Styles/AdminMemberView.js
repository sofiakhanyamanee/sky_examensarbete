import styled from 'styled-components'

export const HeadingMemberView = styled.h2`
color: #555b6e;
`

export const WrapperMembersComp = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 80%;
margin: 0px auto;

@media (min-width: 500px) {
  width: 65%;
}

@media (min-width: 830px) {
  width: 40%;
}
`

export const WrapperNewMembersComp = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 80%;
margin: 0px auto;
padding: 60px 0;

@media (min-width: 500px) {
  width: 65%;
}

@media (min-width: 830px) {
  width: 40%;
}
`

export const Heading = styled.h4`
color: darkslategrey;
text-align: left;
margin-bottom: 30px;
font-weight: 600;
`

export const NewMembersBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0 ;
width: 100%;
`

export const MemberListBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0;
width: 100%;
`


export const AcceptBtn = styled.button`
color: #161616;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
padding: 6px 16px;
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-size: 12px;
text-align: center;

&: hover {
  background: #33b5aa;
  color: white;
}

&:focus {
  outline: none;
}
`

export const RejectBtn = styled.button`
color: #161616;
background-color: whitesmoke;
border: none;
border-radius: 8pt;
padding: 6px 16px;
cursor: pointer;
font-family: 'Poppins', sans-serif;
margin-left: 20px;
font-size: 12px;

&: hover {
  color: whitesmoke;
  background-color: #161616;
}

&:focus {
  outline: none;
}
`

export const DeleteBtn = styled.button`
color: #161616;
background-color: whitesmoke;
border: none;
border-radius: 8pt;
padding: 6px 16px;
cursor: pointer;
font-family: 'Poppins', sans-serif;
margin-left: 50px;
font-size: 12px;

&: hover {
  color: whitesmoke;
  background-color: #161616;
}

&:focus {
  outline: none;
}
`

export const Box = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 100%;
`

export const FlexRow = styled.div`
display: flex;
align-items: center;
font-size: 14px;
`