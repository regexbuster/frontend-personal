import styles from './blogging.page.module.css';

import BlogForm from './BlogForm';

function Blogging() {
    return (
        <main className={styles.main}>
            <BlogForm />
        </main>
    );
}

export default Blogging;
