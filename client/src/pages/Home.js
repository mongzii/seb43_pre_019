import styled from 'styled-components';

import Header from '../components/header/Header';
import Aside from '../components/leftAside/Aside';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import HomeImg from '../assets/Home.png';
// import { StyledBody, AppContainer, StyledMain } from './styles/StyledApp';

// import RightSideBar from './components/RightSideBar';
// import Questions from './pages/Questions';
// import Tags from './pages/Tags';
// import Users from './pages/Users';
// import Companies from './pages/Companies';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 57px;
  img {
    width: 1101px;
  }
`;

function Home({ isLogin, setIsLogin }) {
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Container>
        <Aside />
        <img src={HomeImg} alt="homeimg" />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
