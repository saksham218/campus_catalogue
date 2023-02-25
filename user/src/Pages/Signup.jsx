import * as Components from "../components/components";
// import "../css/signup.css";
import { useState } from 'react'
import styled from 'styled-components'
import { Backend_URL } from "../apis/api";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
// import MicrosoftLogin from "react-microsoft-login";


const Body = styled.div`
    background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
  scale: 1.3;
  overflow: hidden;
  `

function Signup() {
  const [signIn, toggle] = useState(true);

  const login = (e) => {
    e.preventDefault();
    // alert("hello");
    console.log(`${Backend_URL}/auth/microsoft`);
    window.location.replace(`${Backend_URL}/auth/microsoft`);
  };

  const login_G = (e) => {
    e.preventDefault();
    // alert("hello");
    console.log(`${Backend_URL}/auth/google`);
    window.location.replace(`${Backend_URL}/auth/google`);
  };

  return (
    <Body>
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
          <Components.Title>Sign in for Vendors</Components.Title>
            <br></br>
            <br></br>
            <Components.Button onClick={login_G} ><FaGoogle/> &nbsp;  Sign In with Google</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in For Students</Components.Title>
            <br></br>
            {/* <Components.Input type="email" placeholder="Email" /> */}
            {/* <button onClick={login}> click me</button> */}
            {/* <Components.Anchor href="/recovery">Forgot your password?</Components.Anchor> */}
            <br></br>
            <Components.Button onClick={login} ><SiMicrosoftoutlook/> &nbsp;  Sign In with Outlook</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Hey There!!!</Components.Title>
              <Components.Paragraph>
                Campus Residents or Students click below ...
              </Components.Paragraph>
              <Components.GhostButton_1 onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton_1>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title_2>Hello, Friend!</Components.Title_2>
              <Components.Paragraph_1>
                SH0p_OwNerS click below ...
              </Components.Paragraph_1>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign In with other options
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Body>

  );
}

export default Signup;


