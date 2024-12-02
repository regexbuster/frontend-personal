import styles from "./page.module.css";

import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  // const session = await getSession();

  return (
    <main className={`${styles.vertFlex} ${styles.smallPadding}`}>
      <div className={styles.card}>
        <h1>My name is Benjamin Franks</h1>
        {/* <p>
          I'm currently studying at the University of Cincinnati and am working
          towards a degree in Cybersecurity Engineering.
        </p>
        <p>
          I'm not a UI designer by trade and have only the ability to get the
          bare minimum UI theming that you can see now. I do my best to make the
          website look good but ultimately I have little idea what I'm doing.
        </p>
        <p>
          The goal of having this website is to be able to showcase the projects
          I've completed in my portfolio and to showcase the work I've done
          through blog posts.
        </p> */}

        <p>
          As a Cybersecurity Engineering student at the University of
          Cincinnati, I am passionate about the field of cybersecurity and have
          experience in multiple programming languages, including Python,
          JavaScript, C++, and more. I also have knowledge across multiple
          desktop environments such as Windows and various Linux distributions
          (mainly Ubuntu, Debian, and a custom Arch install).
        </p>

        <p>
          In addition to my studies, I am working on decentralized technology
          for NOSTR, a decentralized messaging service, and Rocket Pool, a
          collective staking algorithm built for staking on the Ethereum
          blockchain. These experiences have provided me with a deep
          understanding of decentralized systems and the challenges and
          opportunities they present.
        </p>

        <p>
          My ultimate goal is to work as a professional penetration tester, and
          I am motivated by my love of learning new information and building
          interesting infrastructure.
        </p>

        <p>
          I am excited to explore opportunities in the cybersecurity field and
          am confident that my unique qualities and strengths will make me a
          valuable addition to any organization seeking to navigate the
          challenges of decentralized systems.
        </p>
      </div>
      <div className={styles.card} style={{ display: "none" }}>
        <a href="/api/auth/login">Login</a>
      </div>
      <div className={styles.card} style={{ display: "none" }}>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </main>
  );
}
