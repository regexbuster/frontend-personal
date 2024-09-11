import { dbConnect } from './db.js';

export const getPosts = async () => {
    try {
        const db = await dbConnect();
        const posts = await db.collection('blogposts').find().toArray();
        return { res: posts, err: null };
    } catch (err) {
        return { res: null, err };
    }
};
