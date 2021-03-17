import { nanoid } from "nanoid";

export const defaultTitle = "Sami Kalammallah Blog";

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
