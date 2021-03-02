import React from "react";
import {
  WrapperStartPage,
  LandingSection,
  FormSection,
  FormUl,
  LogoHeading
} from "../components/StylingComponents";
// import InputSearchBrf from '../components/InputSearchBrf'
import StartPageNavbar from "../components/StartPageNavbar";

export default function StartPage() {

  return (
    <WrapperStartPage>
      <LandingSection>
          <LogoHeading>Startsida</LogoHeading>
      </LandingSection>

      <FormSection>        
        <StartPageNavbar/>
      </FormSection>

      {/* <InputSearchBrf/>  */}
    </WrapperStartPage>
  );
}
