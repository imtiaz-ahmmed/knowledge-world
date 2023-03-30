import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import ReadingTime from '../ReadingTime/ReadingTime';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [readTime, setReadTime] = useState(" ");

    const markAsReadHandel = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        if (previousReadTime) {
            const totalTime = previousReadTime + time;
            localStorage.setItem("readTime", totalTime);
            setReadTime(totalTime);
        }
        else {
            localStorage.setItem("readTime", time);
            setReadTime(time);
        }

    }
    return (
        <div className='blog-container'>
            <div >
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        markAsReadHandel={markAsReadHandel}
                    ></Blog>)
                }
            </div>

            <div className='bookmarked-section'>
                <div>
                    <ReadingTime readTime={readTime}></ReadingTime>
                </div>
                <div>
                    <Bookmark ></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Blogs;