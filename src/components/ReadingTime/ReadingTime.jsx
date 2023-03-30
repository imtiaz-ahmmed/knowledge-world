import React, { useEffect, useState } from 'react';
import './ReadingTime.css'

const ReadingTime = ({ readTime }) => {
    const [updatedTime, setUpdatedTime] = useState(readTime);
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setUpdatedTime(getReadTime);
    }, [readTime])



    return (
        <div className='time-show-container'>
            <h2>Spent time on read : {updatedTime ? updatedTime : 0} min</h2>
        </div>
    );
};

export default ReadingTime;