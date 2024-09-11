import connectDB from '@/lib/connectDB';
import BlogPost from '@/models/BlogPosts';

import ReactMarkdown from 'react-markdown';

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
        <main>
            <h1>{post.title}</h1>
            <blockquote>{post.description}</blockquote>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </main>
    );
}
