'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './blogid.page.module.css';

function BlogDataGetter({ id }) {
    const [blogData, setBlogData] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/${id}`).then((res) => {
            setBlogData(res.data);
        });
        axios.get('/api/posts').then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <div className={styles.blogContent}>
            <h1>{blogData.title}</h1>
            <p>{blogData.body}</p>
        </div>
    );
}

export default BlogDataGetter;
