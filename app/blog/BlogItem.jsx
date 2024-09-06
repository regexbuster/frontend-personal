'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import style from './blog.page.module.css';

const BlogLayoutType = {
    LIST: 'list',
    GRID: 'grid',
};

function BlogContainer() {
    const [layoutType, setLayoutType] = useState({
        current: BlogLayoutType.LIST,
        next: BlogLayoutType.GRID,
    });

    const [posts, setPosts] = useState([]);

    const router = useRouter();

    const getPosts = async () => {
        let res = await axios.get('https://dummyjson.com/posts');

        let refinedPosts = res.data.posts.map((post) => {
            return {
                id: post.id,
                title: post.title,
                description: post.body,
                published: Date.now(),
                edited: 0,
            };
        });

        setPosts(refinedPosts);
    };

    useEffect(() => {
        const storedLayout = localStorage.getItem('layout');

        if (storedLayout) {
            const values = Object.values(BlogLayoutType);
            const newIndex = values.indexOf(storedLayout);
            const len = values.length;

            // loop back if we escape layout type length
            const nextIndex = newIndex + 1 >= len ? 0 : newIndex + 1;

            setLayoutType({
                current: values[newIndex],
                next: values[nextIndex],
            });
        }

        getPosts();
    }, []);

    const toggleLayout = () => {
        const values = Object.values(BlogLayoutType);
        const i = values.indexOf(layoutType.current);
        const len = values.length;

        // loop back if we escape layout type length
        const newIndex = i + 1 >= len ? 0 : i + 1;
        const nextIndex = i + 2 >= len ? i + 2 - len : i + 2;

        localStorage.setItem('layout', values[newIndex]);
        setLayoutType({ current: values[newIndex], next: values[nextIndex] });
    };

    const toUpperFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <button onClick={toggleLayout} className={style.toggle}>
                {toUpperFirstLetter(layoutType.next)}
            </button>
            <div
                className={
                    layoutType.current == BlogLayoutType.LIST
                        ? style.bloglistcontainer
                        : style.bloggridcontainer
                }
            >
                {posts.map((post) => {
                    return (
                        <button
                            className={style.buttonWrapper}
                            onClick={() => {
                                router.push(`/blog/${post.id}`);
                            }}
                        >
                            <BlogCard
                                layoutType={layoutType.current}
                                blogData={post}
                                key={post.id}
                            ></BlogCard>
                        </button>
                    );
                })}
            </div>
        </>
    );
}

// blogdata {title: String, description: String, published: Date, edited: Date}
// edited defaults to 0 when not edited
function BlogCard({ layoutType, blogData }) {
    const formattedDate = (dateInt) => {
        let date = new Date(dateInt);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    return (
        <>
            {layoutType === BlogLayoutType.LIST ? (
                <div className={style.bloglistitem}>
                    <p>
                        <strong>{blogData.title}</strong> {' --- '}
                        {formattedDate(blogData.published)}
                    </p>
                </div>
            ) : (
                <div className={style.bloggriditem}>
                    <strong>{blogData.title}</strong>
                    <p>{blogData.description.slice(0, 121) + '...'}</p>
                    <p>{formattedDate(blogData.published)}</p>
                </div>
            )}
        </>
    );
}

module.exports = {
    BlogCard: BlogCard,
    BlogContainer: BlogContainer,
};
