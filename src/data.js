// Social Icons
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

// Project images
import ThisWebsite from './images/this-website.jpg';
import Dotfiles from './images/dotfiles.jpg';
import Archives from './images/archives.png';
import Pathfinding from './images/pathfinding.png';
import CSAWebsite from './images/csa-website.jpg';
import TerraNova from './images/terra-nova.png';

// Experience images
import BU from './images/bu-logo.png';
import RVHS from './images/riverside-logo.png';
import UPE from './images/upe-logo.png';
import CSA from './images/csa-logo.png';
import Wegmans from './images/wegmans-logo.png';

// Socials; rendered by Home.js
export const socials = [
  {
    title: 'GitHub',
    url: 'https://github.com/dcmaglione/',
    icon: <FiGithub className="w-8 h-8 2xl:w-10 2xl:h-10" />,
    type: 'external',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dcmaglione/',
    icon: <FiLinkedin className="w-8 h-8 2xl:w-10 2xl:h-10" />,
    type: 'external',
  },
  {
    title: 'Email',
    url: 'mailto:dcmaglione@gmail.com',
    icon: <FiMail className="w-8 h-8 2xl:w-10 2xl:h-10" />,
    type: 'external',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/2d.dom/',
    icon: <FiInstagram className="w-8 h-8 2xl:w-10 2xl:h-10" />,
    type: 'external',
  },
];

// Project details; rendered by Projects.js
export const projects = [
  {
    title: 'This Website',
    subtitle: 'HTML / Tailwind CSS / React',
    description:
      'This website was my first project using React that reached completion. It gave me my first exposure to the possibilities of JavaScript libraries and a taste of CSS frameworks.',
    image: ThisWebsite,
    url: 'https://github.com/dcmaglione/dcmag.website',
  },
  {
    title: 'My Dotfiles',
    subtitle: 'C / Python / Vim Script',
    description:
      'Dotfiles are the customization files used to personalize Linux or other Unix-based systems. These are simply the files whose names start with a dot (.) like .vimrc, .bashrc, .ssh, etc.',
    image: Dotfiles,
    url: 'https://github.com/dcmaglione/dotfiles',
  },
  {
    title: 'Personal Archive',
    subtitle: 'HTML / CSS / Gemini',
    description:
      'This was my first website. It uses a new Internet protocol called Gemini which can be seen as a middle ground between the old gopher protocol of the early 1990s and the modern web.',
    image: Archives,
    url: 'https://github.com/dcmaglione/dcmag.archive',
  },
  {
    title: 'Pathfinding Visualizer',
    subtitle: 'Python / Pygame',
    description:
      "Pathfinding or pathing is the plotting, by a computer application, of the shortest route between two points. This Python program visualizes this process using A* and Dijkstra's Algorithm.",
    image: Pathfinding,
    url: 'https://github.com/dcmaglione/pathfinding-visualization',
  },
  {
    title: 'CSA Official Website',
    subtitle: 'HTML / SCSS / React',
    description:
      'This is the official website of CSA. I was in charge of the team handling the websites maintenance. Additionally, I ensured the site complied with the Minimum Web Accessibility Standards.',
    image: CSAWebsite,
    url: 'https://csa-official-website.herokuapp.com/',
  },
  {
    title: 'Terra Nova',
    subtitle: 'C# / Firebase / Unity 3D',
    description:
      'Terra Nova is a high-fidelity 3D game designed and built by a team of friends and I for the BostonHacks 2020 Hackathon. It gave us experience working with a team in a high-stress situation.',
    image: TerraNova,
    url: 'https://devpost.com/software/terra-nova-8is53l',
  },
];

// Experience details; rendered by Experience.js
export const experience = [
  {
    position: 'Engagement Officer',
    company: 'Computer Science Ambassadors (CSA) || Dec. 2021 - Present',
    image: CSA,
  },
  {
    position: 'Course Assistant',
    company: 'Boston University || Sep. 2021 - Present',
    image: BU,
  },
  {
    position: 'Director of Recruitment',
    company: 'Upsilon Pi Episilon (UPE) || Apr. 2021 - Present',
    image: UPE,
  },
  {
    position: 'Cashier',
    company: 'Wegmans Food Markets Inc. || Dec. 2018 - Present',
    image: Wegmans,
  },
];

// Education details; rendered by Education.js
export const education = [
  {
    name: 'Boston University',
    year: '2020 - Present',
    degree: 'BA in Computer Science',
    description: "GPA: 3.80/4.0 || Dean's List (3 Semesters)",
    image: BU,
  },
  {
    name: 'Riverside High School',
    year: '2016 - 2020',
    degree: 'Advanced Studies Diploma',
    description: "GPA: 4.49/4.0 || Honor Roll (8 Semesters)",
    image: RVHS,
  },
];

// Skills; rendered by Skills.js
export const skills = [
  'C',
  'Linux',
  'HTML',
  'Git',
  'Python',
  'Bash',
  'CSS',
  'Docker',
  'Java',
  'Vim',
  'React',
  'AWS',
  'LaTeX',
  'QEMU',
  'VirtualBox',
  'Ansible',
];
