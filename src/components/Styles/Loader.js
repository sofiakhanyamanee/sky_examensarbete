import styled from 'styled-components'

// *********** Loader after registration page *********** //

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-bottom: 100px;
width: 80%;
height: 100vh;
margin: 0 auto;

@media (min-width: 375px) {
  width: 70%;
}

@media (min-width: 1024px) {
  width: 45%;
}
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Message = styled.p`
margin-top: 100px;
`


export const GoBackBtn = styled.div`
margin-top: 20px;
color: #2faaa6;
cursor: pointer;

&:hover {
  color: #CDE4E2;
}
`