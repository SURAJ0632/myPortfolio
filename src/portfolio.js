

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";



const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};



const illustration = {
  animated: true
};

const greeting = {
  username: "Suraj Singh",
  title: "Hi all, I'm Suraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/180dDHR1koSIbwXyQtQ4X-xXy-6a2n2q8/view?usp=sharing",
  displayGreeting: true
};



const socialMediaLinks = {
  github: "https://github.com/SURAJ0632",
  linkedin: "https://www.linkedin.com/in/suraj-singh-98140a1bb/",
  gmail: "thakursuraj7009@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/26583770/suraj-singh",

  display: true
};



const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],



  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fa-sharp fa-solid fa-terminal"
    },
  ],
  display: TextTrackCue
};



const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/CU.png"),
      subHeader: "Bachelor of Engineering Computer Science",
      duration: "August 2020- May 2024",
      desc: "Completed my Bachelors with 7.5 CGPA",
    },
    {
      schoolName: "Study Well Public School",
      logo: require("./assets/images/StudyWell.png"),
      subHeader: "Intermediate",
      duration: "April 2019-April 2020",
      desc: "Scored 76%",

    }
  ]
};



const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Agicent Technologies Private Limited",
      companylogo: require("./assets/images/Agicent.jpeg"),
      date: "April 2025 - Present",
      desc: "Working as a Software Engineer at Agicent Technologies Pvt. Ltd., specializing in building real cross-platform mobile applications using tech stack like React Native, Socket, and Firebase. ",

    },
    {
      role: "Software Developer ",
      company: "Vallabhi Group Of Companies",
      companylogo: require("./assets/images/vallabhi.jpeg"),
      date: "June 2024-March 2025",
      desc: "I work as a Front-end Developer at Vallabhi Group of Companies, where I've contributed to real-time production-level projects. This experience has allowed me to enhance my skills and stay updated with the latest industry trends."
    },
    {
      role: "Trainee",
      company: "Internshala",
      companylogo: require("./assets/images/internshala.jpg"),
      date: "May 2022 – July 2022",
      desc: "I completed a three-month web development training program through Internshala, where I learned a variety of new skills and concepts. I achieved a score of 96%, earning recognition as a top performer. This experience not only deepened my technical knowledge but also strengthened my problem-solving abilities and collaborative skills."
    }
  ]
};



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true
};


const bigProjects = {
  title: "Projects",

  projects: [
    {
      image: require("./assets/images/UI.jpg"),
      projectName: "Shopping Application UI/UX",
      projectDesc: "Made a Shopping app using React-native, the app contains Home page, cart page , login/signup,payment page etc. Tools Used:Android Studio , VScode",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://www.linkedin.com/posts/suraj-singh-98140a1bb_reactnative-mobileappdevelopment-shoppingapp-activity-7237691814307098624-V2x9?utm_source=share&utm_medium=member_desktop"
        }

      ]
    },
    {
      image: require("./assets/images/chatApp.jpg"),
      projectName: "Chatify App",
      projectDesc: "Developed a real-time web chat application enabling two-user communication using Socket, featuring user authentication (login/signup), chat functionality, profile updates, theme customization, and smooth user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/SURAJ0632/Chat-app"
        }
      ]
    },
    {
      image: require("./assets/images/ecrime.jpg"),
      projectName: "E-crime Website",
      projectDesc: "Made a website for making online FIR of crime irrespective of place and time, that also shows the status of crime. Skills used: HTML, CSS ,JS",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true
};



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NCC-B Certificate",
      subtitle:
        "Successfully completed two years of NCC-B cadet training, which included active participation in various camps throughout the tenure.",
      image: require("./assets/images/ncc.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1kK6aou-abAmAD9Tuo3YQyXlo7X8Ur8sb?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Data Mining Course(NPTEL)",
      subtitle:
        "I successfully completed a Data Mining course through NPTEL, earning a certificate that reflects my proficiency in data analysis techniques and methodologies. ",
      image: require("./assets/images/nptel.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Web Development Training",
      subtitle: "Completed full stack web development certification from internshala training and scored 95% and was a top performer",
      image: require("./assets/images/internshala.jpg"),
      imageAlt: "Internshala Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/12PIDbVP7mSAESaKyBzHjA9AVb9QF5NE8/view?usp=sharing" },
        // {
        //   name: "Final Project",
        //   url: "https://drive.google.com/file/d/12PIDbVP7mSAESaKyBzHjA9AVb9QF5NE8/view?usp=sharing"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",

  email_address: "thakursuraj7009@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
