import PostRequestPart from './components/PostRequestPart';
import Wellcome from './components/Wellcome';
import GetRequestPart from './components/GetRequestPart';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
function App() {
  const [page,setPage] = useState(1)
  const [tokenId, setTokenId] = useState(null);
  const [tokenExpDate, setTokenExpDate] = useState(null);

  const changePageHandler =()=>{
      setPage(prev=>prev+1)
  }

  const setTokenHandler = () => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTokenId(data.token)
          setTokenExpDate(new Date().getTime() + 2400000);
        }
        console.log('tokken added');
      })
  }
  const removeTokenHandler=()=>{
    setTokenId(null);
    setTokenExpDate(null);
    console.log('token removed')
    setPage(prev=> 1);
  }

  return (
    <div className="App">
      <Header token={tokenId} signInHandler={setTokenHandler} />
      <Wellcome token={tokenId} signInHandler={setTokenHandler} />
      <GetRequestPart changePage ={changePageHandler}page={page} />
      <PostRequestPart token={tokenId} removeToken={removeTokenHandler}/>
    </div>
  );
}

export default App;
