import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const items = [
  {
    id: 1,
    title: "E-commerce App",
    img: "/portfolio/project-13.png",
    desc: "created using React JS",
    url: "https://kixsneaks.netlify.app"
  },

  {
    id: 2,
    title: "Video App",
    img: "/portfolio/project-5.png",
    desc: "created using React JS, MUI",
    url: "https://wavetubevideos.netlify.app"
  },

  {
    id: 3,
    title: "Music App",
    img: "/portfolio/project-1.png",
    desc: "created using HTML, CSS, JavaScript",
    url: "#"

  },
  {
    id: 4,
    title: "E-Commerce App",
    img: "/portfolio/project-4.png",
    desc: "created using Angular, see code below",
    url: "https://github.com/krystyna-lyn/nb-ks-shop"
  },

  {
    id: 5,
    title: "UI/UX SPA",
    img: "/portfolio/project-12.png",
    desc: "created using React JS Tailwind CSS",
    url: "https://spectrum-ai.netlify.app/"
  },


  {
    id: 6,
    title: "E-Commerce App",
    img: "/portfolio/project-6.png",
    desc: "created using PHP",
    url: "https://github.com/krystyna-lyn/coffeeshop"
  }

];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];





export { items, technologies };