import { nanoid } from "nanoid";

export const defaultTitle: string = "Sami Kalammallah Blog";

export const profile = {
  fullName: "Sami Kalammallah",
  firstName: "Sami",
  lastName: "Kalammallah",
};

export const contact = {
  email: "skalexsong@gmail.com",
};

export const socialMedia = {
  networks: [
    {
      id: nanoid(),
      name: "Codepen",
      url: "https://codepen.io/samikalammallah",
    },
    {
      id: nanoid(),
      name: "Freecodecamp",
      url: "https://www.freecodecamp.org/samikalammallah",
    },
    {
      id: nanoid(),
      name: "Github",
      url: "https://github.com/samx23",
    },
    {
      id: nanoid(),
      name: "Linkedin",
      url: "https://www.linkedin.com/in/samikalammallah/",
    },
    {
      id: nanoid(),
      name: "Email",
      url: "mailto:skalexsong@gmail.com",
    },
    {
      id: nanoid(),
      name: "MonkeyType",
      url: "https://monkeytype.com/profile/samx23",
    },
  ],
};

export const project = {
  githubLink: (repo, theme) =>
    `https://github-readme-stats.vercel.app/api/pin/?username=samx23&repo=${repo}&theme=${theme}`,
  repo: [
    {
      id: nanoid(),
      name: "Food Order App",
      repo: "food-order-app",
      link: "https://github.com/SamX23/food-order-app",
      tech: "htmlcssjs",
    },
    {
      id: nanoid(),
      name: "Random Ayah Generator",
      repo: "read-random-ayah",
      link: "https://github.com/SamX23/read-random-ayah",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Group Chat App",
      repo: "group-chat-app",
      link: "https://github.com/SamX23/group-chat-app",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Personal Website",
      repo: "my-blog",
      link: "https://github.com/SamX23/my-blog",
      tech: "nextjs",
    },
    {
      id: nanoid(),
      name: "Simple movie catalog",
      repo: "moviedb-web-app",
      link: "https://github.com/SamX23/moviedb-web-app",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Google Clone",
      repo: "search-engine",
      link: "https://github.com/SamX23/search-engine",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Messenger Clone",
      repo: "messenger-clone",
      link: "https://github.com/SamX23/messenger-clone",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Amazon Clone",
      repo: "amazon-clone",
      link: "https://github.com/SamX23/amazon-clone",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "URL Shortener",
      repo: "url-shortener",
      link: "https://github.com/SamX23/url-shortener",
      tech: "react",
    },
    {
      id: nanoid(),
      name: "Landing Page Shoes Shop",
      repo: "landing-page-sepatu",
      link: "https://github.com/SamX23/landing-page-sepatu",
      tech: "nextjs",
    },
    {
      id: nanoid(),
      name: "Pokedex App",
      repo: "pokedex-dicoding",
      link: "https://github.com/SamX23/pokedex-dicoding",
      tech: "htmlcssjs",
    },
    {
      id: nanoid(),
      name: "Delicious Dish",
      repo: "dicoding-front-end-expert-2",
      link: "https://github.com/SamX23/dicoding-front-end-expert-2",
      tech: "htmlcssjs",
    },
  ],
};
