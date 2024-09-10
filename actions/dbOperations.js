// import { dbConnect } from '@/utils/db';

// export const getPosts = async () => {
//     try {
//         await dbConnect();
//         const posts = await BlogPost.find({});
//         return { res: posts, err: null };
//     } catch (err) {
//         return { res: null, err };
//     }
// };

// export const savePost = async (post) => {
//     try {
//         await dbConnect();
//         let newPost = await req.json();
//         await BlogPost.create(newPost);
//         return { res: {}, err: null };
//     } catch (err) {
//         return { res: null, err };
//     }
// };
