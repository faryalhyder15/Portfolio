// Importing icons
import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaHtml5,
} from "react-icons/fa";

// Importing images
import computer from "./computer.png";
import profileImg from "./profile.jpg";
import projectImg1 from "./project1.avif";
import projectImg2 from "./project2.avif";
import projectImg3 from "./project3.avif";
import projectImg4 from "./project4.avif";
import projectImg5 from "./project5.avif";
import projectImg6 from "./project6.avif";

//  Exporting all images
export const assets = {
  computer,
  profileImg,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
};

//  About Info Cards
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

// Skill Categories
export const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    items: ["C", "C++", "Java", "Python", "Assembly"],
    color: "text-purple-400",
  },
  {
    title: "Web Development",
    icon: FaHtml5,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "text-purple-500",
  },
  {
    title: "Backend & Databases",
    icon: FaServer,
    items: ["Node.js", "MongoDB", "SQL"],
    color: "text-purple-400",
  },
  {
    title: "Tools & Cloud",
    icon: FaCloud,
    items: ["GitHub", "Figma", "AWS Architecture Simulations"],
    color: "text-purple-400",
  },
];

//  Projects Section
export const projects = [
  {
    title: "To-Do List",
    description:
      "A responsive To-Do List web app with CRUD operations and task persistence.",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript"],
 
  },
  {
    title: "SUDOKU",
    description:
      "A console-based Sudoku game in C++ featuring multiple levels and difficulty settings.",
    image: projectImg2,
    tech: ["C++", "OOP", "Polymorphism", "Inheritance"],
 
  },
  {
    title: "Google Drive Management System",
    description:
      "A complete console-based Drive Management System with authentication and file/folder operations.",
    image: projectImg3,
    tech: ["C++", "Trees", "Graphs", "Linked Lists", "Queue"],
 
  },
  {
    title: "Ping Pong",
    description:
      "A two-player Ping Pong Game implemented entirely in Assembly language.",
    image: projectImg4,
    tech: ["Assembly Language"],
  },
  {
    title: "Food Ordering App",
    description:
      "An interactive food ordering prototype built using Figma for restaurant browsing and delivery tracking.",
    image: projectImg5,
    tech: ["Figma", "UI/UX"],

  },
  {
    title: "Word Search",
    description:
      "A C++-based Word Search game with file handling and dynamic array management.",
    image: projectImg6,
    tech: ["C++", "File Handling", "Pointers"],
  },
];
