import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


function App() {
  // eslint-disable-next-line
  const user = useSelector(selectUser);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const loginApiCall = async (usr) => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login', usr);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const dataa = await loginApiCall({ email: authUser.email, password: "fadfasd" });
        setData(dataa);
        const userr = {
          email: authUser.email,
          uid: authUser.uid,
          name: authUser.displayName,
          photoUrl: authUser.photoURL,
          id: dataa.id,
          role: dataa.role,
        };
        console.log(userr);
        dispatch(login(userr));
      } else {
        dispatch(logout());
      }
    });
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
