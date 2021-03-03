import styled from 'styled-components'

// *********** LetterView *********** //

export const WrapperLetterView = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding-bottom: 100px;
`
export const Heading = styled.h2`
margin-bottom: 50px;
`

export const PostContainer = styled.div`
background: #f8f9fa;
width: 40%;
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

&: hover {
  color: #e38f8c;
}

&:focus {
  outline: none;
}
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
width: 43%;
justify-content: space-around;
margin-bottom: 30px;
`


export const InputField = styled.input`
width: 85%;
padding: 15px 12px;
margin: 12px 0;
border-radius: 12pt;
border: none;
background: whitesmoke;
font-family: Poppins;

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
// padding: 0px 8px;
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
