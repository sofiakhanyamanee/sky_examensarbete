import React, { useState, useEffect } from "react";
import { database } from '../../firebase'
import useAuth from "../../store/actions/auth";
import { WrapperStartPage, Heading, Form, LabelInputBox, InputField, Btn, ErrorMsg } from "../StylingComponents";
// import { AppContext } from "../../contexts/AppContextProvider";
// import StartPageNavBar from '../StartPageNavbar'

export default function SignUp() {
  const [brf, setBrf] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [avatarColor, setAvatarColor] = useState("")
  const [brfList, setBrfList] = useState([])
  const { signup } = useAuth();
  const role = "user";

  async function RandomAvatarColor() {
    const AvatarColors = [
   "#89AEB2",
   "#D2A3A9",
   "#C8B4BA",
   "#5E96AE",
   "#70AE98",
   "#ECBE7A",
   "#BC85A3",
   "#CA7E8D",
   "#EAB159",
   "#DFC7C1",
   "#E17E76",
   "#C5D7C0",
   ];

   let rand = Math.floor(Math.random()*AvatarColors.length);     
   setAvatarColor(AvatarColors[rand])

   return avatarColor
 }


  useEffect(() => {
    database.collection("brf").get().then((querySnapshot) => {
      let brfArr = []
      querySnapshot.forEach((doc) => {
        brfArr.push(doc.id)
      });
      setBrfList(brfArr);
  });
  RandomAvatarColor()
  }, [])

  function capitalize (string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  function toLower (string) {
    return string.toLowerCase()
  }

  
  function handleSignUp(e, email, password, firstname, lastname, brf, role, avatarColor) {
    e.preventDefault();

    const isInArray = brfList.includes(brf);
    
    if (isInArray) {
      signup(email, password, firstname, lastname, brf, role, avatarColor);

    } else {
      setErrorMsg("Brf:en du angav är tyvärr inte registrerad");
    }
  }


  return (
    <WrapperStartPage>
      <Heading>Skapa boende konto</Heading>
      <Form>
        <LabelInputBox>
          <InputField
            type="text"
            name="brf"
            placeholder="Bostadsrättsförening"
            autoComplete="brf"
            onChange={(event) => setBrf(event.target.value)}
          />
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </LabelInputBox>
        <LabelInputBox>
          <InputField
            type="text"
            name="firstname"
            placeholder="Förnamn"
            autoComplete="first-name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </LabelInputBox>
        <LabelInputBox>
          <InputField
            type="text"
            name="lastname"
            placeholder="Efternamn"
            autoComplete="last-name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </LabelInputBox>
        <LabelInputBox>
          <InputField
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </LabelInputBox>
        <LabelInputBox>
          <InputField
            type="password"
            name="password"
            placeholder="Lösenord"
            onChange={(event) => setPassword(event.target.value)}
          />
        </LabelInputBox>
        <Btn
          type="submit"
          onClick={(e) => handleSignUp(e, email, password, capitalize(firstname),capitalize(lastname), toLower(brf), role, avatarColor)}>
          Skapa konto
        </Btn>
      </Form>
    </WrapperStartPage>
  );
}
