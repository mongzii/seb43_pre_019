import styled from 'styled-components';

const AnswersSort = styled.div`
  display: flex;
  gap: 4px 4px;
  font-size: 14px;
`;
const AnswersSortBox = styled.div``;

function AnswerSort() {
  return (
    <AnswersSort>
      <div>Sorted by: </div>
      <AnswersSortBox>
        <select>
          <option>Highest score (default)</option>
          <option>Trending (recent votes count more)</option>
          <option>Date modified (newest first)</option>
          <option>Date created (oldest first)</option>
        </select>
      </AnswersSortBox>
    </AnswersSort>
  );
}

export default AnswerSort;
