import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0.625rem;
  box-shadow: 0 0.875rem 1.75rem rgba(0, 0, 0, 0.25), 0 0.635rem 0.635rem rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 42.375rem;
  max-width: 100%;
  min-height: 25rem;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props =>
    props.signingIn !== true
      ? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signingIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  margin-left: -2vw;
`;
export const Title_2 = styled.h1`
  font-weight: bold;
  margin: 0;
  margin-left: 2vw;
`;
export const Title_3 = styled.h1`
  font-weight: bold;
  margin: 0;
  margin-left: -4vw;
  font-size: 2vw;
  width: 20vw;
`;

export const Title_1 = styled.h1`
  font-weight: bold;
  margin-bottom:1rem;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  margin-top:0.4rem;
  margin-left: 5vw;
`;
export const GhostButton_1 = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  margin-top:0.4rem;
  margin-left: -4vw;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props =>
    props.signingIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signingIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2.5rem;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => (props.signingIn !== true ? `transform: translateX(20%);` : null)}
`;
export const Paragraph = styled.p`
  font-size:0.875rem;
  font-weight: 100;
  line-height: 1.25rem;
  letter-spacing: 0.031rem;
  margin: 2rem 0 1.875rem;
  margin-left: 2vw;
  margin-right: 5vw;
`;

export const Paragraph_1 = styled.p`
  font-size:0.875rem;
  font-weight: 100;
  line-height: 1.25rem;
  letter-spacing: 0.031rem;
  margin: 2rem 0 1.875rem;
  margin-left:4vw;
`;