import { nanoid } from "nanoid";

export const defaultTitle: string = "Sami Kalammallah Blog";

export const profile = {
  fullName: "Sami Kalammallah",
  firstName: "Sami",
  lastName: "Kalammallah",
};

export const contact = {
  email: "skalexsong@gmail.com",
  phone: "+6289657511134",
};

export const socialMedia = {
  networks: [
    {
      id: nanoid(),
      name: "Instagram",
      url: "https://www.instagram.com/samikalamallah/",
    },
    {
      id: nanoid(),
      name: "Facebook",
      url: "https://web.facebook.com/SamiKalamallah",
    },
    {
      id: nanoid(),
      name: "Linkedin",
      url: "https://www.linkedin.com/in/samikalammallah/",
    },
    {
      id: nanoid(),
      name: "Github",
      url: "https://github.com/samx23",
    },
    {
      id: nanoid(),
      name: "Whatsapp",
      url: "https://wa.me/+6289657511134",
    },
  ],
};

export const project = {
  githubLink: (repo, theme) =>
    `https://github-readme-stats.vercel.app/api/pin/?username=samx23&repo=${repo}&theme=${theme}`,
  repo: [
    {
      id: nanoid(),
      name: "Random Ayah Generator",
      repo: "read-random-ayah",
      link: "https://github.com/SamX23/read-random-ayah",
    },
    {
      id: nanoid(),
      name: "Personal Website",
      repo: "my-blog",
      link: "https://github.com/SamX23/my-blog",
    },
    {
      id: nanoid(),
      name: "Group Chat App",
      repo: "group-chat-app",
      link: "https://github.com/SamX23/group-chat-app",
    },
    {
      id: nanoid(),
      name: "Simple movie catalog",
      repo: "moviedb-web-app",
      link: "https://github.com/SamX23/moviedb-web-app",
    },
    {
      id: nanoid(),
      name: "Pokedex App",
      repo: "pokedex-dicoding",
      link: "https://github.com/SamX23/pokedex-dicoding",
    },
    {
      id: nanoid(),
      name: "Google Clone",
      repo: "search-engine",
      link: "https://github.com/SamX23/search-engine",
    },
    {
      id: nanoid(),
      name: "Hangman Python",
      repo: "hangman-overhaul",
      link: " https://github.com/SamX23/hangman-overhaul",
    },
  ],
};
