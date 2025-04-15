"use client";

import { useState, useEffect } from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableColumn } from "@heroui/table";
import { Button } from "@heroui/button";
import { MemeModal } from "@/components/MemeModal";
import { Meme } from "@/data/memes";

type Props = {
  initialMemes: Meme[];
  setMemes: React.Dispatch<React.SetStateAction<Meme[]>>;
};

export const MemeTable = ({ initialMemes, setMemes }: Props) => {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [baseUrl, setBaseUrl] = useState("");

  const handleSave = (updatedMeme: Meme) => {
    setMemes((prev) =>
      prev.map((meme) => (meme.id === updatedMeme.id ? updatedMeme : meme))
    );
    setSelectedMeme(null);
  };

  const handleDelete = (id: number) => {
    setMemes((prev) => prev.filter((meme) => meme.id !== id));
  };

  // Встановлюємо baseUrl тільки на клієнті після монтування
  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const getImageUrl = (imageUrl: string): string => {
    if (/^https?:\/\//.test(imageUrl)) {
      return imageUrl;
    }
    return baseUrl ? `${baseUrl}${imageUrl}` : imageUrl;
  };

  return (
    <>
      <Table
        aria-label="Meme Table"
        classNames={{
          base: "border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden",
          table: "min-w-full",
          th: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 text-left",
          td: "py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200",
        }}
      >
        <TableHeader>
          <TableColumn className="w-[50px]">ID</TableColumn>
          <TableColumn className="w-[200px]">Name</TableColumn>
          <TableColumn className="w-[300px]">Image URL</TableColumn>
          <TableColumn className="w-[100px]">Likes</TableColumn>
          <TableColumn className="w-[150px]">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {initialMemes.map((meme) => (
            <TableRow key={meme.id} className="table-row-hover">
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>
                <a
                  href={getImageUrl(meme.imageUrl)} // Використовуємо утиліту
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200 truncate max-w-xs block"
                >
                  {getImageUrl(meme.imageUrl)}
                  {/* {meme.imageUrl} Відображаємо оригінальний imageUrl */}
                </a>
              </TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  color="primary"
                  size="sm"
                  onPress={() => setSelectedMeme(meme)}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onPress={() => handleDelete(meme.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedMeme && (
        <MemeModal
          meme={selectedMeme}
          onSave={handleSave}
          onClose={() => setSelectedMeme(null)}
        />
      )}
    </>
  );
};