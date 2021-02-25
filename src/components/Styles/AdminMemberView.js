import styled from 'styled-components'

export const HeadingMemberView = styled.h2`
color: #555b6e;
`

export const WrapperMembersComp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
width: 43%;
margin: 0px auto;
// background: beige;
font-size: 16px;

& hr {
  width: 80%;
  border: 0.2px solid whitesmoke;
}
`

export const WrapperNewMembersComp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
width: 43%;
margin: 0px auto;
// background: whitesmoke;
padding: 60px 0;
`

export const NewMembersBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0 ;
width: 80%;
`

export const MemberListBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0 ;
width: 80%;
// background: pink;
`


export const AcceptBtn = styled.button`
color: #161616;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
padding: 6px 16px;
width: 6vw;
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
width: 6vw;
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
width: 6vw;
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
// background:whitesmoke;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 60px 0;
 width: 100%;
`