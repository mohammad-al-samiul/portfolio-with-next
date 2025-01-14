import Hero from "@/components/ui/Hero";
import Education from "./education/page";

import Skills from "./skills/page";
import Contact from "./contact/page";
import FeatureProjects from "@/components/featureProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Education />
      <FeatureProjects />
      <Skills />
      <Contact />
    </div>
  );
}
