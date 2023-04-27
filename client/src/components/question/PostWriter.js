import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useGetUserInfo from '../../services/useGetUserInfo';

const Container = styled.div``;

const UserInfo = styled.div`
  font-size: 12px;
  border-radius: 5px;
  padding: 5px 6px 7px 7px;
  background-color: #d9eaf7;
  display: flex;
  flex-direction: column;
  .user-action-time {
  }

  span {
    color: hsl(210, 8%, 40%);
  }
`;

const UserActionTime = styled.div`
  margin: 1px 0 4px 0;
  .postedtime {
    margin-left: 4px;
  }
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserDetails = styled.div`
  margin-left: 8px;
  font-size: 12px;
  .user-name {
  }
  .flair {
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    gap: 4px;
    > .goldBadge::before {
      content: '●';
      font-size: 10px;
      color: gold;
      padding-top: 3px;
      margin-right: 3px;
    }
    .goldBadge {
      display: flex;
      flex-direction: row;
    }
    > .silverBadge::before {
      content: '●';
      font-size: 10px;
      color: silver;
      padding-top: 3px;
      margin-right: 3px;
    }
    .silverBadge {
      display: flex;
      flex-direction: row;
    }
    > .copperBadge::before {
      content: '●';
      font-size: 10px;
      color: #d1a684;
      padding-top: 3px;
      margin-right: 3px;
    }
    .copperBadge {
      display: flex;
      flex-direction: row;
    }
  }
`;

function PostWriter({ question }) {
  const askedAt = new Date(Date.parse(question.createdAt)).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });
  return (
    <Container>
      <UserInfo>
        <UserActionTime>
          <span>asked</span>
          <span title="2023-04-23 04:48:13Z" className="postedtime">
            {askedAt}
          </span>
        </UserActionTime>
        <UserWrap>
          <UserAvatar>
            <img
              src="https://www.gravatar.com/avatar/741bc7bd7d33891f99a5de08d73c66b2?s=64&d=identicon&r=PG&f=1"
              alt="dummy-avatar"
              width="32"
              height="32"
              className="avatar-pic"
            />
          </UserAvatar>
          <UserDetails>
            <a className="user-name" href="/">
              {question.writtenBy}
            </a>
            <div className="flair">
              <span>4,379</span>
              <span className="goldBadge">3</span>
              <span className="silverBadge">3</span>
              <span className="copperBadge">3</span>
            </div>
          </UserDetails>
        </UserWrap>
      </UserInfo>
    </Container>
  );
}

export default PostWriter;
