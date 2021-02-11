import styled from 'styled-components'

// *********** StartPage *********** //

export const WrapperStartPage = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
background-color: whitesmoke;
width: 100vw;
`

export const NavBar = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 10vh;
// background-color: #CDE4E2;
padding: 0px 50px;
`



// *********** Generell styling SIGNUP/LOGIN *********** //



export const Wrapper = styled.div`
width: 40vw;
height: 80vh;
// margin: 0px auto;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Poppins', sans-serif;
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
left: 30px;
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

&: hover {
  background-color: #2faaa6;
  color: white;
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



// *********** DASHBOARD *********** //



export const WrapperDashboard = styled.div`
width: 100vw;
height: 100vh;
margin: 0px auto;
font-family: 'Poppins', sans-serif;
`

export const SignOutBtn = styled.button`
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
`

export const UserInfo = styled.div`
// background:whitesmoke;
position: absolute;
top: 30px;
left: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ProfilePicture = styled.div`
width: 100px;
height: 100px;
margin-bottom: 10px;
border-radius: 50%;
background: #89b0ae;
`