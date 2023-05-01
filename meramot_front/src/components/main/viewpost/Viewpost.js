import React from 'react'
import { Link } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { History } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import './Viewpost.css'

function Viewpost() {

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
          <h2 className='main-question'>Question Title</h2>
          {/* For making a new post  */}
          <Link to='/user/create-post'>
            <button>Ask Question</button>
          </Link>
        </div>

        <div className='main-desc'>
          <div className='info'>
            <p>
              Asked <span>today</span>
            </p>
            <p>
              Active <span>today</span>
            </p>
            <p>
              Viewed <span>69 times</span>
            </p>
          </div>
        </div>

        {/*Post Description*/}
        <div className='posts'>
          <div className='post'>
            <div className='all-posts'>
              <div className='all-posts-container'>

                <div className='all-posts-left'>
                  <div className='all-options'>
                    <p className="arrow">▲</p>
                    <p className="arrow">0</p>
                    <p className="arrow">▼</p>
                    <BookmarkIcon />
                    <History />
                  </div>
                </div>

                <div className='post-body'>
                  <div style={{ width: "90%" }}>
                    <div>
                      Let's say you are creating an interactive tutorial in which your user is dragging and dropping DOM elements from a pallete onto a canvas. Behind the scenes you create a SPAN with createElement; add some text to it using createTextNode and appendChild; and add a class using classList.add(). Now you want to show your user what the element would look like in the HTML markup if the page were to be rendered. But you want to do this before the page is rendered. How, in the year 2023 in modern browsers, would you serialize the element to display the markup for examination before the page is rendered?
                    </div>
                  </div>
                  <div className='author'>
                    <div className='author-details'>
                      <Avatar /><p>Author Name</p>
                    </div>
                    <small>Timestamp</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Solutions */}
        <div className='posts'>
          <p>69 Answers</p>
          <div className='post'>
            <div className='all-posts'>
              <div className='all-posts-container'>

                <div className='all-posts-left'>
                  <div className='all-options'>
                    <p className="arrow">▲</p>
                    <p className="arrow">0</p>
                    <p className="arrow">▼</p>
                    <BookmarkIcon />
                    <History />
                  </div>
                </div>

                <div className='post-body'>
                  <div style={{ width: "90%" }}>
                    <div>
                      Let's say you are creating an interactive tutorial in which your user is dragging and dropping DOM elements from a pallete onto a canvas. Behind the scenes you create a SPAN with createElement; add some text to it using createTextNode and appendChild; and add a class using classList.add(). Now you want to show your user what the element would look like in the HTML markup if the page were to be rendered. But you want to do this before the page is rendered. How, in the year 2023 in modern browsers, would you serialize the element to display the markup for examination before the page is rendered?
                    </div>
                  </div>
                  <div className='author'>
                    <div className='author-details'>
                      <Avatar /><p>Hasnain Heickel</p>
                    </div>
                    <small>Timestamp</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='main-answer'>
        <h3 style={{fontSize: "22px", margin: "10px 0", fontWeight: "400",}}>
          Post an Answer
        </h3>
        <ReactQuill
          className='react-quill'
          theme='snow'
          style={{ height: "200px"}}/>
        <button>Post Your Answer</button>
      </div>
    </div>
  );
}

export default Viewpost