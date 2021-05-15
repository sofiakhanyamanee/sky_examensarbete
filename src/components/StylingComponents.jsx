import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
import img from '../images/startpage.png';


// *********** StartPage *********** //

export const WrapperLandingPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
min-height: 100vh;
margin-top: -150px;
`

export const WrapperStartPage = styled.div`
width: 50%;
height: 100vh;
margin: 0 auto;
`

export const NavigationBar = styled.div`
//  background: lightcoral;
width: 100%;
display: flex;
justify-content: space-between;
`


export const Logo = styled.div`
// background: blue;
width: 10vw;
`

export const FormUl = styled.div`
display: flex;
justify-content: center;
justify-content: space-around;
// background: lightcoral;
 width: 40vw;
`


export const FormLi = styled.div`
display: flex;
justify-content: center;
// background: orange;
// width: 60%;
padding: 0;
`

export const LogoHeading = styled.h1`
padding: 35px 45px;
font-size: 30px;
text-align: left;
`


// *********** Generell styling SIGNUP/LOGIN *********** //



export const Heading = styled.h2`
// background: whitesmoke;
width: 50%;
text-align: left;
margin: 20px auto;
`

export const BackBtn = styled.button`
position: absolute;
top: 30px;
right: 30px;
color: white;
background-color: black;
border: none;
border-radius: 8pt;
padding: 10px 15px;
cursor: pointer;
font-family: 'Poppins', sans-serif;

&: hover {
  background: whitesmoke;
  color: black;
  border: 1px solid black;
}

&:focus {
  outline: none;
}
`


export const Form = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin: 0 auto;
`

export const LabelInputBox = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 10px 0;
`


export const InputField = styled.input`
width: 100%;
padding: 15px 0px;
margin-bottom: 20px;
border: none;
border-bottom: 1px solid lightgrey;

&:focus {
  outline: none;
}
`

export const Btn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 14pt;
width: 100%;
padding: 12px 12px;
font-size: 16px;
margin: 18px 0;
font-family: 'Poppins', sans-serif;
cursor: pointer;

&: hover {
  background-color: #2faaa6;
  color: white;
}

&:focus {
  outline: none;
}
`

export const FlexRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const ErrorMsg = styled.div`
display: block;
color: #2faaa6;
padding: 5px 0px;
font-size: 12px;
`



// *********** DASHBOARD *********** //



export const WrapperDashboard = styled.div`
width: 100vw;
font-family: 'Poppins', sans-serif;
`

export const SignOutBtn = styled.button`
// position: absolute;
// bottom: 4rem;
// left: 0;
color: slategrey;
background-color: transparent;
border: none;
cursor: pointer;
font-family: 'Poppins', sans-serif;
// font-size: 14px;
// font-weight: 500;
// width: 250px;
// padding-left: 25px;
text-align: left;

&: hover {
  color: black;
}
`

export const UserInfo = styled.div`
position: absolute;
top: 5rem;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ProfilePicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
margin-bottom: 10px;
border-radius: 50%;
background: #33B5AA;
color: whitesmoke;
`

export const Box = styled.div`
 background:whitesmoke;
 display: flex;
 flex-direction: column;
 justify-content: center;
//  align-items: center;
 padding: 60px 0;
`

export const AdminHeading = styled.h1`
margin-bottom: 30px;
// margin-left: 20vw;
// width: 80vw;
text-align: center;
color: #555b6e;
`


// *********** DASHBOARD-ADMIN-MEMBERS *********** //

export const WrapperMembersComp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
// margin-left: 20vw;
`

export const NewMembersBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0 ;
width: 300px;
`

export const MemberListBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0 ;
width: 100%;
`


export const AcceptBtn = styled.button`
color: #161616;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
padding: 5px 15px;
cursor: pointer;
font-family: 'Poppins', sans-serif;
// margin-left: 100px;
font-size: 12px;

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
padding: 5px 15px;
cursor: pointer;
font-family: 'Poppins', sans-serif;
margin-left: 5px;
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
padding: 5px 15px;
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

// *********** DASHBOARD-USER *********** //


export const UserHeading = styled.h1`
margin-bottom: 30px;
// margin-left: 20vw;
width: 80vw;
text-align: center;
`
