import React, { useState, useEffect } from "react";
import { database } from '../../firebase'
import useAuth from '../../store/actions/auth';
import { WrapperStartPage, Heading, Form, LabelInputBox, InputField, Btn} from '../StylingComponents'


export default function SignUp() {
    const [brf, setBrf] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [brfList, setBrfList] = useState([])
    const [avatarColor, setAvatarColor] = useState("")
    const { signup, addToBrfCollection } = useAuth();
    const role = 'admin'

    async function RandomAvatarColor() {
       const AvatarColors = [
      "ccaabb",
      "#ffb6b9",
      "#fae3d9",
      "#bbded6",
      "#bee5d3",
      "#fafcc2",
      "#ffeecc",
      "#f7e8f6",
      "#bbded6",
      "#e6e7e5",
      "#dde8b9",
      "#bad7df",
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
  
    async function handleSignUp(e, email, password, firstname, lastname, brf, role, avatarColor) {
        e.preventDefault();
        await signup(email, password, firstname, lastname, brf, role, avatarColor);
        await addToBrfCollection(email, firstname, lastname, brf, role)
    }
  

    return (
      <WrapperStartPage>
        <Heading>Skapa styrelse konto</Heading>
        <Form>
        <LabelInputBox>
            <InputField
              type="text"
              name="brf"
              placeholder="Bostadsrättsförening"
              autoComplete="brf"
              onChange={event => setBrf(event.target.value.toLowerCase())}
            />
          </LabelInputBox>
          <LabelInputBox>
            <InputField
              type="text"
              name="firstname"
              placeholder="Förnamn"
              autoComplete="first-name"
              onChange={event => setFirstName(event.target.value)}
            />
          </LabelInputBox>
          <LabelInputBox>
            <InputField
              type="text"
              name="lastname"
              placeholder="Efternamn"
              autoComplete="last-name"
              onChange={event => setLastName(event.target.value)}
            />
          </LabelInputBox>
          <LabelInputBox>
            <InputField
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="email"
              onChange={event => setEmail(event.target.value)}
            />
          </LabelInputBox>
          <LabelInputBox>
            <InputField
              type="password"
              name="password"
              placeholder="Lösenord"
              onChange={event => setPassword(event.target.value)}
            />
          </LabelInputBox>
          <Btn
            type="submit"
            onClick={e => handleSignUp(e, email, password, capitalize(firstname),capitalize(lastname), toLower(brf), role, avatarColor)}>
            Skapa konto
          </Btn>
        </Form>
      </WrapperStartPage>
    );
  }
  