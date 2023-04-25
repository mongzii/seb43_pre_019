import styled from 'styled-components';

const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  > input {
    height: 30px;
  }
  > textarea {
    height: 200px;
  }

  /* > button {
    margin-top: 20px;
    width: 80px;
  } */
  .form-submit {
    padding: 10px 0 15px 0;
  }
`;

export default StyledInputForm;
