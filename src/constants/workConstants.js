import patitasACasaMain from "../assets/images/patatias-a-casa/patitasACasaMain.webp";
import patitasACasaLogo from "../assets/images/patatias-a-casa/patitasACasaLogo.webp";
import patitasACasaDemo from "../assets/images/patatias-a-casa/patitasACasaDemo.webp";
import patitasACasaDetailsPC from "../assets/images/patatias-a-casa/patitasACasaDetailsPC.webp";
import patitasACasaDetailsMB from "../assets/images/patatias-a-casa/patitasACasaDetailsMB.webp";
import patitasACasaDetailsFont from "../assets/images/patatias-a-casa/patitasACasaFont.webp";

import programLanguageMain from "../assets/images/program-language/programLanguageMain.webp";
import programLanguageLogo from "../assets/images/program-language/programLanguageLogo.webp";
import programLanguageDemo from "../assets/images/program-language/programLanguageDemo.webp";
import programLanguageDetailsPC from "../assets/images/program-language/programLanguageDetailsPC.webp";
import programLanguageDetailsMB from "../assets/images/program-language/programLanguageDetailsMB.webp";
import programLanguageDetailFont from "../assets/images/program-language/programLanguageFont.webp";

import portfolioMain from "../assets/images/portfolio/heisjuandaLogo.webp";
import portfolioDemo from "../assets/images/portfolio/portfolioDemo.webp";
import portfolioDetailsPC from "../assets/images/portfolio/portfolioDetailsPC.webp";
import portfolioDetailsMB from "../assets/images/portfolio/portfolioDetailsMB.webp";
import portfolioDetailsFont from "../assets/images/portfolio/portfolioFont.webp";

import joshWoodColourMain from "../assets/images/josh-wood-colour/joshWoodColourMain.webp";
import joshWoodColourDemo from "../assets/images/josh-wood-colour/joshWoodColourDemo.webp";
import joshWoodColourDetailsPC from "../assets/images/josh-wood-colour/joshWoodColourDetailsPC.webp";
import joshWoodColourDetailsMB from "../assets/images/josh-wood-colour/joshWoodColourDetailsMB.webp";
import joshWoodColourDetailsFont from "../assets/images/josh-wood-colour/joshWoodColourFont.webp";

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
      `react-slick 0.29.0`,
      `typescript 5.0.2`,
      `vite 4.3.2`,
    ],
    repo: "https://github.com/adanj27/Patitas-a-casa"
  },
  {
    key: "4",
    name: "josh wood colour",
    handle: "josh-wood-colour",
    category: ["Development", "Design"],
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
    repo: ""
  },
  {
    key: "2",
    name: "program language",
    handle: "program-language",
    category: ["Development"],
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
    repo: "https://github.com/heisjuanda/Program-language"
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
    tech: [`react 18.2.0`, `vite 4.3.9`, `gsap 3.11.5`],
    repo: "https://github.com/heisjuanda/portfolio"
  },
];
