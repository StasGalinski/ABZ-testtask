import PostRequestPart from './components/PostRequestPart';
import Wellcome from './components/Wellcome';
import GetRequestPart from './components/GetRequestPart';

import './App.css';
import Header from './components/Header';
import {useDispatch,useSelector} from 'react-redux'
import { tokenActions } from './store';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const tokenExpiration = useSelector(state=>state.expirationTime);
  
  useEffect(()=>{
    const currentTime = new Date().getTime();
    let timer;
    if(tokenExpiration>currentTime){
      timer = setTimeout(()=>{
        dispatch(tokenActions.removeToken());
      },tokenExpiration-currentTime);
    }
    return ()=>{
      clearTimeout(timer);
    }
  },[tokenExpiration,dispatch]);
  return (
    <div className="App">
      <Header/>
      <Wellcome />
      <GetRequestPart />
      <PostRequestPart />
    </div>
  );
}

export default App;
