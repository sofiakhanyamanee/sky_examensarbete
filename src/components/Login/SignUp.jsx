import React from 'react'
import useAuth from '../../store/actions/auth';
import { Wrapper , InputField} from '../StylingComponents'

export default function SignUp() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { signup } = useAuth();
  
    function handleSignUp(e, email, password, username) {
        e.preventDefault();
        signup(email, password, username);
    }
  
    return (
      <Wrapper>
        <h3>Signup</h3>
        <form>
          <div className="input-group">
            <label>Name</label>
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
            <label>Password</label>
            <br />
            <InputField
              type="password"
              name="password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={e => handleSignUp(e, email, password, name)}
          >
            Sign Up
          </button>
        </form>
      </Wrapper>
    );
  }
  