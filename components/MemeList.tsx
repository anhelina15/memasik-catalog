"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Meme } from "@/data/memes";

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5 inline-block mr-1 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

type Props = {
  initialMemes: Meme[];
};

export const MemeList = ({ initialMemes }: Props) => {
  const [baseUrl, setBaseUrl] = useState("");

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {initialMemes.map((meme) => (
        <Card
          key={meme.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn"
        >
          <CardHeader className="flex justify-center p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1 text-center">
              {meme.name}
            </h3>
          </CardHeader>
          <CardBody className="p-0">
            <div className="relative overflow-hidden">
              <Image
                src={getImageUrl(meme.imageUrl)}
                alt={meme.name}
                width={300}
                height={250}
                className="object-contain w-full h-64 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </CardBody>
          <CardFooter className="p-4 flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <HeartIcon />
              <span>{meme.likes} Likes</span>
            </p>
            <Link
              href={getImageUrl(meme.imageUrl)}
              isExternal
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <span>View Image</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};