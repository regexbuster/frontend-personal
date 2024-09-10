import styles from './blog.page.module.css';

import { BlogContainer } from './BlogItem';

// export async function generateStaticParams() {
//     // const db = await dbConnect();

//     let posts = await db.collection('blogposts').find().toArray();

//     console.log(`params ${posts}`);

//     return { params: posts };
// }

function Blog({}) {
    return (
        <main className={styles.main}>
            <BlogContainer />
        </main>
    );
}

export default Blog;
