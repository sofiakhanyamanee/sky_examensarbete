import React from 'react'
import useAuth from '../../store/actions/auth';
import { Wrapper, Heading, InputField, Btn} from '../StylingComponents'

 

export default function SignUp() {
    const [brf, setBrf] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { signup } = useAuth();

    const role = 'admin'
  
    function handleSignUp(e, email, password, username, brf, role) {
        e.preventDefault();
        signup(email, password, username, brf, role);
    }
  
    return (
      <Wrapper>
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
            onClick={e => handleSignUp(e, email, password, name, brf, role)}
          >
            Skapa konto
          </Btn>
        </form>
      </Wrapper>
    );
  }
  