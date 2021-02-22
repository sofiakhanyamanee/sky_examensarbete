import styled from 'styled-components'

// *********** StartPage *********** //

export const WrapperStartPage = styled.div`
display: flex;
align-items: center;
justify-content:flex-end;
// background-color: whitesmoke;
width: 100vw;
`

export const LogoHeading = styled.h1`
padding: 0px 35px;
font-size: 30px;
`

export const NavBar = styled.nav`
position: absolute;
top: 0;
display: flex;
flex-direction: row;
margin: 0px auto;
align-items: center;
justify-content: space-between;
height: 15vh;
width: 100vw;
// background-color: #CDE4E2;
// padding: 0px 50px;
`

export const ShowLoginBtn = styled.button`
color: white;
background-color: #33b5aa;
border-radius: 8pt;
border: none;
padding: 10px 15px;
margin: 0px 35px;
cursor: pointer;
font-family: 'Poppins', sans-serif;

&: hover {
  background: black;
  color: white;
}

&:focus {
  outline: none;
}
`

export const ShowSignUpBtn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
padding: 10px 15px;
cursor: pointer;
font-family: 'Poppins', sans-serif;

&: hover {
  background: black;
  color: #CDE4E2;
}

&:focus {
  outline: none;
}
`

export const ShowAdminSignUpBtn = styled.button`
color: black;
border: none;
// border: 1px solid #CDE4E2;
border-radius: 8pt;
padding: 10px 15px;
margin: 0px 35px;
cursor: pointer;
font-family: 'Poppins', sans-serif;

&: hover {
  background: black;
  color: #CDE4E2;
}

&:focus {
  outline: none;
}
`


// *********** Generell styling SIGNUP/LOGIN *********** //



export const Wrapper = styled.div`
width: 40vw;
height: 80vh;
margin-right: 100px;
margin-top: 100px;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Poppins', sans-serif;
background: white;
border-radius: 24pt;
`

export const Heading = styled.h2`
margin: 25px 0;
`

export const Container = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
width: 40vw;
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

export const InputField = styled.input`
width: 25vw;
padding: 15px 12px;
margin: 12px 0;
border: 1px solid lightgrey;
border-radius: 8pt;

&:focus {
  outline: none;
}
`
export const Btn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
width: 27vw;
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

export const Label = styled.label`
color: gray;
`

export const Form = styled.form`
width: 100%;
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
padding-top: 50px;
// margin: 0px auto;
font-family: 'Poppins', sans-serif;
// background: whitesmoke;
`

export const SignOutBtn = styled.button`
position: absolute;
top: 50px;
right: 50px;
color: white;
background-color: #161616;
border: none;
border-radius: 8pt;
padding: 10px 15px;
cursor: pointer;
font-family: 'Poppins', sans-serif;

&: hover {
  background: whitesmoke;
  color: #161616;
  border: 1px solid #161616;
}
`

export const UserInfo = styled.div`
background: transparent;
width: 20vw;
height: 30vh;
position: absolute;
top: 0;
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
//  background:whitesmoke;
 display: flex;
 flex-direction: column;
 justify-content: center;
//  align-items: center;
 padding: 60px 0;
`

export const AdminHeading = styled.h1`
margin-bottom: 30px;
margin-left: 20vw;
width: 80vw;
text-align: center;
`


// *********** DASHBOARD-ADMIN-MEMBERS *********** //

export const WrapperMembersComp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: 20vw;
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
width: 200px;
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
margin-left: 20vw;
width: 80vw;
text-align: center;
`
