import React, { useState } from 'react';
import styled from 'styled-components';

import MyHeader from '../components/mypage/MyHeader';
import UserActivity from '../components/mypage/UserActivity';
import UserProfile from '../components/mypage/UserProfile';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

function MyPages() {
  const [isProfile, setIsProfile] = useState(true);

  const profilebuttons = isProfile ? <UserProfile /> : <UserActivity />;

  return (
    <Container>
      <MyHeader />
      {profilebuttons}
    </Container>
  );
}

export default MyPages;
