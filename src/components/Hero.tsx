import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import leoImage from 'figma:asset/d48ae9bb005eb12e53c3b3f62cf9ad89284858e3.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to My Story
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              I'm <span className="text-cyan-600">Leo</span>
              <br />
              <span className="text-2xl lg:text-4xl text-gray-700">The Lion-Hearted Creator</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Like the king of the jungle, I lead with courage, create with passion, 
              and inspire with every project. My journey is one of transformation, 
              achievement, and relentless pursuit of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover My Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={leoImage}
                alt="Leo with Achievement Awards"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-cyan-200 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-cyan-100 rounded-2xl -z-20"></div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="mx-auto animate-bounce text-cyan-600" size={32} />
        </div>
      </div>
    </section>
  );
}