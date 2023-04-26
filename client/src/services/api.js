import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const QUESTIONS_URL = 'http://localhost:3000/questions/';

export const axiosCreate = (url, data) => {
  console.log(data);
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
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
      'ngrok-skip-browser-warning': '69420',
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

export const axiosDeleteAnswer = (url, id) => {
  axios(url, {
    method: 'DELETE',
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosDeleteComment = (url, id) => {
  axios(url, {
    method: 'DELETE',
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
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
      'ngrok-skip-browser-warning': '69420',
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
