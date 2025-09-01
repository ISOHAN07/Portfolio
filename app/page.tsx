import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { navItems } from "..";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <About />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
