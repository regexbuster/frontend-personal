import styles from './blog.page.module.css';

import { BlogContainer } from './BlogItem';

function Blog() {
    return (
        <main className={styles.main}>
            <BlogContainer />
        </main>
    );
}

export default Blog;
