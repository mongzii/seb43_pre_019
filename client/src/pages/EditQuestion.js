import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import useAxios from '../services/useAxios';
import { axiosPatch } from '../services/api';
import useInput from '../services/useInput';
import StyledList from '../styles/StyledList';
import { Input } from '../components/Input';

import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';

// 이걸 불러오기만 해도 하이라이팅이 됨
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';

function EditQuestion() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { id } = useParams();
  const [question] = useAxios(`${devUrl}/questions/${id}`);
  const [questionData, setQuestionData] = useState(null);
  const [content, setContent] = useState('');
  const editorRef = useRef();
  const titleBind = useInput('');

  // undefined 방지
  useEffect(() => {
    setQuestionData(question);
  }, [question]);

  // content 업데이트
  useEffect(() => {
    if (questionData) setContent(` ${questionData.body}`);
  }, [questionData]);

  // console.log(content);

  // questionData 값이 변경될 때마다 Editor 컴포넌트의 setHTML 메서드를 호출해
  // initialValue 값 업데이트
  useEffect(() => {
    if (editorRef.current && questionData) {
      const editor = editorRef.current.getInstance();
      // 에디터 초기값 설정
      editor.setHTML(`${questionData.body}`);
    }
    // 처음 한 번만 설정해준다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionData]);

  // 생각해보니 edit 할 때는 editor에 body와 details가 합쳐진 형태가 들어간다.
  // 그러므로, post할 때 프론트에서 body와 details를 합쳐서 보내고,
  // back에서는 body만 응답으로 보내줘야 한다.

  const handleSubmit = e => {
    e.preventDefault();
    const value = editorRef.current?.getInstance().getHTML();
    const editedData = {
      title: titleBind.curValue,
      body: value,
    };
    axiosPatch(`${devUrl}/questions/${id}`, editedData, id);
  };

  return (
    <StyledInputForm onSubmit={handleSubmit}>
      <StyledList>
        <h2>Title</h2>
        {questionData && <Input value={titleBind} onChange={titleBind.onChange} />}

        {content && (
          <Editor
            ref={editorRef}
            plugins={[codeSyntaxHighlight]}
            /*
              initialValue에 content를 넣어놓으면
              밑에서 setContent를 할 때마다 initialValue가 바뀌기 때문에
              로직이 꼬인다. 무한 입력 가능성 존재
              그러므로 initialValue를 비워두고,
              useEffect를 이용해 setHTML로 원하는 비동기 데이터를 넣어준다. 
            */
            initialValue=""
            onChange={() => {
              setContent(editorRef.current.getInstance().getHTML().toString());
            }}
            previewStyle="tab"
            height="300px"
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock'],
            ]}
          />
        )}
      </StyledList>
      <MarkdownViewer content={content} />
      <button type="submit">submit</button>
    </StyledInputForm>
  );
}

export default EditQuestion;
