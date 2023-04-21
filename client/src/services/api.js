import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const QUESTIONS_URL = 'http://localhost:3000/questions/';

export const axiosCreate = (url, data) => {
  console.log(url, data);
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'ngrok-skip-browser-warning': '임의의 값',
    },
    data: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = QUESTIONS_URL;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosCreateAnswer = (url, data, id) => {
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'ngrok-skip-browser-warning': '임의의 값',
    },
    data: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosDelete = url => {
  axios(url, {
    method: 'DELETE',
  })
    .then(() => {
      window.location.href = QUESTIONS_URL;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosPatch = (url, data, id) => {
  axios(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
    })
    .catch(error => {
      console.error('Error', error);
    });
};
