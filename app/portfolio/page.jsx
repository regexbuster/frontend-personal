import styles from "./portfolio.page.module.css";
import Image from "next/image";

function Portfolio() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a
          href="https://github.com/regexbuster/election-bot"
          target="_blank"
          className={styles.card}
        >
          <div>
            <Image
              src="/portfolio/election.png"
              width={300}
              height={300}
              alt="Picture of election bot embed"
            ></Image>
            <h1>Election Discord Bot</h1>
            <p>
              A simple Discord bot that used Puppeteer to take and post
              screenshots of election results as they came in sourced from the
              AP's live result website.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/regexbuster/go-secretsanta"
          target="_blank"
          className={styles.card}
        >
          <div>
            <Image
              src="/portfolio/secretsanta.png"
              width={300}
              height={300}
              alt="Picture of secret santa bot embed"
            ></Image>
            <h1>Secret Santa Discord Bot</h1>
            <p>
              A simple Discord bot that showcases my introduction to Go in order
              to build a bot that allows my remote friends to generate a secret
              santa plan all within Discord, which is our main communication
              platform.
            </p>
          </div>
        </a>

        <a href="https://rpldefi.com" target="_blank" className={styles.card}>
          <div>
            <Image
              src="/portfolio/rocketpool.png"
              width={300}
              height={300}
              alt="Rocket Pool Logo"
            ></Image>
            <h1>RPLDefi Sheet</h1>
            <p>
              I maintain the defi integration sheet for the cryptocurrency
              protocol of Rocket Pool. This allows rETH holders to further
              generate value on their tokens.
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Portfolio;
