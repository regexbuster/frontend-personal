import connectDB from '@/lib/connectDB';
import BlogPost from '@/models/BlogPosts';

import Link from 'next/link';

import styles from './blog.module.css';

export default async function Page() {
    await connectDB();

    const content = await BlogPost.find();

    return (
        <main className={styles.main}>
            {content.map((post) => {
                return <BlogItem blogdata={post} key={post._id} />;
            })}
        </main>
    );
}

const BlogItem = ({ blogdata }) => {
    const date = blogdata.updatedAt;
    const dateYear = date.getFullYear();
    const dateMonth = date.getMonth();
    const dateDay = date.getDate();

    return (
        <div className={styles.blogCard}>
            <Link className={styles.link} href={`/blog/${blogdata._id}`}>
                <div className={styles.horizDiv}>
                    <h1>{blogdata.title}</h1>
                    <h2>{`${dateMonth}/${dateDay}/${dateYear}`}</h2>
                </div>

                <p>{`${blogdata.description.split(0, 120)}...`}</p>
            </Link>
        </div>
    );
};
