import '../css/signup.css'
import * as Components from '../components/components'

const ForgotPassword = () => {
    return (
        <Components.Container>
            <Components.SignUpContainer >
                <Components.Form>
                    <Components.Title_1>Enter Email</Components.Title_1>
                    <Components.Input type="email" placeholder="Email" />
                    <Components.Anchor href="/reset"> <u>Send reset link</u> </Components.Anchor>
                </Components.Form>
            </Components.SignUpContainer>
            <Components.OverlayContainer >
                <Components.Overlay >
                    <Components.LeftOverlayPanel >
                        <Components.Title>Did you remember your Password?</Components.Title>
                        <Components.Paragraph>
                            Sign in with your account and start using our amazing services!
                        </Components.Paragraph>
                        <Components.Anchor href="/register">
                            <Components.GhostButton>
                                Sign In
                            </Components.GhostButton>
                        </Components.Anchor>
                    </Components.LeftOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default ForgotPassword;