import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechMarquee from "@/components/TechMarquee";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechMarquee />
        <FeaturedProject />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
