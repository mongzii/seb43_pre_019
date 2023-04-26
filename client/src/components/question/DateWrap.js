import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;
  border-bottom: 1px solid hsl(210, 8%, 75%);
  padding-bottom: 10px;
  margin-bottom: 20px;
  > * {
    display: flex;
    flex-direction: row;
    gap: 5px;
    span {
      color: hsl(210, 8%, 40%);
    }
  }
`;

const AskedDate = styled.div``;
const ModifiedDate = styled.div``;
const ViewedCount = styled.div``;

function DateWrap() {
  return (
    <Container>
      <AskedDate>
        <span>Asked</span>
        <div>2 days ago</div>
      </AskedDate>
      <ModifiedDate>
        <span>Modified</span>
        <div>today</div>
      </ModifiedDate>
      <ViewedCount>
        <span>Viewed</span>
        <div>25 times</div>
      </ViewedCount>
    </Container>
  );
}

export default DateWrap;
