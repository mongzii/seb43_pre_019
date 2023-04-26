import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 126px;
  margin-right: 32px;
  /* position: sticky;
  top: 64px; */
  button {
    background-color: white;
    padding: 6px 48px 6px 12px;
    border: none;
    border-radius: 30px;
    text-align: left;
    :hover {
      background-color: #e3e6e8;
    }
  }
`;

function NavButtons() {
  return (
    <Container>
      <button>Summary</button>
      <button>Answers</button>
      <button>Questions</button>
      <button>Tags</button>
      <button>Articles</button>
      <button>Badges</button>
      <button>Following</button>
      <button>Bounties</button>
      <button>Reputation</button>
      <button>All actions</button>
      <button>Responses</button>
      <button>Votes</button>
    </Container>
  );
}

export default NavButtons;
