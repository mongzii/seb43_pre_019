import styled from 'styled-components';

import { ReactComponent as SreIcon } from '../../assets/sre.svg';
import { ReactComponent as EarnIcon } from '../../assets/earn.svg';
import { ReactComponent as MeasureIcon } from '../../assets/measure.svg';
import { ReactComponent as StackOverFlowIcon } from '../../assets/logo-stackof.svg';
import { ReactComponent as PostsIcon } from '../../assets/mypage-proflie-post.svg';

const Container = styled.div`
  display: flex;
`;

const LeftInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 736px;
  margin: 12px;
`;

const StatsBox = styled.div`
  p {
    margin-bottom: 8px;
    font-size: 21px;
  }
`;

const StatInnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 219px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 12px;
`;

const StatOne = styled.div`
  width: 50%;
  font-size: 17px;
  .fontsize {
    font-size: 13px;
  }
`;

const StatTwo = styled.div`
  width: 50%;
  .fontsize {
    font-size: 13px;
  }
`;

const StatThree = styled.div`
  width: 50%;
  .fontsize {
    font-size: 13px;
  }
`;

const StatFour = styled.div`
  width: 50%;
  .fontsize {
    font-size: 13px;
  }
`;

const CommunityBox = styled.div`
  margin: 20px 32px 0px 0px;
  p {
    margin-bottom: 8px;
    font-size: 21px;
  }
`;

const CommunityInnerBox = styled.div`
  border: 1px solid lightgray;
  width: 219px;
  height: 55px;
  padding: 12px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 13px;
  color: #0074cc;
  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
`;

const RightInner = styled.div`
  margin: 12px;
`;

const AboutBox = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 21px;
  }
`;

const AboutBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 782px;
  height: 100px;
  margin-top: 10px;
  padding: 32px;
  font-size: 13px;
  color: #6a737c;
  background-color: #f8f9f9;
`;

const BadgesBox = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 21px;
  }
`;

const BadgesBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 782px;
  height: 83px;
  margin-top: 10px;
  padding: 32px;
  font-size: 13px;
  color: #6a737c;
  background-color: #f8f9f9;
`;

const PostsBox = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 21px;
  }
`;

const PostsBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 782px;
  height: 398px;
  margin-top: 10px;
  padding: 32px;
  font-size: 13px;
  color: #6a737c;
  background-color: #f8f9f9;
`;

function UserProfile() {
  return (
    <Container>
      <LeftInner>
        <StatsBox>
          <p>Stats</p>
          <StatInnerBox>
            <StatOne>
              <p>1</p>
              <p className="fontsize">reputation</p>
            </StatOne>
            <StatTwo>
              <p>0</p>
              <p className="fontsize">reached</p>
            </StatTwo>
            <StatThree>
              <p>0</p>
              <p className="fontsize">answers</p>
            </StatThree>
            <StatFour>
              <p>0</p>
              <p className="fontsize">questions</p>
            </StatFour>
          </StatInnerBox>
        </StatsBox>
        <CommunityBox>
          <p>Communities</p>
          <CommunityInnerBox>
            <StackOverFlowIcon />
            Stack Overflow
          </CommunityInnerBox>
        </CommunityBox>
      </LeftInner>
      <RightInner>
        <AboutBox>
          <p>About</p>
          <AboutBoxInner>
            Your about me section is currently blank. Would you <br />
            like to add one? Edit profile
          </AboutBoxInner>
        </AboutBox>
        <BadgesBox>
          <p>Badges</p>
          <BadgesBoxInner>You have not earned any badges.</BadgesBoxInner>
        </BadgesBox>
        <PostsBox>
          <p>Posts</p>
          <PostsBoxInner>
            <PostsIcon />
            Just getting started? Try answering a question! <br />
            Your most helpful questions, answers and tags will appear here. Start
            <br /> by answering a question or selecting tags that match topics you’re
            <br />
            interested in.
          </PostsBoxInner>
        </PostsBox>
      </RightInner>
    </Container>
  );
}

export default UserProfile;
