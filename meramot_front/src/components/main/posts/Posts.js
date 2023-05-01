import { FilterList } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';
import AllPosts from './AllPosts';
import axios from 'axios';


function Posts() {

    axios.post('http://localhost:8000/api/create-post', {})
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });


    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-top'>
                    <h2>All Questions</h2>
                    {/* For making a new post  */}
                    <Link to='/user/create-post'>
                        <button>Ask Question</button>
                    </Link>
                </div>


                {/* for sorting and filtering posts*/}
                <div className='main-desc'>
                    <p>Number of Question </p>
                    <div className='main-filter'>
                        <div className='main-tabs'>
                            {/* for newest posts */}
                            <div className='main-tab'>
                                <Link>Newest</Link>
                            </div>
                            {/* for most active posts */}
                            <div className='main-tab'>
                                <Link>Active</Link>
                            </div>
                            {/* for more posts */}
                            <div className='main-tab'>
                                <Link>More</Link>
                            </div>
                        </div>
                        {/* for filtering posts */}
                        <div className='main-filter-item'>
                            <FilterList />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>

                {/* All Posts will replace it with a map function for returned post data from api */}
                {/*All post indicates posts by all users */}
                <div className='posts'>
                    <div className='post'>
                        <AllPosts />
                        <AllPosts />
                        <AllPosts />
                        <AllPosts />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Posts