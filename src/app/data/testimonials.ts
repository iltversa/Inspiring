// data/testimonials.ts
export type Testimonial = {
  id: string;
  projectLabel: string;
  images: string[];
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  reply?: { text: string; from?: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    projectLabel: "Community Mobile App — LincolnBerean, USA",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"],
    quote:
      "Inspiring Life Technologies helped us with our mobile app. Their team was incredibly helpful throughout the entire process. Each member of the team took the time to understand our company's vision, needs, and goals for the app and worked tirelessly to deliver an outstanding product.",
    author: "Jeff Petersen",
    role: "LincolnBerean, USA",
    avatar: "/img/jeff.png",
    reply: { text: "We'll love to work with you ❤️", from: "InspiringLife" },
  },
  {
    id: "t2",
    projectLabel: "Web Development — Archrival, USA",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"],
    quote:
      "InspiringLife provided us with an efficient and reliable service. Their team was available whenever we needed them and made sure that we were happy with the end results. We'd recommend Inspiring life technologies to anyone in need of a reliable app/web development partner.",
    author: "Client Rangi",
    role: "CEO, Archrival, USA",
    avatar: "/img/Rangi.jpeg",
    reply: { text: "We'll love to work with you ❤️", from: "InspiringLife" },
  },
  {
    id: "t3",
    projectLabel: "Cross-Platform App — VersaClimber, USA",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"],
    quote:
      "I loved how ILT took the time to understand our needs and helped us create a universal app tailored to our specific requirements, running seamlessly on all platforms and that too on a very tight schedule without any hiccups. Happy to recommend it. Cheers",
    author: "Shane Schieffer",
    role: "Tech Head, VersaClimber, USA",
    avatar: "/img/Shane.png",
    reply: { text: "We'll love to work with you ❤️", from: "InspiringLife" },
  },
];
