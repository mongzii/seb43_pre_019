import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const QUESTIONS_URL = 'http://localhost:3000/questions/';

export const axiosCreate = (url, data) => {
  axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': '69420',
      // 유저의 토큰 값
      // 주석ㅁㄴㅇㅁㄴㅇ
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
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
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
    },
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
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
    },
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
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
    },
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

      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI0ODg0MzUsImV4cCI6MTY4MjQ5MDIzNX0.Mpp44hYYcY3o3ESAW1GYwXBJIcuMmVAp3mp8-FT9ybs',
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
