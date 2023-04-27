import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { ReactComponent as Sign1 } from '../assets/sign1.svg';
import { ReactComponent as Sign2 } from '../assets/sign2.svg';
import { ReactComponent as Sign3 } from '../assets/sign3.svg';
import { ReactComponent as Sign4 } from '../assets/sign4.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import Github from '../assets/github.png';
import Facebook from '../assets/facebook.png';
import NotRobot from '../assets/notrobot.png';
import { ReactComponent as Question } from '../assets/question.svg';

const Styledbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f2f3;
`;
const Styledmain = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const Styledsub = styled.div`
  border: none;
  margin-right: 30px;
  .join {
    font-size: 27px;
    margin-bottom: 30px;
  }
`;

const Styledinfo = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 315px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);

  > * {
    margin: 5px;
    margin-left: 25px;
    margin-right: 25px;
  }

  > span {
    margin-top: 20px;
    font-weight: bold;
  }

  > input {
    border-radius: 5px;
    border: 1px solid lightgray;
    height: 35px;
  }

  p {
    font-size: 12px;
    color: #6a737c;
    margin-top: 0px;
  }

  .mb {
    margin-bottom: 30px;
  }

  .checkbox {
    width: 13px;
    height: 13px;
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

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(null);

  const navigate = useNavigate();

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  function onHandleName(e) {
    setDisplayName(e.target.value);
    // console.log(e.target.value);
  }

  function onHandleEmail(e) {
    setEmail(e.target.value);
    // console.log(e.target.value);
    const regex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  function onHandlePassword(e) {
    setPassword(e.target.value);
    // console.log(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)/-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }
  // .post(`${process.env.REACT_APP_DEV_URL}/sign`, newdata)
  const SignupHandler = e => {
    e.preventDefault();
    const newdata = {
      email,
      displayName,
      password,
    };
    axios

      .post(`/api/members/sign`, newdata)
      .then(res => {
        navigate('/login');
      })
      .catch(err => {
        console.log(err.response.data);
        alert('가입에 실패했습니다.');
      });
  };

  const StyledSign = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    svg {
      margin-right: 9px;
    }
  `;

  const StyledSub = styled.div`
    font-size: 13px;
    margin: 0px;
    .get {
      color: #0074cc;
    }
  `;

  const SignupButton1 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-top: 40px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 316px;
    svg {
      margin-right: 5px;
    }
  `;

  const SignupButton2 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: black;
    font-weight: bold;
    color: white;
    width: 316px;
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  `;

  const SignupButton3 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 10px;
    background-color: #385499;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 316px;
    img {
      width: 20px;
      height: 20px;
      background-color: white;
      margin-right: 5px;
    }
  `;

  const StyledCheckbox = styled.div`
    display: flex;
    svg {
      width: 35px;
      height: 35px;
    }
  `;

  return (
    <>
      <Header />
      <Styledbody>
        <Styledsub>
          <p className="join">Join the Stack Overflow community</p>
          <StyledSign>
            <Sign1 />
            <p>Get unstuck - ask a question</p>
          </StyledSign>
          <StyledSign>
            <Sign2 />
            <p>Unlock new pribileges like voting and commenting</p>
          </StyledSign>
          <StyledSign>
            <Sign3 />
            <p>Save your favorite questions, answers, watch tags, and more </p>
          </StyledSign>
          <StyledSign>
            <Sign4 />
            <p>Earn reputation and badges</p>
          </StyledSign>
          <StyledSub>
            <p>Collaborate and share knowledge with a private group for FREE.</p>
            <p className="get">Get Stack Overflow for Teams free for up to 50 users.</p>
          </StyledSub>
        </Styledsub>

        <Styledmain>
          <SignupButton1>
            <Google />
            Sign up with Google
          </SignupButton1>
          <SignupButton2>
            <img src={Github} alt="github" />
            Sign up with GitHub
          </SignupButton2>
          <SignupButton3>
            <img src={Facebook} alt="facebook" />
            Sign up with Facebook
          </SignupButton3>
          <Styledinfo>
            <span>Display name</span>
            <input value={displayName} onChange={onHandleName} />
            <span>Email</span>
            <input value={email} onChange={onHandleEmail} />
            <div className="errormsg">
              {!emailValid && <div>유효한이메일이아닙니다</div>}
            </div>
            <span>Password</span>
            <input value={password} type="password" onChange={onHandlePassword} />
            <p>
              Passwords must contain at least eight characters,including at least 1 letter
              and 1 number.
            </p>
            <img src={NotRobot} alt="notrobot" />
            <StyledCheckbox>
              <input type="checkbox" className="checkbox" />
              <p>
                Opt-in to receive occasional product updates, user research invitations,
                company announcements, and digests.
              </p>
              <Question />
            </StyledCheckbox>
            <button onClick={SignupHandler}>Sign up</button>
            <p className="mb">
              By clicking Sign up, you agree to our terms of service, privacy policy and
              cookie policy
            </p>
          </Styledinfo>
        </Styledmain>
      </Styledbody>
    </>
  );
}

export default SignUp;
