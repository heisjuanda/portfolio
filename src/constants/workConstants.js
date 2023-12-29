// PATITAS A CASA
import patitasACasaMain from "../assets/images/patatias-a-casa/patitasACasaMain.webp";
import patitasACasaLogo from "../assets/images/patatias-a-casa/patitasACasaLogo.webp";
import patitasACasaDemo from "../assets/images/patatias-a-casa/patitasACasaDemo.webp";
import patitasACasaDetailsPC from "../assets/images/patatias-a-casa/patitasACasaDetailsPC.webp";
import patitasACasaDetailsMB from "../assets/images/patatias-a-casa/patitasACasaDetailsMB.webp";
import patitasACasaDetailsFont from "../assets/images/patatias-a-casa/patitasACasaFont.webp";

// PROGRAM LANGUAGE
import programLanguageMain from "../assets/images/program-language/programLanguageMain.webp";
import programLanguageLogo from "../assets/images/program-language/programLanguageLogo.webp";
import programLanguageDemo from "../assets/images/program-language/programLanguageDemo.webp";
import programLanguageDetailsPC from "../assets/images/program-language/programLanguageDetailsPC.webp";
import programLanguageDetailsMB from "../assets/images/program-language/programLanguageDetailsMB.webp";
import programLanguageDetailFont from "../assets/images/program-language/programLanguageFont.webp";

// PORTFOLIO
import portfolioMain from "../assets/images/portfolio/heisjuandaLogo.webp";
import portfolioDemo from "../assets/images/portfolio/portfolioDemo.webp";
import portfolioDetailsPC from "../assets/images/portfolio/portfolioDetailsPC.webp";
import portfolioDetailsMB from "../assets/images/portfolio/portfolioDetailsMB.webp";
import portfolioDetailsFont from "../assets/images/portfolio/portfolioFont.webp";

// JOSHWOOD COLOUR
import joshWoodColourMain from "../assets/images/josh-wood-colour/joshWoodColourMain.webp";
import joshWoodColourDemo from "../assets/images/josh-wood-colour/joshWoodColourDemo.webp";
import joshWoodColourDetailsPC from "../assets/images/josh-wood-colour/joshWoodColourDetailsPC.webp";
import joshWoodColourDetailsMB from "../assets/images/josh-wood-colour/joshWoodColourDetailsMB.webp";
import joshWoodColourDetailsFont from "../assets/images/josh-wood-colour/joshWoodColourFont.webp";

// REDDO CARES
import reddoMain from "../assets/images/reddo/reddoMain.webp";
import reddoDemo from "../assets/images/reddo/reddoDemo.webp";
import reddoDetailsPC from "../assets/images/reddo/reddoDetailsPC.webp";
import reddoDetailsMB from "../assets/images/reddo/reddoDetailsMB.webp";
import reddoDetailsFont from "../assets/images/reddo/reddoFont.webp";

// TECH STACK
import REACT from "../assets/images/techStack/react.png";
import AXIOS from "../assets/images/techStack/axios.png";
import CSS from "../assets/images/techStack/css.png";
import GATSBY from "../assets/images/techStack/gatsby.png";
import GRAPHQL from "../assets/images/techStack/graphQL.png";
import GSAP from "../assets/images/techStack/gsap.png";
import HTML from "../assets/images/techStack/html.png";
import JEST from "../assets/images/techStack/jest.png";
import JS from "../assets/images/techStack/js.png";
import NEXT from "../assets/images/techStack/next.png";
import RACKET from "../assets/images/techStack/racket.png";
import SCHEMEL from "../assets/images/techStack/schemeL.png";
import SASS from "../assets/images/techStack/sass.png";
import TS from "../assets/images/techStack/ts.png";
import MATTER from "../assets/images/techStack/matter.png";
import VITE from "../assets/images/techStack/vite.png";
import TAILWIND from "../assets/images/techStack/tailwind.png";

