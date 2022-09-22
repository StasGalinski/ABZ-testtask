import PostRequestPart from './components/PostRequestPart';
import Wellcome from './components/Wellcome';
import GetRequestPart from './components/GetRequestPart';
import { useState ,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
function App() {
  const [page, setPage] = useState(1)
  const [tokenId, setTokenId] = useState(null);
  const [tokenExpDate, setTokenExpDate] = useState(null);

  const changePageHandler = () => {
    setPage(prev => prev + 1);
  }
  const setTokenHandler = () => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTokenId(data.token);
          const tokenExpDate = new Date().getTime() + 2400000;
          setTokenExpDate(tokenExpDate);
          localStorage.setItem('token',data.token);
          localStorage.setItem('tokenExpirationDate',tokenExpDate)
        }
        console.log('tokken added');
      })
  }
  const removeTokenHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    setTokenId(null);
    setTokenExpDate(null);
    setPage(prev => 1);
    console.log('token removed')
  }
  useEffect(()=>{
    const currentTime = new Date().getTime();
    let timer;
    if(tokenId&&tokenExpDate>currentTime){
       timer = setTimeout(()=>{
        removeTokenHandler();
      },tokenExpDate-currentTime);
    }
    return ()=>{
      if(timer){
        clearTimeout(timer);
      }
    }
  },[tokenExpDate,tokenId])
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(localStorage.getItem('token')){
        console.log('token is Set from localstorage')
        setTokenId(localStorage.getItem('token'))
        setTokenExpDate(localStorage.getItem('tokenExpirationDate'))
      }
    },300)
    return ()=>{
      clearTimeout(timer);
    }
  },[])

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
