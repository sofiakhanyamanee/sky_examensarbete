import React, {useContext} from "react";
// import { Context } from '../../store/Store';
import useAuth from '../../store/actions/auth';
import { Wrapper, Heading, InputField, Btn} from '../StylingComponents'

export default function Login() {
    // const [state] = useContext(Context);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { signin } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submit");
    await signin(email, password);
  }


  return (
    <Wrapper>
      {/* <h3>uid: {state.currentUser ? (state.currentUser.id ? state.currentUser.id : 0) : ''}</h3>
        <h3>name: {state.currentUser ? (state.currentUser.name ? state.currentUser.name : '') : ''}</h3>
        <h3>email: {state.currentUser ? (state.currentUser.email ? state.currentUser.email : '') : ''}</h3>
         */}
        <Heading>Logga in</Heading>
        <form>
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
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <Btn type="submit" onClick={handleSubmit}>
            Logga in
          </Btn>
        </form>
    </Wrapper>
  );
}
