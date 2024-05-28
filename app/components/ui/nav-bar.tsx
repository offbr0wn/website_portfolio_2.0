"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <Navbar
      ref={ref}
      shouldHideOnScroll
      className={` absolute inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
        isIntersecting
          ? "bg-zinc-900/0 border-transparent"
          : "bg-zinc-900/500  border-zinc-800 "
      }`}
    >
      <NavbarContent justify="start">
        <NavbarItem>
          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <IoMdArrowRoundBack className="w-6 h-6 " />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            href="/projects"
            aria-current="page"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/contact"
            aria-current="page"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
