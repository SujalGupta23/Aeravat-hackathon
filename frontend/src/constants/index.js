import {
  mobile,
  backend,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  teacher,
  sign,
  express,
  python,
  c,
  unity,
  vision,
  bot,
  block,
  flask,
  threejs,
  navneet,
  sid,
  komal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "I'm a Participant",
    icon: web,
  },
  {
    title: "I'm an Organiser",
    icon: mobile,
  },
  {
    title: "I'm a Vendor",
    icon: backend,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCV",
    icon: vision,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Assistant Teacher",
    company_name: "Abhyudaya",
    icon: teacher,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Assisted students from grades 7 to 10 in understanding and excelling in Physics, Chemistry, and Maths subjects.",
      "Mentored students individually and in groups, addressing their academic queries and providing guidance for their overall growth and development",
      "Maintained a positive and inclusive classroom environment, fostering students' curiosity, critical thinking, and problem-solving abilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Using this sports organizing web app has been a game-changer for our team! From seamless event registration to efficient communication tools, it's revolutionized how we coordinate our tournaments. Highly recommended for any sports enthusiast or organizer looking to streamline their events..",
    name: "Amey Agrawal",
    designation: "NISP Chairperson",
    company: "SPIT",
    image: navneet,
  },
  {
    testimonial:
      "As a sports event organizer, I've tried many platforms, but none compare to this web app. The intuitive interface, robust scheduling features, and responsive customer support make it the ideal solution for managing even the most complex competitions. .",
    name: "Darshini Kadame",
    designation: "Astrophysics Chairperson",
    company: "SPIT",
    image: komal,
  },
  {
    testimonial:
      "I can't express how much easier this sports organizing web app has made my life as an athlete. No more hassle with registration paperwork or confusion about schedules everything I need is right at my fingertips. .",
    name: "Aditya Agrawal",
    designation: "Oculus Ops Head",
    company: "SPIT",
    image: sid,
  },
];

const projects = [
  {
    name: "Sign Language Recognition",
    description:
      "Developed a sign language recognition system by creating a custom dataset, converting images to Numpy arrays, and implementing LSTM for processing sequential data.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
  {
    name: "Chat Bot",
    description:
      "A chatbot for a web project, implemented tokenization and stemming techniques. Processed text data, converted it into a numpy array. Built a linear model with three layers for effective interaction with users.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "NLTK",
        color: "green-text-gradient",
      },
    ],
    image: bot,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
  {
    name: "BlockChain Database",
    description:
      "Developed a blockchain-based database for hospitals, integrating smart contracts, REST API, and secure file storage. Efficiently managed and secured medical data using decentralized technology",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Pinata",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: block,
    source_code_link: "https://github.com/Vikas-Rajpurohit",
  },
];

export { services, technologies, experiences, testimonials, projects };
