'use server';

import { dbConnect } from './db';
import { BlogPost } from '@/models/BlogPosts.js';

export const getDBPosts = async () => {
    try {
        await dbConnect();
        const posts = await BlogPost.find({});
        return { res: posts, err: null };
    } catch (error) {
        console.error(error);
        return { res: null, err: error };
    }
};