export const WORK_PROJECTS = [
  {
    key: "1",
    name: "patitas a casa",
    handle: "patitas-a-casa",
    category: ["Development", "Design"],
    description: `
    Through Patitas a Casa, users can easily navigate a world of wagging tails and whiskered wonders, 
    discovering profiles of pets in need of a caring home. Our app showcases comprehensive information about each pet,
    including their breed, age, personality traits, and heartwarming stories, enabling potential adopters to make well-informed decisions.`,
    mainPicutre: patitasACasaMain,
    logo: patitasACasaLogo,
    demo: patitasACasaDemo,
    details: [
      patitasACasaDetailsPC,
      patitasACasaDetailsMB,
      patitasACasaDetailsFont,
    ],
    tech: [
      `aos 2.3.4`,
      `axios 1.4.0`,
      `react 18.2.0`,
      `typescript 5.0.2`,
      `vite 4.3.2`,
    ],
    techStack: [REACT, TS, VITE, CSS, HTML, AXIOS],
    repo: "https://github.com/adanj27/Patitas-a-casa",
    isMine: true,
  },
  {
    key: "4",
    name: "josh wood colour",
    handle: "josh-wood-colour",
    category: ["Development", "Frontend", "Quality Assurance"],
    description: `
    Our project involved collaborating with a prestigious hair care company to optimize their online sales strategy. By seamlessly integrating a user-friendly e-commerce platform into their website, we successfully enhanced their revenue streams. This transformative solution empowered customers to make hassle-free purchases directly from the brand's website, resulting in substantial gains for our esteemed client. `,
    mainPicutre: joshWoodColourMain,
    demo: joshWoodColourDemo,
    details: [
      joshWoodColourDetailsPC,
      joshWoodColourDetailsMB,
      joshWoodColourDetailsFont,
    ],
    tech: [
      `react 18.0.0`,
      `gatsby 5.12.6`,
      `axios 1.4.0`,
      `jest 29.7.0`,
      `sass 1.69.1`,
      `storyblock 4.5.6`,
    ],
    techStack: [REACT, GATSBY, JEST, SASS, JS, GRAPHQL, HTML, AXIOS],
    repo: "https://joshwoodcolour.com/",
    isMine: false,
  },
  {
    key: "2",
    name: "program language",
    handle: "program-language",
    category: ["Development", "Engineering"],
    description: `
    The new program language, called "Fundamentals of Programming Languages" (FPL), is a functional programming language that is designed to help users understand how program languages work. 
    FPL is based on the lambda calculus, a formal system of computation that is used to study the semantics of programming languages. 
    FPL provides a number of features that make it well-suited for understanding program languages
    `,
    mainPicutre: programLanguageMain,
    logo: programLanguageLogo,
    demo: programLanguageDemo,
    details: [
      programLanguageDetailsPC,
      programLanguageDetailsMB,
      programLanguageDetailFont,
    ],
    tech: [`racket - scheme 8.6`, `eopl 8.6`, `sllgen 1.0`],
    techStack: [RACKET, SCHEMEL],
    repo: "https://github.com/heisjuanda/Program-language",
    isMine: true,
  },
  {
    key: "3",
    name: "portfolio",
    handle: "portafolio",
    category: ["Development", "Design"],
    description: `
    Welcome to my professional portfolio, a testament to my experience and passion as a web developer. This platform serves as a diverse showcase of my projects, experiences, and achievements, reflecting my unwavering commitment to excellence and innovation. Each project demonstrates my dedication to continuous improvement and staying at the forefront of cutting-edge technology.`,
    mainPicutre: portfolioMain,
    demo: portfolioDemo,
    details: [portfolioDetailsPC, portfolioDetailsMB, portfolioDetailsFont],
    tech: [`react 18.2.0`, `vite 4.3.9`, `gsap 3.11.5`, `matter.js 0.19.0`],
    techStack: [REACT, VITE, GSAP, HTML, CSS, JS, MATTER],
    repo: "https://github.com/heisjuanda/portfolio",
    isMine: true,
  },
  {
    key: "5",
    name: "Reddo Cares",
    handle: "reddo",
    category: ["Development", "Frontend", "Quality Assurance"],
    description: `
    This private application is a dedicated platform designed to provide comprehensive and personalized child care services for families across the United Kingdom. With a strong focus on ensuring the well-being, safety, and holistic development of children, this application sets a new standard in child care excellence.`,
    mainPicutre: reddoMain,
    demo: reddoDemo,
    details: [reddoDetailsPC, reddoDetailsMB, reddoDetailsFont],
    tech: [
      `react 18.2.0`,
      `next 13.4.4`,
      `tailwind 3.3.2`,
      `axios 1.4.0`,
      `zod 3.21.4`,
      `zustand 4.3.8`,
    ],
    techStack: [REACT, NEXT, HTML, TS, AXIOS, TAILWIND],
    repo: "https://staging.reddocares.org.uk/",
    isMine: false,
  },
];
