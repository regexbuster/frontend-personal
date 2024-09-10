'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './blogid.page.module.css';

function BlogDataGetter({ id }) {
    const [blogData, setBlogData] = useState({});

    useEffect(() => {
        axios.get(`/api/posts?ID=${id}`).then((res) => {
            setBlogData(res.data.posts[0]);
        });
    }, []);

    return (
        <div className={styles.blogContent}>
            <h1>{blogData.title}</h1>
            <blockquote>{`> ${blogData.description}`}</blockquote>
            <p>{blogData.content}</p>
        </div>
    );
}

export default BlogDataGetter;
