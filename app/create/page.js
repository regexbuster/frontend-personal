import styles from './blogging.page.module.css';

import BlogForm from './BlogForm';

function Create() {
    return (
        <main className={styles.main}>
            <BlogForm />
        </main>
    );
}

export default Create;
