import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
    const { coverImg, authorImg, authorName, publishDate, readTime, blogTitle, keyWord } = props.blog;
    const markAsReadHandel = props.markAsReadHandel;
    const bookmarkHandle = props.bookmarkHandle;
    return (
        <div className='blog'>
            <img className='cover-img' src={coverImg} alt="" />
            <div className='info-container'>
                <div className='author-info-container'>
                    <img className='author-img' src={authorImg} alt="" />
                    <div>
                        <h3>{authorName}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{readTime} min read <button onClick={() => bookmarkHandle(blogTitle)}><FontAwesomeIcon icon={faBookmark} /></button> </p>
            </div>
            <h2>{blogTitle}</h2>
            <p>{keyWord}</p>
            <u className='marked-read-btn' onClick={() => markAsReadHandel(readTime)}>Mark as read</u>

        </div>
    );
};

export default Blog;