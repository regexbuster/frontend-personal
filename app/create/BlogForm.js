import connectDB from '@/lib/connectDB';
import BlogPost from '@/models/BlogPosts';

import styles from './blogging.page.module.css';

function BlogForm() {
    const makePost = async (formData) => {
        'use server';

        let post = {};

        for (let [key, value] of formData.entries()) {
            post[key] = value;
        }

        await connectDB();

        await BlogPost.create(post);
    };

    return (
        <form action={makePost} className={styles.inputForm}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"></input>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description"></input>
            <label htmlFor="content">Content</label>
            <textarea
                type="text"
                id="content"
                name="content"
                className={styles.textarea}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogForm;
