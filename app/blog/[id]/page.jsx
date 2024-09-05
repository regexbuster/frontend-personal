import { useEffect } from 'react';

import axios from 'axios';

function BlogId({ params }) {
    const [blogData, setBlogData] = useState({});

    const getData = async () => {
        let data = await (
            await axios.get(`https://dummyjson.com/posts/${params.id}`)
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

export async function generateStaticParams() {
    const posts = Array.from({ length: 20 }, (e, i) => `${i}`);

    return posts.map((post) => ({
        id: post.slug,
    }));
}

export default BlogId;
