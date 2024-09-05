'use client';

import { useState } from 'react';

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

    const toggleLayout = () => {
        const values = Object.values(BlogLayoutType);
        const i = values.indexOf(layoutType.current);
        const len = values.length;

        // loop back if we escape layout type length
        const newIndex = i + 1 >= len ? 0 : i + 1;
        const nextIndex = i + 2 >= len ? i + 2 - len : i + 2;

        console.log({ current: values[newIndex], next: values[nextIndex] });

        setLayoutType({ current: values[newIndex], next: values[nextIndex] });
    };

    const toUpperFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div>
            <button onClick={toggleLayout}>
                {toUpperFirstLetter(layoutType.current)}
            </button>
        </div>
    );
}

// blogdata {title: String, description: String, published: Date, edited: Date}
// edited defaults to 0 when not edited
function BlogCard({ layoutType, blogdata }) {
    return (
        <>
            {layoutType == BlogLayoutType.LIST ? (
                <div className={style.bloglistitem}></div>
            ) : (
                <div className={style.bloggriditem}></div>
            )}
        </>
    );
}

module.exports = {
    BlogCard: BlogCard,
    BlogContainer: BlogContainer,
};
