import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import ReadingTime from '../ReadingTime/ReadingTime';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const markAsReadHandel = () => {

    }
    return (
        <div className='blog-container'>
            <div >
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>

            <div>
                <div>
                    <ReadingTime time={blogs}></ReadingTime>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;