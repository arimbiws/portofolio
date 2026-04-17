import homeSvara from "../assets/projects/svara/Homepage.png";
import recSvara from "../assets/projects/svara/Recommendation.png";
import paySvara from "../assets/projects/svara/Payment.png";
import notifSvara from "../assets/projects/svara/Notification.png";
import helpSvara from "../assets/projects/svara/Help.png";
import homeAJ from "../assets/projects/ajsmashburgers/homepage.png";
import adminAJ from "../assets/projects/ajsmashburgers/dashboard-admin.png";
import homeTale from "../assets/projects/taletrack/screenshot-home.png";
import expTale from "../assets/projects/taletrack/screenshot-explore.png";
import shelfTale from "../assets/projects/taletrack/screenshot-shelves.png";

export const projects = [
  {
    slug: "svara-capstone",
    title: "SVARA - Where Smart Choices, Find Your Connection",
    shortDescription: "Web application that provide personalized telco product recommendations, designed to improve user retention and reduce customer churn.",
    fullDescription: [
      "Telecommunication providers face a significant challenge in understanding diverse user behaviors. With thousands of product variants such as spanning data, voice, SMS, and streaming, all sorts of generic product offerings often miss the mark, leading to ineffective promotions, missed cross-selling opportunities, and a churn rate risk of up to 31%.",
      "This project aims to solve that problem by introducing an intelligent, data-driven recommendation system. Built using the Kaggle Telco Customer Churn dataset, the application segments customers based on their monthly charges and service usage patterns. It then matches these user segments with tailored dummy Telco packages.",
    ],
    images: [homeSvara, recSvara, paySvara, notifSvara, helpSvara],
    techStack: ["React", "Tailwind CSS", "Express.js", "MySQL", "Flask API", "Vercel", "Railway", "Multilayer Perceptron (MLP)", "Content-Based Filtering"],
    demoLink: "https://svara-asah.vercel.app/",
    githubLink: "https://github.com/Capstone-A25-CS022/svara-app",
  },
  {
    slug: "aj-smash-burgers",
    title: "AJ Smash Burgers",
    shortDescription: "A web application for a burger restaurant in Bali, featuring a responsive UI, promotional menu display, and admin dashboard for content management.",
    fullDescription: [
      "A comprehensive full-stack web application designed to elevate the online presence of a local culinary business. The aim of this project was to create a visually appealing,and user-friendly website for customers to explore the menu, read the latest news or promos, and easily locate the restaurant.",

      "This application also includes a fully functional Content Management System (CMS). This feature is created for the restaurant owner to seamlessly update menu items, post new promotional banners, manage gallery images, and update company profile details easily without needing to touch a single line of code.   ",
    ],
    images: [homeAJ, adminAJ],
    techStack: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL", "PHP", "Blade", "Swiper.js"],
    demoLink: "#",
    githubLink: "https://github.com/arimbiws/ajsmashburgers",
  },
  {
    slug: "tale-track",
    title: "Tale Track - Track your tales, connect your pages.",
    shortDescription: "A full-stack reading tracker and digital library management app featuring seamless book discovery, custom bookshelves, and offline PWA support.",
    fullDescription: [
      "TaleTrack is a comprehensive, digital catalog designed for book lovers to manage their reading journey. Built with a modern, responsive user interface, users able to search through millions of titles via an integration with the Google Books API.",

      `Users can curate personalized bookshelves and track their reading progress with dynamic progress bars. The platform supports status updates, allowing users to move books between "Want to Read," "Reading," and "Finished" states.`,

      "From a technical perspective, TaleTrack is engineered for performance, security, and accessibility. It utilizes Next.js with the App Router for server-side rendering and optimized routing. The database architecture is powered by Supabase (PostgreSQL) and managed through Prisma ORM for database queries. For security, the app implements Auth.js (NextAuth v5) to handle both Google OAuth and Credentials login, paired with Nodemailer for secure password reset flows. Additionally, TaleTrack is configured as a Progressive Web App (PWA), ensuring core functionalities remain accessible even without an active internet connection.",
    ],
    images: [homeTale, expTale, shelfTale],
    techStack: ["Next.js", "Tailwind CSS", "Prisma ORM", "Supabase", "Google Books API", "PWA (Progressive Web App)", "Auth.js", "Nodemailer", "PostgreSQL", "TypeScript"],
    demoLink: "https://tale-track.vercel.app/",
    githubLink: "https://github.com/arimbiws/tale-track",
  },
];
