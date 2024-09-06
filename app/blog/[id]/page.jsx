import axios from 'axios';
import BlogDataGetter from './BlogDataGetter';

import styles from './blogid.page.module.css';

export async function generateStaticParams() {
    const res = await axios.get(`https://dummyjson.com/posts`);

    return res.data.posts.map((post) => ({
        id: `${post.id}`,
    }));
}

function BlogId({ params }) {
    return (
        <main className={styles.main}>
            <BlogDataGetter id={params.id} />
        </main>
    );
}

export default BlogId;
