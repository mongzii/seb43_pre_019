import styled from 'styled-components';

import { ReactComponent as SreIcon } from '../../assets/sre.svg';
import { ReactComponent as EarnIcon } from '../../assets/earn.svg';
import { ReactComponent as MeasureIcon } from '../../assets/measure.svg';

const Container = styled.div`
  /* width: */
  display: flex;
`;

const LeftInner = styled.div`
  /* width: */
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 736px;
  margin: 12px;
`;

const RightInner = styled.div`
  /* width: */
`;

const StatsBox = styled.div`
  margin-right: 32px;
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
  padding: 12px; //주석
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
  /* width: */
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
          <div>Stack Overflow</div>
        </CommunityBox>
      </LeftInner>
      <RightInner>
        <div>
          <p>About</p>
          <div>Your</div>
        </div>
        <div>
          <p>Badges</p>
          <div>You hava</div>
        </div>
        <div>
          <p>Posts</p>
          <div>Just</div>
        </div>
      </RightInner>
    </Container>
  );
}

export default UserProfile;
