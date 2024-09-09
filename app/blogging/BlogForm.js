'use client';

import { useState } from 'react';
import ControlledInput from '@/components/ControlledInput';
import ControlledTextarea from '@/components/ControlledTextarea';

import styles from './blogging.page.module.css';
import axios from 'axios';

function BlogForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const createBlog = async () => {
        await axios.post('/api/posts', { title, description, content });
    };

    return (
        <div className={styles.inputForm}>
            <ControlledInput
                name={'Title'}
                value={title}
                updateValue={setTitle}
            ></ControlledInput>
            <ControlledInput
                name={'Description'}
                value={description}
                updateValue={setDescription}
            ></ControlledInput>
            <ControlledTextarea
                name={'Content'}
                value={content}
                updateValue={setContent}
            ></ControlledTextarea>
            <button onClick={createBlog}>Submit</button>
        </div>
    );
}

export default BlogForm;
