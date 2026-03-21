import { useState, useEffect } from "react";
import { getProjects, getExperiences, type Project, type Experience } from "@/lib/storage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HCDSection from "@/components/HCDSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setProjects(getProjects());
    setExperiences(getExperiences());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HCDSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
