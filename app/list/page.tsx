import { cookies } from "next/headers";

import { MemeWrapper } from "@/components/MemeWrapper";
import { initialMemes, Meme } from "@/data/memes";

export default async function ListPage() {
  const cookieStore = await cookies();
  const memesCookie = cookieStore.get("memes");
  const memes: Meme[] = memesCookie
    ? JSON.parse(memesCookie.value)
    : initialMemes;

  return (
    <div className="flex flex-col gap-4 pt-12">
      <h1 className="text-2xl font-bold">Memes List</h1>
      <MemeWrapper initialMemes={memes} mode="list" />
    </div>
  );
}
