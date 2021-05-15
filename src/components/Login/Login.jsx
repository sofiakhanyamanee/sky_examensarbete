import React from "react";
import useAuth from "../../store/actions/auth";
import {
  WrapperStartPage,
  Form,
  Heading,
  LabelInputBox,
  InputField,
  Btn
} from "../StylingComponents";



export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <WrapperStartPage>
        <Heading>Logga in</Heading>
        <Form>
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
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </LabelInputBox>
          <Btn type="submit" onClick={handleSubmit}>
            Logga in
          </Btn>
        </Form>
    </WrapperStartPage>
  );
}
