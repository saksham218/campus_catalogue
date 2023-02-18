/* eslint-disable react/jsx-pascal-case */
// import '../css/signup.css'
import * as Components from '../components/components'
import styled from 'styled-components'

const Body = styled.div`
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
    scale: 1.3;
`

const ForgotPassword = () => {
    return (
        <Body>
            <Components.Container>
                <Components.SignUpContainer >
                    <Components.Form>
                        <Components.Title_1>Enter Email</Components.Title_1>
                        <Components.Input type="email" placeholder="Email" />
                        <Components.Anchor href="/recovery"> <u>Send reset link</u> </Components.Anchor>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.OverlayContainer >
                    <Components.Overlay >
                        <Components.LeftOverlayPanel >
                            <Components.Title_3>Did you remember your Password?</Components.Title_3>
                            <Components.Paragraph>
                                Sign in with your account and start using our amazing services!
                            </Components.Paragraph>
                            <Components.Anchor href="/">
                                <Components.GhostButton_1>
                                    Sign In
                                </Components.GhostButton_1>
                            </Components.Anchor>
                        </Components.LeftOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </Body>

    );
}

export default ForgotPassword;