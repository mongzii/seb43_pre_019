import styled from 'styled-components';
const Styledbody = styled.div`
  display: flex;
`;
const Styledmain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Styledsub = styled.div`
  border: 3px solid black;
`;

const StyledBts = styled.div`
  border: 3px solid blue;
`;

const Styledinfo = styled.div`
  border: 3px solid black;
  display: flex;
  flex-direction: column;
`;

function SignUp() {
  return (
    <>
      <Styledbody>
        <Styledsub>
          <p>Join the Stack Overflow community</p>
          <p>Get unstuck - ask a question</p>
          <p>Unlock new pribileges like voting and commenting</p>
          <p>Save your favorite questions, answers, watch tags, and</p>
          <p>more</p>
          <p>Earn reputation and badges</p>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <p>Get Stack Overflow for Teams free for up to 50 users.</p>
        </Styledsub>

        <Styledmain>
          <button>Sign up with Google</button>
          <button>Sign up with GitHub</button>
          <button>Sign up with Facebook</button>
          <Styledinfo>
            <span>Display name</span>
            <input />
            <span>Email</span>
            <input />
            <span>Password</span>
            <input />
            <p>Passwords must contain at least eight characters,</p>
            <p>including at least 1 letter and 1 number.</p>
            <p>Opt-in to receive occasional product</p>
            <p>updates, user research invitations, company</p>
            <p>announcements, and digests.</p>
            <button>Sign up</button>
            <p>By clicking "Sign up", you agree to our terms of</p>
            <p>service, privacy policy and cookie policy</p>
          </Styledinfo>
        </Styledmain>
      </Styledbody>
    </>
  );
}

export default SignUp;
