import styled from 'styled-components';

import { ReactComponent as VscTriangleDown } from '../../assets/vsc-triangle-down.svg';
import { ReactComponent as VscTriangleUp } from '../../assets/vsc-triangle-up.svg';
import { ReactComponent as BookMark } from '../../assets/book-mark.svg';
import { ReactComponent as IconHistory } from '../../assets/ic-history.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-right: 20px;

  .saves-btn {
  }

  .post-issue {
    background-color: transparent;
    padding: 4px 0 4px 0;
  }

  .iconArrowUpLg,
  .iconArrowDownLg {
    fill: hsl(210, 8%, 75%);
    cursor: pointer;
  }
  .iconBookmark {
    stroke: hsl(210, 8%, 55%);
    fill: transparent;
    cursor: pointer;
  }

  .iconHistory {
    fill: hsl(210, 8%, 70%);
    cursor: pointer;
    :hover {
      fill: #0a95ff;
    }
  }
`;

const SavesBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 4px 0 4px 0;
`;

function VoteCell() {
  return (
    <Container>
      <VscTriangleUp />
      <div>2</div>
      <VscTriangleDown />
      <SavesBtn>
        <BookMark />
      </SavesBtn>
      <a href="/" className="post-issue">
        <IconHistory />
      </a>
    </Container>
  );
}

export default VoteCell;
