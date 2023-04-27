import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/header/Header';
import Aside from '../components/leftAside/Aside';
import MyHeader from '../components/mypage/MyHeader';
import UserProfile from '../components/mypage/UserProfile';
import Footer from '../components/footer/Footer';

const Container = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1102px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 58px;
  position: relative;
`;

function MyPages() {
  // const [isProfile, setIsProfile] = useState(true);
  // const profilebuttons = isProfile ? <UserProfile /> : <UserActivity />;

  return (
    <>
      <Container>
        <Header />
        <Aside />
        <InnerContainer>
          <MyHeader />
          <UserProfile />
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
}

export default MyPages;
