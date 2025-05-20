
import resume from "../../public/assets/Project/resume.png";
import jackfruit from "../../public/assets/Project/jackfruit.png";
import portfolio_thumbnail from "../../public/assets/Project/Portfolio.png";
import utsav from "../../public/assets/Project/utsav.png";


const projects = [
  {
    title: "Portfolio Website ",
    thumbnail: portfolio_thumbnail,
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
    description:
      "A personal portfolio showcasing my projects and skills, offering an interactive way to explore my experience. I also provide freelance design and development services—reach out anytime for collaborations or project inquiries.",
    github: "https://github.com/PavanSacharya/pavan-acharya-portfolio",
    live: "https://pavan-acharya.vercel.app/",
  },
  {
    title: "Internship: Automated Resume Analyzer",
    thumbnail: resume,
    techStack: ["Python", "CNN(Text)", "React"],
    description:
      "Our AI-powered Resume Screening Model at Manipal Technologies helps streamline internship selection by analyzing resumes for key skills, experience, and relevance. It ranks candidates using data-driven insights, saving time and improving shortlisting accuracy.",
    github: "",
    live: "",
  },
  {
    title: "Internship:Classification OF Jackfruit species",
    thumbnail: jackfruit,
    techStack: ["Python", "CNN","Streamlit"],
    description:
      "A CNN-powered app using Streamlit to classify jackfruits into four species from images—simple, fast, and accurate.",
    github: "https://github.com/PavanSacharya/Classification-of-Jackfruit-species",
    live: "https://classification-of-jackfruit-species-etqbr4sykmkwindln2xsyk.streamlit.app/",
  },
   {
    title: "Utsav:Event Management System",
    thumbnail: utsav,
    techStack: ["Javascript", "Php","MySql"],
    description:
      "Utsav is a dynamic event management system built using PHP and MySQL, designed to streamline event booking and management online.",
    github: "https://github.com/PavanSacharya/Utsav",
    live: "http://utsav-events.free.nf/",
  },
  
];

export default projects;
