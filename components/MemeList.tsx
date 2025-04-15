"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { Meme } from "@/data/memes";

const HeartIcon = () => (
  <svg
    className="w-5 h-5 inline-block mr-1 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
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
          <CardBody className="p-0 flex justify-center">
            <div className="relative flex justify-center overflow-hidden w-full">
              <Image
                alt={meme.name}
                className="object-contain object-center w-full h-64 transition-transform duration-300 hover:scale-105"
                height={250}
                src={getImageUrl(meme.imageUrl)}
                width={300}
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
              isExternal
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center gap-1"
              href={getImageUrl(meme.imageUrl)}
            >
              <span>View Image</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};