import styles from "./about.page.module.css";

function About() {
  return (
    <main className={styles.aboutmain}>
      <div>
        <h1>Education</h1>
      </div>
      <div>
        <h2>University of Cincinnati, Cincinnati, OH</h2>
        <p>Bachelor of Science, Cyber Security Engineering</p>
        <p>Expected Graduation: May 2027</p>
        <p>GPA: 3.56</p>
      </div>
      <div>
        <h2>Walnut Hills High School, Cincinnati, OH</h2>
        <p>High School Diploma</p>
        <p>Graduated: 2022</p>
        <p>GPA: 4.65 (weighted)</p>
      </div>

      <div>
        <h1>Projects</h1>
      </div>
      <div>
        <h2>L4S Statistical Visualization Website</h2>
        <p>August 2024 - Present</p>
        <ul>
          <li>
            Developed a web application to visualize bleaching data to ensure
            L4S networking
          </li>
          <li>
            Utilized React, nginx, and Docker to build and host the website
            showcasing this infomation
          </li>
        </ul>
      </div>

      <div>
        <h1>Experience</h1>
      </div>
      <div>
        <h2>Service Analyst</h2>
        <h3>Constellation Insurance, Cincinnati, OH</h3>
        <p>August - December 2023 | Full-time</p>
        <ul>
          <li>
            Gained expertise in troubleshooting both software and hardware
            problems
          </li>
          <li>
            Maintained accurate records of service incidents and resource
            requests
          </li>
          <li>
            Assisted users through multiple changes in the security environment
          </li>
          <li>
            Contributed to the improvement of the support process and the
            extension of the recorded knowledge
          </li>
        </ul>
      </div>

      <div>
        <h2>Kitchen Staff</h2>
        <h3>Camp Fitch YMCA, North Springfield, PA</h3>
        <p>July - August 2022 | Part-time</p>
        <ul>
          <li>
            Collaborated with a small team to deliver three daily meals for 600
            to 800 people
          </li>
          <li>
            Maintained kitchen work areas and equipment in a clean and orderly
            condition daily
          </li>
          <li>Organized a serving line and salad bar twice a day</li>
        </ul>
      </div>

      <div>
        <h2>Chapters Team Member</h2>
        <h3>INTERalliance, Cincinnati, OH</h3>
        <p>August 2021 - May 2022 | Volunteer</p>
        <ul>
          <li>
            Organized monthly educational and interactive events for over 50
            high schools
          </li>
          <li>
            Designed learning materials to teach students about computers and
            programming
          </li>
          <li>Collaborated in a team with deadlines and weekly meetings </li>
        </ul>
      </div>

      <div>
        <h1>Activities & Leadership Experience</h1>
      </div>
      <div>
        <h2>Organizer</h2>
        <h3>The Future of Data Hackathon</h3>
        <ul>
          <li>Oversaw finances and sponsership goals for the hackathon</li>
          <li>
            Organized overall hackathon with timings, speakers, and events
          </li>
        </ul>
      </div>

      <div>
        <h2>Research Assistant</h2>
        <h3>Kautz-Uible Cryptoeconomics Lab</h3>
        <ul>
          <li>Built the lab's mining rigs with NiceHash OS</li>
          <li>
            Set up a NUC with Rocket Pool's Smart Node Contracts to establish
            test net connetions
          </li>
        </ul>
      </div>

      <div>
        <h2>Treasurer</h2>
        <h3>UC Cryptocurrency Club</h3>
        <ul>
          <li>
            Oversaw the procurement of funds from the university for club
            activities
          </li>
          <li>
            Leading the club's development team to building a club website and
            DAO
          </li>
        </ul>
      </div>

      <div>
        <h2>Eagle Scout</h2>
        <h3>Boy Scout Troop 107</h3>
        <ul>
          <li>
            Oversaw scouts on multiple camping trips as well as a multitude of
            instructional
          </li>
          <li>
            Planned and directed scouts on multiple camping trips as well as six
            months of weekly
          </li>
          <li>
            Invented a unique community service project, coordinated a
            fundraiser for over one thousand dollars, and led a small team of
            around 10 scouts over 2 months in creating outdoor recreation sets
            for outreach at a local church
          </li>
        </ul>
      </div>

      <a
        href="/Franks_Benjamin Resume_Summer2025.pdf"
        download="Franks_Benjamin Resume"
        className={styles.resumefloater}
      >
        <p>Download Resume</p>
      </a>
    </main>
  );
}

export default About;
