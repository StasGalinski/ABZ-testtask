import { useState, useEffect, useCallback } from 'react';

import PostRequestPart from './components/PostRequestPart';
import Wellcome from './components/Wellcome';
import GetRequestPart from './components/GetRequestPart';

import './App.css';
import Header from './components/Header';
function App() {
  const [page, setPage] = useState({ pageNumber: 1 });
  const [tokenId, setTokenId] = useState(localStorage.getItem('token'));
  const [tokenExpDate, setTokenExpDate] = useState(localStorage.getItem('tokenExpirationDate'));

  const changePageHandler = () => {
    setPage(prev => ({ pageNumber: prev.pageNumber + 1 }));
  }

  const setTokenHandler = () => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTokenId(data.token);
          const tokenExpDate = new Date().getTime() + 2400000;
          setTokenExpDate(tokenExpDate);
          localStorage.setItem('token', data.token);
          localStorage.setItem('tokenExpirationDate', tokenExpDate);
        }
      })
  }
  const removeTokenHandler = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    setTokenId(null);
    setTokenExpDate(null);
    setPage(prev => ({ pageNumber: 1 }));
  }, [])

  useEffect(() => {
    const currentTime = new Date().getTime();
    let timer;
    if (tokenId && tokenExpDate > currentTime) {
      timer = setTimeout(() => {
        removeTokenHandler();
      }, tokenExpDate - currentTime);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [tokenExpDate, tokenId, removeTokenHandler])
  return (
    <div className="App">
      <Header token={tokenId} signInHandler={setTokenHandler} />
      <Wellcome token={tokenId} signInHandler={setTokenHandler} />
      <GetRequestPart changePage={changePageHandler} page={page} />
      <PostRequestPart token={tokenId} removeToken={removeTokenHandler} />
    </div>
  );
}

export default App;
