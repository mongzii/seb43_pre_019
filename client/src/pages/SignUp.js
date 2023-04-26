// import { useState } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/header/Header';

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

// const Styledarticle = styled.div`
//   font-size: 2rem;
// `;

// const StyledBts = styled.div`
//   border: 3px solid blue;
// `;

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
        console.log(res.data);
        navigate('/login');
      })
      .catch(err => {
        console.log(err.response.data);
        alert('가입에 실패했습니다.');
      });
  };

  // useEffect(() => {
  //   if (emailValid && passwordValid) {
  //     setNotAllow(false);
  //     return;
  //   }
  //   setNotAllow(true);
  // }, [emailValid, passwordValid]);

  // const SignupHandler = e => {
  //   e.preventDefault();
  //   // console.log(e.type);
  //   // console.log(email);
  //   // console.log(name);
  //   fetch(`http://localhost:8081/sign`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  //   // .then(data => setLogin(data));
  // };

  // useSelector써서 store에 있는 함수를 가져와서 쓴다.
  // store에 있는 모든 state를 가져오게된거다.
  // const State = useSelector(state => {
  //   return state;
  // });
  // console.log(State);
  // console.log(State.emailwrite);
  // console.log(State.info[1]);
  // console.log(State.info[1].pwpart);
  // 0424 2:16am

  return (
    <>
      <Header />
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
            <input value={displayName} onChange={onHandleName} />
            <span>Email</span>
            <input value={email} onChange={onHandleEmail} />
            <div className="errormsg">
              {!emailValid && <div>유효한이메일이아닙니다</div>}
            </div>
            <span>Password</span>
            <input value={password} type="password" onChange={onHandlePassword} />
            <p>Passwords must contain at least eight characters,</p>
            <p>including at least 1 letter and 1 number.</p>
            <p>Opt-in to receive occasional product</p>
            <p>updates, user research invitations, company</p>
            <p>announcements, and digests.</p>
            <button onClick={SignupHandler}>Sign up</button>
            <p>By clicking Sign up, you agree to our terms of</p>
            <p>service, privacy policy and cookie policy</p>
          </Styledinfo>
        </Styledmain>
      </Styledbody>
    </>
  );
}

export default SignUp;
