import * as Components from "../components/components";
// import "../css/signup.css";
import { useState } from 'react'
import styled from 'styled-components'
import { Backend_URL } from "../apis/api";
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
  `

function Signup() {
  const [signIn, toggle] = useState(true);

  const login = (e) => {
    e.preventDefault();
    // alert("hello");
    console.log(`${Backend_URL}/auth/microsoft`);
    window.location.replace(`${Backend_URL}/auth/microsoft`);
  };

  return (
    <Body>
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Input type="password" placeholder="Confirm Password" />
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <button onClick={login}> click me</button>
            <Components.Anchor href="/recovery">Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton_1 onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton_1>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title_2>Hello, Friend!</Components.Title_2>
              <Components.Paragraph_1>
                Enter your personal details and start journey with us
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


