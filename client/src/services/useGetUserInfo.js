import { useEffect, useState } from 'react';
import axios from 'axios';

const accessToken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoic29vbWFuMzM0QGdtYWlsLmNvbSIsInN1YiI6InNvb21hbjMzNEBnbWFpbC5jb20iLCJpYXQiOjE2ODI1NzI0MzQsImV4cCI6MTY4MjYxNTYzNH0.dmKr38kmkVVB8vmmiUoodWoWOcfxa0uHOw4k_spMs54';
const refreshToken = localStorage.getItem('refreshToken');
const useGetUserInfo = url => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // ngrok 으로 데이터 받을 때 browser warning 스킵
        'ngrok-skip-browser-warning': '69420',
        Authorization: accessToken,
        Refresh: refreshToken,
      },
    })
      .then(response => {
        // console.log(response.data);
        setUserInfo(response.data);
      })
      .catch(err => setError(err.message));
  }, [url]);

  return { userInfo, error };
};

export default useGetUserInfo;
