import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  button {
    cursor: pointer;
    border: none;
    padding: 7px 10px;
    margin: 0px 10px;
    background-color: white;
    :hover {
      border-radius: 50px;
      background-color: #e3e6e8;
    }
    /* :active {
      border-radius: 50px;
      background-color: #f48225;
      color: white;
      font-weight: bold;
    } */
  }
`;

function OrangeButtons() {
  return (
    <Container>
      <button>Profile</button>
      <button>Activity</button>
      <button>Saves</button>
      <button>Settings</button>
    </Container>
  );
}

export default OrangeButtons;
