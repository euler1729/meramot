import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Posts from './components/main/posts/index';
import CreatePost from './components/main/createpost/CreatePost';
import Viewpost from './components/main/viewpost/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Posts/>} />
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/view-post' element={<Viewpost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
