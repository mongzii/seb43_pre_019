import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useInput from '../services/useInput';
import { axiosCreate } from '../services/api';
import { Input, MarkDown } from '../components/feat/Input';

const StyledInputForm = styled.form`
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
  width: 100%;

  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  > textarea {
    height: 200px;
  }
`;

const ReviewNotice = styled.div`
  h1 {
    margin: 24px 0 24px 0;
    font-size: 26px;
    font-weight: 600;
  }
  .ai-center {
    margin: 16px 0 24px 0;
    .notice-box {
      padding: 16px;
      background-color: #ebf4fb;
      border: 1px solid #aed2ee;
      border-radius: 5px;
      font-size: 14px;
    }
  }
`;

const PostTitleOverlay = styled.div`
  padding: 24px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;

  .title-wrap {
    margin: 2px 0 2px 0;
    input {
      height: 30px;
      width: 100%;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      :focus {
        border: 1px solid #59a4de;
      }
    }
  }

  > div {
    font-size: 12px;
    padding: 0 2px 0 2px;
    margin: 2px 0 2px 0;
  }
`;

const BodyEditorContainer = styled.div`
  padding: 24px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
  margin-top: 12px;
  > div {
    font-size: 12px;
    padding: 0 2px 0 2px;
    margin: 2px 0 10px 0;
  }
`;

const DetailsEditorContainer = styled.div`
  padding: 24px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
  margin-top: 12px;
  > div {
    font-size: 12px;
    padding: 0 2px 0 2px;
    margin: 2px 0 10px 0;
  }
`;

const FormSubmit = styled.div`
  margin-top: 12px;
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .discard-button {
    background-color: transparent;
    border: none;
    color: hsl(358, 62%, 47%);
    padding: 10.4px;
    :hover {
      background-color: hsl(358, 75%, 97%);
    }
  }
`;

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;

  border-radius: 5px;
  padding: 12px 10px;
  width: fit-content;
  /* boxshadow & border로 안쪽 입체감 주기 */
  box-shadow: inset 0px 1px 0px 0 #79c1ff;
  border: 1px solid #1e95ff;
  cursor: pointer;

  margin: 0 8px 0 8px;
  :hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

function AskQuestion() {
  const titleBind = useInput('');
  // const bodyBind = useInput("");
  // const detailsBind = useInput("");

  // markdown editor 사용
  // const [bodyValue, setBodyValue] = useState("");
  // const [detailsValue, setDetailsValue] = useState("");

  // markdown editor 사용
  const editorBodyRef = useRef();
  const editorDetailsRef = useRef();

  // token
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken') || '',
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken') || '',
  );

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
    setRefreshToken(localStorage.getItem('refreshToken'));
  }, []);

  // submit question
  const handleSubmit = e => {
    e.preventDefault();
    const bodyValue = editorBodyRef.current?.getInstance().getHTML();
    const detailsValue = editorDetailsRef.current?.getInstance().getHTML();
    // token을 빼내서 들고 있을 수 있다
    const data = {
      title: titleBind.curValue,
      body: `${bodyValue}\n${detailsValue}`,
      details: detailsValue,
    };
    axiosCreate(`/api/questions`, data, accessToken, refreshToken);
  };

  return (
    <StyledInputForm onSubmit={handleSubmit}>
      <ReviewNotice>
        <h1 className="ai-notice">Review your question</h1>
        <div className="ai-center">
          <div className="notice-box">
            <p className="notice-body">
              Please do a final review of your question and then post.
            </p>
          </div>
        </div>
      </ReviewNotice>
      <PostTitleOverlay>
        <div className="title-ph-wrap">
          <h2>Title</h2>
          <div className="title-input-message">
            Be specific and imagine you’re asking a question to another person.
          </div>
        </div>
        <div className="title-wrap">
          <Input value={titleBind} onChange={titleBind.onChange} />
        </div>
      </PostTitleOverlay>
      <BodyEditorContainer>
        <h2>What are the details of your problem?</h2>
        <div className="body-input-message">
          The body of your question contains your problem details and results. Minimum 30
          characters.
        </div>
        {/* <TextArea value={bodyBind} onChange={bodyBind.onChange} /> */}
        <MarkDown editorRef={editorBodyRef} />
      </BodyEditorContainer>
      <DetailsEditorContainer>
        <h2>What did you try and what were you expecting?</h2>
        <div className="details-input-message">
          The body of your question contains your problem details and results. Minimum 30
          characters.
        </div>
        <MarkDown editorRef={editorDetailsRef} />
      </DetailsEditorContainer>
      <FormSubmit>
        <BlueButton type="submit">Post your question</BlueButton>
        <div className="discard-wrap">
          <button className="discard-button">Discard draft</button>
        </div>
      </FormSubmit>
    </StyledInputForm>
  );
}

export default AskQuestion;
