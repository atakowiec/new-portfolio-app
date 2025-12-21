"use server"

import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
    </>
  )
}
