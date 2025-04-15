"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import clsx from "clsx";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/ThemeSwitch";
import { siteConfig } from "@/config/site";

// SVG-іконка для логотипу (смайлик-мем)
const MemeLogo = () => (
  <svg
    className="w-8 h-8 text-black-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-gray-800 dark:to-gray-900 shadow-md rounded-b-xl"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink className="flex items-center gap-2" href="/">
            <MemeLogo />
            <p className="font-bold text-lg text-gray-800 dark:text-gray-100">
              Memasik
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "data-[active=true]:text-blue-600 data-[active=true]:font-medium",
                  "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className="lg:hidden text-gray-700 dark:text-gray-200" />
      </NavbarContent>
      <NavbarMenu className="bg-white dark:bg-gray-800">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
