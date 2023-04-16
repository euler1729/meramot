import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component';
import './CreatePost.css';

function CreatePost() {
    const [tags, setTags] = useState([]);
    const handleChange = (newTags) => {
        setTags(newTags);
    }
    return (
        <div className='create-post'>
            <div className='create-post-container'>

                {/* POST TITLE */}
                <div className='head-title'>
                    <h1>Post a Problem</h1>
                </div>
                {/* POST CONTAINER */}
                <div className='post-container'>
                    <div className='post-options'>

                        {/* POST TITLE*/}
                        <div className='post-option'>
                            <div className='title'>
                                <div className='title-config'>
                                    <div>
                                        <h3>Title</h3>
                                        <small>Be specific and imaging you're asking a question to another person</small>
                                    </div>
                                    {/* POST BUTTON */}
                                    <button className='button'>POST</button>
                                </div>
                                <input
                                    type='text'
                                    placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                                />
                            </div>

                        </div>

                        {/* POST BODY */}
                        <div className='post-option'>
                            <div className='title'>
                                <h3>Body</h3>
                                <small>Include all the information someone would need to solve your problem</small>
                                <ReactQuill
                                    className='react-quill'
                                    theme='snow'
                                />
                            </div>
                        </div>

                        {/* POST TAGS */}
                        <div className='post-option'>
                            <div className='title'>
                                <h3>Tags</h3>
                                <small>Add Tags to categorize your problem</small>
                                <TagsInput value={tags || []} onChange={handleChange} />
                                {tags && tags.map((tag, index) => (<span key={index}>{tag.text}</span>))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreatePost