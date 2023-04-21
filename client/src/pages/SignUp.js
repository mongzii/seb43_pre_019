import styled from 'styled-components';
import Header from '../components/header/Header';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { RiQuestionnaireFill } from 'react-icons/ri';

const Styledbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Styledmain = styled.div`
  display: flex;
  flex-direction: column;
  // flex-grow: 2;
  width: 380px;

  > button {
    margin: 5px;
  }
`;

const Styledsub = styled.div`
  border: 3px solid black;
  margin-right: 30px;
  line-height: 50px;
`;

const Styledarticle = styled.div`
  font-size: 2rem;
`;

const StyledBts = styled.div`
  border: 3px solid blue;
`;

const Styledinfo = styled.div`
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);

  > * {
    margin: 5px;
    margin-left: 40px;
    margin-right: 40px;
  }

  > span {
    margin-top: 20px;
  }

  > input {
    height: 35px;
  }

  > button {
    background-color: #0a95ff;
    color: white;
    border: 0a95ff;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    border: white;
    border-radius: 2px;
    height: 40px;
    cursor: pointer;
  }
  > button:hover {
    background-color: #0074cc;
  }
`;

const GoogleButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  height: 40px;
`;
const GithubButton = styled.button`
  background-color: #2f3337;
  color: white;
  border: white;
  border-radius: 5px;
  height: 40px;
`;
const FacebookButton = styled.button`
  background-color: #385499;
  color: white;
  border: white;
  border-radius: 5px;
  height: 40px;
`;

function SignUp() {
  return (
    <>
      <Header />
      <Styledbody>
        <Styledsub>
          <Styledarticle>Join the Stack Overflow community</Styledarticle>
          <p>
            <RiQuestionnaireFill />
            Get unstuck - ask a question
          </p>
          <p>Unlock new pribileges like voting and commenting</p>
          <p>Save your favorite questions, answers, watch tags, and</p>
          <p>more</p>
          <p>Earn reputation and badges</p>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <p>Get Stack Overflow for Teams free for up to 50 users.</p>
        </Styledsub>

        <Styledmain>
          <GoogleButton>
            <FcGoogle size="19" />
            Sign up with Google
          </GoogleButton>
          <GithubButton>
            <AiFillGithub size="19" />
            Sign up with GitHub
          </GithubButton>
          <FacebookButton>
            <ImFacebook2 size="19" />
            Sign up with Facebook
          </FacebookButton>
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
