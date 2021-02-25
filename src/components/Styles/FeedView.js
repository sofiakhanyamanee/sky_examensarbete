import styled from 'styled-components'

// *********** FeedView *********** //


export const FeedViewWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
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
