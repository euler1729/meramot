import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Posts from './components/main/posts/index';
import CreatePost from './components/main/createpost/CreatePost';
import Viewpost from './components/main/viewpost/index';
import Auth from './components/auth/Auth';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import PrivateRoute from './private/PrivateRoute';
import Chat from './components/chat/Chat';
import Footer from './components/footer/Footer';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          email: authUser.email,
          uid: authUser.uid,
          displayName: authUser.displayName,
          photoUrl: authUser.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/*Root Route - open for all*/}
          <Route exact path='/' element={<Posts />} />

          {/*Auth Route - open for all for Authenticating*/}
          <Route exact path='/auth' element={<Auth />} />

          <Route exact path='/view-post' element={<Viewpost />} />

          {/*User Route - open for only logged in users*/}
          <Route exact path='/user' element={<PrivateRoute />}>
            <Route exact path='/user/create-post' element={<CreatePost />} />
          </Route>
        </Routes>
        <Chat />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
