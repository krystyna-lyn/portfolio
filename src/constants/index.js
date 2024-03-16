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
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const items = [

  {
    id: 1,
    title: "WaveTube Video App",
    img: "/portfolio/project-5.png",
    desc: "created using React.js, MUI",
    url: "https://wavetubevideos.netlify.app"
  },

  {
    id: 2,
    title: "Music App",
    img: "/portfolio/project-1.png",
    desc: "created using HTML, CSS, JavaScript",
    url: "https://krystyna-lyn.github.io/krystyna-music/"

  },
  {
    id: 3,
    title: "Green Camp UI/UX Website",
    img: "/portfolio/project-7.png",
    desc: "created using React.js, Next.js, Tailwind CSS",
    url: "https://greencamptravel.netlify.app/"
  },

  {
    id: 4,
    title: "E-Commerce Website",
    img: "/portfolio/project-4.png",
    desc: "created using Angular, see code below",
    url: "https://github.com/krystyna-lyn/nb-ks-shop"
  },

  {
    id: 5,
    title: "E-Commerce Shop",
    img: "/portfolio/project-2.png",
    desc: "created using HTML, CSS, JavaScript",
    url: "https://krystyna-lyn.github.io/e-shop/"
  },
  {
    id: 6,
    title: "Coffee Shop Website",
    img: "/portfolio/project-6.png",
    desc: "created using PHP",
    url: "https://github.com/krystyna-lyn/coffeeshop"
  },
  
  {
    id: 7,
    title: "Hotel booking Website UI/UX",
    img: "/portfolio/project-10.png",
    desc: "created using HTML, CSS",
    url: "https://krystyna-lyn.github.io/hotel-web/"
  },
  {
    id: 8,
    title: "Fashion Shop Website",
    img: "/portfolio/project-11.png",
    desc: "created using Shopify",
    url: "#"
  },
  {
    id: 9,
    title: "Shoes Shop UI/UX",
    img: "/portfolio/project-9.png",
    desc: "created using React",
    url: "https://niceshoes.netlify.app"
  },

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