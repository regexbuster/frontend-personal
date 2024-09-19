import styles from './page.module.css';

import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
    // const session = await getSession();

    return (
        <main className={styles.main}>
            {/* <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6> */}
            <div className={`${styles.vertFlex} ${styles.smallPadding}`}>
                <div className={styles.card}>
                    <h1>My name is Benjamin Franks</h1>
                    <p>
                        I'm currently studying at the University of Cincinnati
                        and am working towards a degree in Cybersecurity
                        Engineering.
                    </p>
                    <p>
                        I'm not a UI designer by trade and have only the ability
                        to get the bare minimum UI theming that you can see now.
                        I do my best to make the website look good but
                        ultimately I have little idea what I'm doing.
                    </p>
                    <p>
                        The goal of having this website is to be able to
                        showcase the projects I've completed in my portfolio and
                        to showcase the work I've done through blog posts.
                    </p>
                </div>
                <div className={styles.card}>
                    <a href="/api/auth/login">Login</a>
                </div>
                <div className={styles.card}>
                    <a href="/api/auth/logout">Logout</a>
                </div>
                {/* {session && session.user && (
                    <div className={styles.card}>{`${JSON.stringify(
                        session
                    )}`}</div>
                )} */}
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
                <div className={styles.card}>Hello World</div>
            </div>
        </main>
    );
}
