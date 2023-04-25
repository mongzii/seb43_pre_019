// import { Styledlogin, Styledloginbox } from "../styles/StyledLogIn";
import { useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
// import useAxios from '../services/useAxios';
// import SignUp from './SignUp';
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

// const User = {
//   email: 'abc@naver.com',
//   password: '12345',
// };

function LogIn() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [login, setLogin] = useState([]);

  // const devUrl = process.env.REACT_APP_DEV_URL;
  // const [login] = useAxios(`${devUrl}/login`);
  // console.log(login);
  // const [isLogin, setIsLogin] = useState(false); //로그인상태
  // const [userInfo, setUserInfo] = useState(null);
  // const [loginInfo, setLoginInfo] = useState({
  //   userId: '',
  //   password: '',
  // });
  // const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);

  function onEmailHandler(e) {
    setEmail(e.target.value);
    // console.log(e.target.value);
  }
  function onPasswordHandler(e) {
    setPassword(e.target.value);
  }
  const onSubmitHandler = () => {
    // return axios.get(`http://localhost:8081/login`).then(res => {
    //   console.log(res.data);
    // });
    fetch(`http://localhost:8081/login`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data); //0425 12:13pm
        const user = data.find(
          info => info.email === email && info.password === password,
        );
        // console.log(user);
        if (user) {
          console.log('통과');
        } else {
          console.log('다시해');
        }
      });
  };

  // const fetchLogin = async () => {
  //   const { data } = await axios.get(`${devUrl}/login`);
  //   setLogin(data);
  // }
  // useEffect(()=>{
  //   fetchLogin();
  //   console.log(login);
  // }, [])
  // const onSubmitHandler = async e => {
  //   e.preventDefault();
  //   const newUser = {
  //     email,
  //     password,
  //   };

  //   console.log(newUser);

  //   await axios(`${devUrl}/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: JSON.stringify(newUser),
  //   });
  // console.log('submit');
  // 내가 가지고 있는 정보 중 email과 password가 같은지 확인하고 같다면 navbar상태 바뀌고 home화면 떠야한다.
  // 같지않다면 경고창 떠야한다. radius가 red로 되야한다.
  // navbar의 상태가 바뀌어야한다.
  // console.log(email);
  // fetch('http://localhost:8081/login')
  //   .then(res => res.json())
  //   .then(json => console.log(json));
  // if (email === User.email && password === User.password) {
  //   console.log('로그인성공');
  //   // navbar상태 바뀌어야한다. 그리고 home화면 떠야한다.
  // } else {
  //   console.log('실패당당당');
  //   // 경고창떠야한다. radius가 red로 되어야한다.
  // }
  // if (email === User.email && password === User.password) {
  //   return axios
  //     .post('http://localhost:8081/login', { loginInfo, checkedKeepLogin })
  //     .then(res => {
  //       setIsLogin(true);
  //       setUserInfo(res.data);
  //     })
  //     .catch(err => {
  //       if (err.response.status === 401) {
  //         console.log('실패');
  //       }
  //     });
  // }
  //  };
  // const onSubmitHandler = e => {
  //   e.preventDefault();

  //   fetch(`http://localhost:8081/login`, {
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
  // };

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
            <input onChange={onEmailHandler} />
            <span>Password</span>
            {/* <span>Forgot password?</span> */}
            <input type="password" onChange={onPasswordHandler} />
            <button onClick={onSubmitHandler}>Log in</button>
          </Styledloginbox>
        </body>
      </main>
    </>
  );
}

export default LogIn;
