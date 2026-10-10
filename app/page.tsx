import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { CoreExpertise } from '@/sections/CoreExpertise';
import { Backend } from '@/sections/Backend';
import { Cloud } from '@/sections/Cloud';
import { AI } from '@/sections/AI';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { ResearchCerts } from '@/sections/ResearchCerts';
import { Writing } from '@/sections/Writing';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <div className="container-1180">
      <Header />
      <main>
        <Hero />
        <CoreExpertise />
        <Backend />
        <Cloud />
        <AI />
        <Projects />
        <Experience />
        <ResearchCerts />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
