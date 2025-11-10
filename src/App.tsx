import { Hero } from './components/Hero';
import { PhotoCollage } from './components/PhotoCollage';
import { StoryTimeline } from './components/StoryTimeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PhotoCollage />
      <StoryTimeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}