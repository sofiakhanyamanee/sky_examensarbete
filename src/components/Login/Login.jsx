import React, {useContext} from "react";
// import { Context } from '../../store/Store';
import useAuth from '../../store/actions/auth';
import { WrapperStartPage, LogoHeading,LandingSection, FormSection, Heading, InputField, Btn, Form} from '../StylingComponents'
import StartPageNavBar from '../StartPageNavbar'
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
    <WrapperStartPage>

      <LandingSection>
        <LogoHeading>Startsida</LogoHeading>
      </LandingSection>
         <FormSection>
         <StartPageNavBar/>

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
         </FormSection>
    </WrapperStartPage>
  );
}
