import styled from 'styled-components'

// *********** FeedView *********** //



export const FeedViewWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding-bottom: 100px;
width: 80%;
margin: 0 auto;
margin-top: 40px;

@media (min-width: 1024px) {
  width: 45%;
  margin-top: 0px;
}
`

export const Heading = styled.h1`
color: darkslategrey;
text-align: left;
width: 100%;
margin-bottom: 30px;
`

export const InputBtnBox = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 30px;
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
