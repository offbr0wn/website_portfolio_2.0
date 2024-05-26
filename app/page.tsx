"use client";

import { useEffect, useRef } from "react";

import NextUiCard from "./components/ui/next-ui-card";
import HeroSection from "./components/(HomeScreen)/heroSection";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionSectionHomeScreen from "./components/(HomeScreen)/second-section";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* FIrst section */}
      <section>
        <HeroSection />
      </section>
      <section>
        {/* Second Section */}
        <SectionSectionHomeScreen />
      </section>
    </>
  );
}
