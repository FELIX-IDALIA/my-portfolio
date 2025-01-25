import emoji from "react-easy-emoji";

export const greetings = {
  name: "Idalia Felix",
  title: "Hi all, I'm Felix",
  description:
    "Passionate Software Developer skilled in JavaScript and Java, with hands-on experience in backend development (NodeJS, Spring Boot) and frontend development (ReactJS, NextJS). Proficient in building APIs, managing databases, integrating systems, and leveraging DevOps practices to deliver robust software solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1-fge-C5ZVQrB-1FagX6NaxcVX97wP_Az/view?usp=drivesdk",
};

export const openSource = {
  githubUserName: "FELIX-IDALIA",
};

export const contact = {};

export const socialLinks = {
  url: "",
  linkedin: "https://www.linkedin.com/in/felix-idalia-131190263/",
  github: "https://github.com/FELIX-IDALIA",
  instagram: "",
  facebook: "",
  twitter: "https://x.com/flxIdalia",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in NodeJs & SpringBoot application"),
        emoji("⚡ Databases: Well-versed in working with MongoDB, PostgreSQL, and MySQL."),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          iconifyTag: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
        {
          skillName: "Sentry",
          iconifyTag: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Javascript (NodeJs)",
    progressPercentage: "85",
  },
  {
    Stack: "API Integration",
    progressPercentage: "80",
  },
  {
    Stack: "Java (SpringBoot)",
    progressPercentage: "70",
  },
  {
    Stack: "ReactJs and NextJs",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Maseno University",
    subHeader: "BSc in Computer Technology",
    duration: "2018 - 2023",
    desc: "I gained comprehensive understanding of computer science and technology. This program equipped me with valuable knowledge and skills in areas such as programming, software development and computer networks.",
    grade: "",
    descBullets: [],
  },
  {
    schoolName: "African Leadership X",
    subHeader: "Full Stack Software Engineering",
    duration: "2022 - 2023",
    desc: "Completed course work in: C Programming, Unix Programming, Databases, Data Structures & Algorithms, Python, Test-Driven Development.",
    grade: "",
    descBullets: [],
  },

  {
    schoolName: "Chavavo High School",
    subHeader: "Kenya Certificate of Secondary Education",
    duration: "2014 - 2017",
    desc: "At Chavavo High School, I pursued my Kenya Certificate of Secondary Education from 2014 to 2017, during which I gained valuable knowledge and skills that have contributed to my educational and personal growth.",
    grade: "",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "Freelance Software Developer",
    company: "Fiverr",
    companyLogo: "/img/icons/common/Fiverr-Logo.png",
    date: "Aug 2023 – Jan 2025",
    desc: `
    ➢ Developed and deployed responsive web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).
    ➢ Designed user-friendly UIs with React and Tailwind CSS, improving usability and accessibility.
    ➢ Created robust RESTful and GraphQL APIs, ensuring seamless backend-to-frontend integration.
    ➢ Debugged and resolved performance issues in existing applications, enhancing system efficiency.
    `,
  },
  {
    role: "Full-Stack Developer (Student)",
    company: "African Leadership X",
    companyLogo: "/img/icons/common/alx-logo.jpg",
    date: "Feb 2022 – Mar 2023",
    desc: `
    ➢ Collaborated on team projects, mastering Git workflows and version control best practises.
    ➢ Built scalable web applications leveraging Python, JavaScript, and React.js.
    ➢ Engaged in remote communication and collaboration via Slack, Discord, and Zoom.
    `,
  },

  {
    role: "IT Assistant Intern",
    company: "Vihiga Hudma Centre",
    companyLogo: "/img/icons/common/hdm-kenya.png",
    date: "Oct 2021 – Dec 2021",
    desc: `
    ➢ Maintained and troubleshot network infrastructure to ensure efficiency.
    ➢ Set up and configured devices such as laptops, desktops, and printers.
    ➢ Responded to IT help desk requests and provided user support.
    ➢ Installed and upgraded hardware components, improving system performance.
    `,
  },
];

export const projects = [
  {
    name: "GreenLive",
    desc: "Green is an interactive live-streaming application designed to foster connection, fun, and friendship among users. Inspired by the symbolism of life and vitality that the color green represents, the app empowers users to go live, engage with audiences, and build meaningful relationships. Built with the MERN stack (MongoDB, Express.js, React, and Node.js), Green emphasizes real-time interactivity, scalability, and a seamless user experience.",
    github: "https://github.com/FELIX-IDALIA",
  },
  {
    name: "Home Air Quality and Monitoring System in a House.",
    desc: "Home Air Quality and Monitoring System is an innovative solution designed to monitor and improve the air quality within a home. The system continuously tracks key environmental parameters such as temperature, humidity, CO2 levels, and the presence of harmful particles like dust and pollutants. Using real-time sensors, the data is analyzed and displayed on a user-friendly interface, allowing homeowners to take proactive measures to ensure a healthy living environment.",
    github: "",
  },
  {
    name: "Password Based Door Lock System",
    desc: "The Password-Based Door Lock System is a secure and user-friendly locking mechanism that uses password authentication to control access. It consists of an input device (keypad) for entering the password, a microcontroller to verify it against the stored password, and an electronic lock that activates upon successful authentication.",
    github: "",
  },
  {
    name: "Automated Home Control System",
    desc: "Automated Home Control System is a smart solution designed to automate and streamline the management of various home devices and systems. This system allows homeowners to control lighting, temperature, security cameras, and other appliances remotely through a centralized platform..",
    github: "",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on /types/section.ts page
export const seoData = {
  title: "Idalia Felix",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Odhiambo George",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
