import { About } from "./components/About.tsx"
import { Achievements } from "./components/Achievements.tsx"
import { Certifications } from "./components/Certifications.tsx"
import { Contact } from "./components/Contact.tsx"
import { Experience } from "./components/Experience.tsx"
import { Footer } from "./components/Footer.tsx"
import { Hero } from "./components/Hero.tsx"
import { Journey } from "./components/Journey.tsx"
import { Navbar } from "./components/Navbar.tsx"
import { Projects } from "./components/Projects.tsx"
import { Publication } from "./components/Publication.tsx"
import { Seo } from "./components/Seo.tsx"
import { Skills } from "./components/Skills.tsx"
import { useReveal } from "./hooks/useReveal.ts"

export default function App() {
  useReveal()

  return (
    <>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Journey />
        <Achievements />
        <Publication />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
