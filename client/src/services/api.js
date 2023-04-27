import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const QUESTIONS_URL = 'http://localhost:3000/questions/';
// const ACCESS_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0OTkzMjYsImV4cCI6MTY4MjU0MjUyNn0.fe-p1nJbaN8hnKAQ50aecdWUFgcFOlAz_8YTmX0e_EA';
// const REFRESH_TOKEN = '';

export const axiosCreate = (url, data, accessToken, refreshToken) => {
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      Authorization: accessToken,
      Refresh: refreshToken,
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

export const axiosCreateAnswer = (url, data, id, accessToken, refreshToken) => {
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      Authorization: accessToken,
      Refresh: refreshToken,
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

export const axiosDelete = (url, accessToken, refreshToken) => {
  axios(url, {
    method: 'DELETE',
    headers: {
      Authorization: accessToken,
      Refresh: refreshToken,
    },
  })
    .then(() => {
      window.location.href = QUESTIONS_URL;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosDeleteAnswer = (url, id, accessToken, refreshToken) => {
  axios(url, {
    method: 'DELETE',
    headers: {
      Authorization: accessToken,
      Refresh: refreshToken,
    },
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosDeleteComment = (url, id, accessToken, refreshToken) => {
  axios(url, {
    method: 'DELETE',
    headers: {
      Authorization: accessToken,
      Refresh: refreshToken,
    },
  })
    .then(() => {
      window.location.href = `${QUESTIONS_URL}${id}`;
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const axiosPatch = (url, data, id, accessToken, refreshToken) => {
  axios(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      Authorization: accessToken,
      Refresh: refreshToken,
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
