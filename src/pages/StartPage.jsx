import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import heroImg from '../images/mockup.png'
import { useContext } from "react";
import { WrapperLandingPage } from "../components/StylingComponents";
import { AppContext } from "../contexts/AppContextProvider";

export default function StartPage() {
  const [searchedBrf, setSearchedBrf] = useState('')
  const [message, setMessage] = useState ('')
  const { brfList } = useContext(AppContext);

  function SearchBrf () {
    if (brfList.includes(searchedBrf)){
      setMessage ('Din bostadsrättsförening finns registrerad')
    } else {
      setMessage('')
    }
  }
  
  useEffect(() => {
    SearchBrf()
    // eslint-disable-next-line
  }, [searchedBrf])

  return (
    <WrapperLandingPage>
      <HeroWrapper>
      <TextSection>
        <h1 className="heading"> ─ <span>Trapphuset</span></h1>
        <p className="text1">För ett härligare</p>
        <p className="text2">grannskap.</p>
        <InputField
        placeholder="Sök på din bostadsrättsförening"
        onChange={(event) => setSearchedBrf(event.target.value)}/>
        <Message>{message}</Message>
      </TextSection>
      <ImgSection>
        <Img alt="app" src={heroImg}/>
      </ImgSection>
      </HeroWrapper>
    </WrapperLandingPage>
  );
}

export const HeroWrapper = styled.div`
width: 65%;
display: flex;
align-items: center;
// background: whitesmoke;
`


export const TextSection = styled.div`
padding-top: 100px;
width: 50%;
text-align: left;

& .heading {
  font-weight: 100;
  padding-bottom: 10px;
}

& .text1 {
font-size: 2.5rem;
}

& .text2 {
  font-size: 2.5rem;
    letter-spacing: 2px;
  }
`


export const ImgSection = styled.div`
padding-top: 50px;
width: 50%
`

export const Img = styled.img`
width: 100%;
`

export const InputField = styled.input`
width: 70%;
border: 2px solid #ACD2CF;
padding: 20px;
border-radius: 24pt;
background: transparent;
margin-top: 25px;

&:focus {
  outline: none;
}

&::placeholder {
  color: lightgrey;
}
`

export const Message = styled.p`
font-size: 10px;
color: #ACD2CF;
padding-top: 15px;
padding-left: 20px;
`