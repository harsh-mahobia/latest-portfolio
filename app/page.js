import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Simulate fetching blog + certification data
async function getData() {
  // If you want to include Dev.to articles:
  // const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const devArticles = await res.json();

  const certsAndArticles = [
    {
      title: "Advanced Distributed Systems",
      description: "Advanced Distributed Systems – via proctored mode: from NPTEL",
      cover_image: '/certifications/nptel.png',
      reading_time_minutes: "Nov 2024"
    },
    {
      title: "AI for Software Engineers",
      description: "AI for Software Engineers – from Programming Pathshala",
      cover_image: '/certifications/pp.png',
      reading_time_minutes: "June 2024"
    },
    {
      title: "JGEC Winter of Code",
      description: "Contributed to the Open Source Softwares by JWOC Event",
      cover_image: '/certifications/jwoc.png',
      reading_time_minutes: "May 2024"
    },
    
    {
      title: "Programming in Java",
      description: "Programming in Java – via proctored mode: from NPTEL",
      cover_image: '/certifications/nptel.png',
      reading_time_minutes: "April 2024"
    },
    
    {
      title: "Practical Code Search",
      description: "Ways to Search Code on Github",
      cover_image: '/certifications/ll1.png',
      reading_time_minutes: "June 2023"
    },
    {
      title: "Generative AI with LLM",
      description: "Generative AI with Large Language Models (Coursera)",
      cover_image: '/certifications/coursera.png',
      reading_time_minutes: "Dec 2023"
    },
    
  ];

  return certsAndArticles;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Blog blogs={blogs} />
      <Experience />
      <Education />
      <ContactSection />
    </div>
  );
}
