import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = url => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // ngrok 으로 데이터 받을 때 browser warning 스킵
        'ngrok-skip-browser-warning': '69420',
      },
    })
      .then(response => {
        setQuestions(response.data);
        // response.data는 불러와지는데
        // response.data.answers가 안 불러와진다??
        // 나랑 장난쳐?
        // 알고 있으면서 모른 척을 해?
        // 하 나..

        console.log(response.data.answers);
        setAnswers(response.data.answers);
      })
      .catch(err => setError(err.message));
  }, [url]);

  return [questions, setQuestions, answers, setAnswers, error];
};

export default useAxios;
