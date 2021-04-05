import styled from 'styled-components'

// *********** LetterView *********** //

export const WrapperLetterView = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-bottom: 100px;
width: 80%;
margin: 0 auto;

@media (min-width: 375px) {
  width: 70%;
}

@media (min-width: 1024px) {
  width: 45%;
}
`
export const Heading = styled.h2`
margin-bottom: 30px;
color: darkslategrey;
text-align: left;
margin-top: 40px;

@media (min-width: 1024px) {
  margin-top: 0px;
}
`

export const PostContainer = styled.div`
background: #f8f9fa;
width: 100%;
margin: 10px 0;
padding: 15px;
display: flex;
flex-direction: column;
border-radius: 12pt;
`

export const Post = styled.p`
font-size: 12px;
text-align: left;
`


export const RemovePostBtn = styled.button`
border: none;
background: transparent;
cursor: pointer;
font-size: 12px;
color: grey;
font-family: Poppins;
padding-right: 10px;
align-self: flex-end;
margin-top: 10px;

&: hover {
  color: #e38f8c;
}

&:focus {
  outline: none;
}
`

export const FromAdminTag = styled.p`
// background: teal;
font-size: 13px;
text-align: left;
font-weight: 500;
`

export const PostedAt = styled.div`
display: flex;
font-size: 12px;
color: grey;
margin-bottom: 10px;
margin-top: 5px;
`


export const Timestamp = styled.p`

`
export const InputBtnBox = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 30px;
margin-top: 40px;

@media (min-width: 375px) {
  margin-top: 0px;
}
`


export const InputField = styled.input`
width: 90%;
padding: 15px 12px;
margin-top: 12px;
margin-bottom: 12px;
margin-right: 2%;
border-radius: 12pt;
border: none;
background: whitesmoke;
font-family: 'Poppins', sans-serif;

&:focus {
  outline: none;
}
`


export const PostBtn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 50%;
width: 45px;
height: 45px;
font-size: 14px;
font-family: 'Poppins', sans-serif;
margin: 12px 0;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

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
justify-content: space-between;
`