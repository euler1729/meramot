import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './AllPosts.css';

function AllPosts() {
  return (
    <div className='all-posts'>
        <div className='all-posts-container'>
            <div className='all-posts-left'>
                <div className='all-options'>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='all-option'>
                        <small>0 Votes</small>
                    </div>
                </div>
                
            </div>
            <div className='post-body'>
                <Link to='/view-post'>How to get the complete markup for a DOM element you've created in javascript including any classes added to classList?</Link>
                <div style={{width:"90%"}}>
                    <div>
                        Let's say you are creating an interactive tutorial in which your user is dragging and dropping DOM elements from a pallete onto a canvas. Behind the scenes you create a SPAN with createElement; add some text to it using createTextNode and appendChild; and add a class using classList.add(). Now you want to show your user what the element would look like in the HTML markup if the page were to be rendered. But you want to do this before the page is rendered. How, in the year 2023 in modern browsers, would you serialize the element to display the markup for examination before the page is rendered?
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <span className='post-tags'>javascript</span>
                    <span className='post-tags'>serialization</span>
                    <span className='post-tags'>dom-element</span>
                </div>
                <div className='author'>
                    <div className='author-details'>
                        <Avatar/><p>Author Name</p>
                    </div>
                    <small>Timestamp</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllPosts