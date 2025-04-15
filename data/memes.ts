export type Meme = {
  id: number;
  name: string;
  imageUrl: string;
  likes: number;
};

export const initialMemes: Meme[] = [
  {
    id: 1,
    name: "AI vs Programmer",
    imageUrl: "/images/memes/ai-code.jpg",
    likes: 85,
  },
  {
    id: 2,
    name: "Bugs :)",
    imageUrl: "/images/memes/bugs.jpg",
    likes: 92,
  },
  {
    id: 3,
    name: "Family company",
    imageUrl: "/images/memes/family-company.jpg",
    likes: 76,
  },
  {
    id: 4,
    name: "Human logic",
    imageUrl: "/images/memes/logic.jpg",
    likes: 63,
  },
  {
    id: 5,
    name: "Just a minute",
    imageUrl: "/images/memes/minute.jpg",
    likes: 45,
  },
  {
    id: 6,
    name: "Some old code",
    imageUrl: "/images/memes/old-code.jpg",
    likes: 88,
  },
  {
    id: 7,
    name: "Delicious food",
    imageUrl: "/images/memes/shit.jpg",
    likes: 29,
  },
  {
    id: 8,
    name: "Promising future",
    imageUrl: "/images/memes/future.jpg",
    likes: 91,
  },
  {
    id: 9,
    name: "Cat developer",
    imageUrl: "/images/memes/cat.jpg",
    likes: 53,
  },
  {
    id: 10,
    name: "Life memes",
    imageUrl: "/images/memes/life-memes.jpg",
    likes: 67,
  },
];
