import axios from 'axios';
import BlogDataGetter from './BlogDataGetter';
import mongoose from 'mongoose';

import styles from './blogid.page.module.css';

export async function generateStaticParams() {
    const _ = await mongoose.connect(process.env.MONGODB_URI);
    const { db } = mongoose.connection;

    let posts = await db.collection('blogposts').find().toArray();

    return posts.map((post) => {
        return { id: `${post._id}` };
    });
}

function BlogId({ params }) {
    return (
        <main className={styles.main}>
            <BlogDataGetter id={params.id} />
        </main>
    );
}

export default BlogId;
