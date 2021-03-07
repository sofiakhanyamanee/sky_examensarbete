import React, { useState, useEffect } from "react";
import { database } from '../../firebase'
import useAuth from '../../store/actions/auth';
import { WrapperStartPage, Heading, InputField, Btn} from '../StylingComponents'


export default function SignUp() {
    const [brf, setBrf] = useState("");
    const [name, setName] = useState("");
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
  
    async function handleSignUp(e, email, password, username, brf, role, avatarColor) {
        e.preventDefault();
        await signup(email, password, username, brf, role, avatarColor);
        await addToBrfCollection(email, username, brf, role)
    }
  

    return (
      <WrapperStartPage>
        <Heading>Skapa styrelse konto</Heading>
        <form>
        <div className="input-group">
            <label>Brf</label>
            <br />
            <InputField
              type="text"
              name="brf"
              autoComplete="brf"
              onChange={event => setBrf(event.target.value.toLowerCase())}
            />
          </div>
          <div className="input-group">
            <label>Namn</label>
            <br />
            <InputField
              type="text"
              name="name"
              autoComplete="first-name"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <br />
            <InputField
              type="text"
              name="email"
              autoComplete="email"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Lösenord</label>
            <br />
            <InputField
              type="password"
              name="password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <Btn
            type="submit"
            onClick={e => handleSignUp(e, email, password, name, brf, role, avatarColor)}
          >
            Skapa konto
          </Btn>
        </form>

        {brfList && brfList.map((brf, index) => {
           return (
               <div key={index}>
                 <p>{brf}</p>
               </div>
           )}
      )}
      </WrapperStartPage>
    );
  }
  