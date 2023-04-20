import React from 'react';
import styled from 'styled-components';

import MyHeader from '../components/mypage/MyHeader';
import UserMain from '../components/mypage/UserMain';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

function MyPages() {
  return (
    <Container>
      <MyHeader />
      <UserMain />
    </Container>
  );
}

export default MyPages;
