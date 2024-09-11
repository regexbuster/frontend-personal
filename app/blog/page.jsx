import connectDB from '@/lib/connectDB';
import BlogPost from '@/models/BlogPosts';

import Link from 'next/link';

export default async function Page() {
    await connectDB();

    const content = await BlogPost.find();

    return (
        <main>
            {content.map((post) => {
                return <BlogItem blogdata={post} />;
            })}
        </main>
    );
}

const BlogItem = ({ blogdata }) => {
    return (
        <div>
            <Link href={`/blog/${blogdata._id}`}>
                <p>{blogdata.title}</p>
                <p>{blogdata.description}</p>
                <p>{blogdata.updatedAt.toString()}</p>
            </Link>
        </div>
    );
};
