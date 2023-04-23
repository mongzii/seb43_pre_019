// import { Styledlogin, Styledloginbox } from "../styles/StyledLogIn";
import { useState } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';
import { ReactComponent as StackoverFlowLogo } from '../assets/logo-stackof.svg';
import Header from '../components/header/Header';

const Styledlogin = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: 290px;
  margin: auto;
  > * {
    margin: 5px;
  }
`;

const GoogleButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  margin-top: 300px;
`;

const GithubButton = styled.button`
  background-color: #2f3337;
  color: white;
  border: white;
  border-radius: 5px;
  height: 30px;
`;

const FacebookButton = styled.button`
  background-color: #385499;
  color: white;
  border: white;
  border-radius: 5px;
  height: 30px;
`;

const Styledloginbox = styled.body`
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin: auto;
  width: 280px;
  height: 200px;
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);
  > * {
    width: 200px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  > span {
    font-weight: 500;
  }

  > input {
    height: 20px;
  }
  > input:focus {
    border: 5px solid #d9eaf7;
    border-style: outset;
  }
  > button {
    width: 210px;
    background-color: #0a95ff;
    color: white;
    border: white;
    border-radius: 2px;
    height: 30px;
    cursor: pointer;
  }
  > button:hover {
    background-color: #0074cc;
  }
`;

const User = {
  email: 'abc@naver.com',
  password: '12345'
}

function LogIn() {

 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function onEmailHandler (e)  {
    setEmail(e.target.value);
    // console.log(e.target.value);
  }
  function onPasswordHandler (e) {
    setPassword(e.target.value);
  }

  function onSubmitHandler (){
    // console.log('submit');
    //내가 가지고 있는 정보 중 email과 password가 같은지 확인하고 같다면 navbar상태 바뀌고 home화면 떠야한다.
    //같지않다면 경고창 떠야한다. radius가 red로 되야한다.
    //navbar의 상태가 바뀌어야한다.
    // console.log(email);
    if(email ===User.email && password ===User.password){
      console.log('로그인성공');
      //navbar상태 바뀌어야한다. 그리고 home화면 떠야한다.
    }else {
      console.log('실패당당당');
      //경고창떠야한다. radius가 red로 되어야한다.
    }
  }

  return (
    <>
      <Header />
      <main>
        <Styledlogin>
          <StackoverFlowLogo />
          <GoogleButton>
            <FcGoogle size="19" />
            Log in with Google
          </GoogleButton>
          <GithubButton>
            <AiFillGithub size="19" />
            Log in with GitHub
          </GithubButton>
          <FacebookButton>
            <ImFacebook2 size="19" />
            Log in with Facebook
          </FacebookButton>
        </Styledlogin>
        <body>
          <Styledloginbox>
            <span>Email</span>
            <input onChange={onEmailHandler}/>
            <span>Password</span>
            {/* <span>Forgot password?</span> */}
            <input type='password' onChange={onPasswordHandler}/>
            <button onClick={onSubmitHandler}>Log in</button>
          </Styledloginbox>
        </body>
      </main>
    </>
  );
}

export default LogIn;
