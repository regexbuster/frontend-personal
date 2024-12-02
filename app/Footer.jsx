import Image from "next/image";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentdiv}>
        <div>
          <p>© 2024 Benjamin Franks | Student of Cybersecurity Engineer</p>
        </div>
        <div className={styles.linkrow}>
          <a href="https://www.linkedin.com/in/franksbn/" target="_blank">
            <Image
              className={styles.image}
              src="/linkedin-logo.svg"
              alt="LinkedIn logo"
              width="50"
              height="50"
              priority
            />
          </a>
          <a href="https://github.com/regexbuster" target="_blank">
            <Image
              className={styles.image}
              src="/github-mark-dark.svg"
              alt="Github logo"
              width="50"
              height="50"
              priority
            />
          </a>
          <a href="https://x.com/regexbuster" target="_blank">
            <Image
              className={styles.image}
              src="/x-logo-dark.png"
              alt="X/Twitter logo"
              width="50"
              height="50"
              priority
            />
          </a>
          <a href="mailto:franksbn@mail.uc.edu" target="_blank">
            <Image
              className={styles.image}
              src="/email-dark.svg"
              alt="Email Link"
              width="50"
              height="50"
              priority
            />
          </a>
          <a
            href="/Franks_Benjamin Resume_Summer2025.pdf"
            download="Franks_Benjamin Resume"
          >
            <Image
              className={styles.image}
              src="/resume-dark.svg"
              alt="Resume Download Link"
              width="50"
              height="50"
              priority
            />
          </a>
        </div>
        <div>{/* <p>Privacy Policy | Terms of Service</p> */}</div>
      </div>
    </footer>
  );
}

/*
© 2024 John Doe | Cybersecurity Engineer  
[LinkedIn Icon] [GitHub Icon] [Twitter Icon] | [Email Address] | [Download Resume (PDF)]  
Privacy Policy | Terms of Service
*/
