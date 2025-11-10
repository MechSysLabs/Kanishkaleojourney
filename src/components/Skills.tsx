import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Camera, Heart, Shield, Lightbulb } from 'lucide-react';
import photographyImage from 'figma:asset/bbb3abf8768cac89c46d65d757200e56c20ce7e7.png';

const skills = [
  {
    category: "Leadership Strengths",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-cyan-600",
    skills: ["Strategic Vision", "Team Empowerment", "Decision Making", "Conflict Resolution"]
  },
  {
    category: "Creative Powers",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-cyan-500",
    skills: ["Innovation Design", "Problem Solving", "Brand Strategy", "User Experience"]
  },
  {
    category: "Creative Media",
    icon: <Camera className="w-6 h-6" />,
    color: "bg-cyan-700",
    skills: ["Editing", "Photography"]
  },
  {
    category: "Lion Heart Qualities",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-cyan-800",
    skills: ["Courage", "Integrity", "Resilience", "Authenticity"]
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-cyan-600">Golden</span> Legacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give a Kindess and respect through strength and wisdom, I bring a powerful 
            combination of skills that drive results and inspire excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`${skillGroup.color} text-white p-2 rounded-lg`}>
                      {skillGroup.icon}
                    </div>
                    <span className="text-gray-800">{skillGroup.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photographyImage}
                alt="Photography and Editing Skills"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-cyan-200 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-cyan-100 rounded-2xl -z-20"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">The Leo Philosophy</h3>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                "Leadership isn't about being in charge. It's about taking care of those in your charge. 
                Like a lion protects its pride, I protect and elevate every project and team I lead."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}