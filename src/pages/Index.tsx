import { useState, useEffect } from "react";
import { getProjects, getExperiences, type Project, type Experience } from "@/lib/storage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HCDSection from "@/components/HCDSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import DemoAppSection from "@/components/DemoAppSection";

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setProjects(getProjects());
    setExperiences(getExperiences());
  }, []);

  return (
    <div id="portfolio-content" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HCDSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <DemoAppSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
