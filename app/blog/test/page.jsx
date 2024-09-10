'use client';

import mongoose from 'mongoose';

function Page() {
    const getIds = async () => {
        const _ = await mongoose.connect(process.env.MONGODB_URI);
        const { db } = mongoose.connection;

        let posts = await db.collection('blogpost').find({});

        console.log(posts);

        return posts.map((post) => {
            return { id: `${post._id}` };
        });
    };

    return <>{getIds()}</>;
}

export default Page;
