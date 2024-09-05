'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

function BlogId({ params }) {
    const router = useRouter();
    const [blogData, setBlogData] = useState({});

    const getData = async () => {
        let data = await (
            await axios.get(`https://dummyjson.com/posts/${router.query.id}`)
        ).json();

        setBlogData({ title: data.title, content: data.body });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>{blogData.title}</h1>
            <p>{blogData.content}</p>
        </div>
    );
}

export default BlogId;
