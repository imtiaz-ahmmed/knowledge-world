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

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(storedBookmarks);
    }, []);

    const bookmarkHandle = (title) => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        const updatedBookmarks = [...storedBookmarks, title];
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
    };

    return (
        <div className='blog-container'>
            <div>
                {blogs.map(blog => (
                    <Blog
                        key={blog.id}
                        blog={blog}
                        markAsReadHandel={markAsReadHandel}
                        bookmarkHandle={bookmarkHandle}
                    />
                ))}
            </div>

            <div className='bookmarked-section'>
                <div>
                    <ReadingTime readTime={readTime} />
                </div>
                <div>
                    <Bookmark bookmarks={bookmarks} />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
