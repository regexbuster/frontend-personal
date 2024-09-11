import connectDB from '@/lib/connectDB';
import BlogPost from '@/models/BlogPosts';

import ReactMarkdown from 'react-markdown';

import styles from './blogid.module.css';

export async function generateStaticParams() {
    await connectDB();

    let ids = await BlogPost.find({}, '_id');
    ids = ids.map((id) => {
        return { id: id._id.toString() };
    });

    return ids;
}

export default async function Page({ params }) {
    await connectDB();

    const post = await BlogPost.findOne({ _id: [params.id] });

    return (
        <main className={styles.main}>
            <div className={styles.blogCard}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <div className={styles.break}></div>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </main>
    );
}
