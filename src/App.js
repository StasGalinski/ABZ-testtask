import PostRequestPart from './components/PostRequestPart';
import Wellcome from './components/Wellcome';
import GetRequestPart from './components/GetRequestPart';

import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Wellcome />
      <GetRequestPart />
      <PostRequestPart />
    </div>
  );
}

export default App;
