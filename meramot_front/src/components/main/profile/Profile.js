import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserProfile from 'react-user-profile';
import { selectUser } from '../../../app/userSlice';
import axios from 'axios';

function Profile() {
  const user = useSelector(selectUser);
  const [data, setData] = useState({});
  const location = 'Dhaka, BD'

  // const comments = [
  //   {
  //     id: '1',
  //     photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
  //     userName: 'Mike Ross',
  //     content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
  //     createdAt: 1543858000000
  //   }
  // ]
  useEffect(() => {
    axios.post('http://localhost:8000/auth/profile', { uid: user.id })
      .then((response) => {
          console.log(response.data);
          setData(response.data)
      }).catch(err=>{
        console.log(err);
      })
  }, []);

  return (
    <div style={{ margin: '0 auto', width: '100%' }}>
      <UserProfile photo={user.photoURL}
        userName={user.name}
        location={location}
        initialLikesCount={data.voteCnt}
        // initialFollowingCount={723}
        // initialFollowersCount={4433}
        initialComments={data.comments} />
    </div>
  )
}

export default Profile;