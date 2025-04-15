export type Meme = {
  id: number;
  name: string;
  imageUrl: string;
  likes: number;
};

export const initialMemes: Meme[] = [
  { id: 1, name: "Just one minute?", imageUrl: "/images/memes/call.jpg", likes: 85 },
  { id: 2, name: "At the store", imageUrl: "/images/memes/at-store.jpg", likes: 92 },
  { id: 3, name: "Dark person", imageUrl: "/images/memes/dark-theme.jpg", likes: 76 },
  { id: 4, name: "Awkward situation", imageUrl: "/images/memes/delivery.jpg", likes: 63 },
  { id: 5, name: "Tramp building", imageUrl: "/images/memes/tram.jpg", likes: 45 },
  { id: 6, name: "English lesson", imageUrl: "/images/memes/english.jpg", likes: 88 },
  { id: 7, name: "Great melon", imageUrl: "/images/memes/melon.jpg", likes: 29 },
  { id: 8, name: "Your memory", imageUrl: "/images/memes/memory.jpg", likes: 91 },
  { id: 9, name: "Anxious thoughts", imageUrl: "/images/memes/thoughts.jpg", likes: 53 },
  { id: 10, name: "Happy, happy, happy", imageUrl: "/images/memes/sunny-weather.jpg", likes: 67 },
];