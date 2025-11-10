import { Calendar, Trophy, Star, Target, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const achievements = [
  {
    date: "2024",
    title: "Best Bulletin Editor (Newsletter)",
    description: "1st Runners Up for excellence in newsletter creation and editorial work, showcasing strong communication and creative skills.",
    icon: <Award className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2023-2024",
    title: "Best New Leo Club of the Year",
    description: "Winner at Leo District 306 B2 during my club presidency, leading the club to achieve the highest recognition for new clubs.",
    icon: <Trophy className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2023-2024",
    title: "Charter Club President - Leo Club of Gampaha Circle",
    description: "Founded and led the Leo Club of Gampaha Circle as its Charter President, establishing the foundation for future growth.",
    icon: <Users className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2023-2024",
    title: "Club President - Lions Club of Gampaha Circle",
    description: "Served as Club President of Lions Club of Gampaha Circle, leading community service initiatives and member development.",
    icon: <Star className="w-6 h-6" />,
    highlight: false
  },
  {
    date: "2022-2023",
    title: "Club Vice President - Leo Club of Gampaha Metro",
    description: "Supported club operations and member engagement as Vice President, contributing to the club's continued success.",
    icon: <Users className="w-6 h-6" />,
    highlight: false
  },
  {
    date: "2022-2023",
    title: "Zonal Coordinator - Leo District 306 B2",
    description: "Coordinated activities across multiple Leo clubs in the zone, fostering collaboration and district-wide initiatives.",
    icon: <Target className="w-6 h-6" />,
    highlight: false
  },
  {
    date: "2022",
    title: "2nd Runners Up - Leo District 306",
    description: "Achieved 2nd runners up recognition at Leo District 306 Sri Lanka and Maldives, showcasing outstanding leadership.",
    icon: <Award className="w-6 h-6" />,
    highlight: false
  },
  {
    date: "2021-2022",
    title: "Most Outstanding Omega Club of the Year",
    description: "Winner at Leo District 306 B2, leading the club to achieve the highest recognition for omega clubs in the district.",
    icon: <Trophy className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2021-2022",
    title: "Most Outstanding New Leo of the Year",
    description: "Winner at Leo District 306 B2 Sri Lanka and Maldives, recognized for exceptional contributions as a new member.",
    icon: <Star className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2021-2022",
    title: "Most Outstanding Club Treasurer of the Year",
    description: "Winner at Leo District 306 B2 Sri Lanka and Maldives for exemplary financial management and fiscal responsibility.",
    icon: <Trophy className="w-6 h-6" />,
    highlight: true
  },
  {
    date: "2021-2022",
    title: "Club Treasurer - Leo Club of Gampaha Metro",
    description: "Managed club finances and ensured transparent financial operations, setting the foundation for fiscal excellence.",
    icon: <Target className="w-6 h-6" />,
    highlight: false
  },
  {
    date: "2016",
    title: "College Head Prefect",
    description: "Led student body as Head Prefect, demonstrating early leadership abilities and commitment to service.",
    icon: <Shield className="w-6 h-6" />,
    highlight: false
  }
];

export function StoryTimeline() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-cyan-600">Journey</span> of Achievement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great story has defining moments. Here are the milestones that shaped my path 
            and the achievements that demonstrate my commitment to excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className={`${achievement.highlight ? 'ring-2 ring-cyan-200 shadow-lg' : 'shadow-md'} hover:shadow-xl transition-shadow duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${achievement.highlight ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-cyan-600" />
                            <span className="text-cyan-600 font-semibold">{achievement.date}</span>
                          </div>
                          <h3 className={`text-xl font-bold mb-2 ${achievement.highlight ? 'text-cyan-800' : 'text-gray-800'}`}>
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-600 border-4 border-white rounded-full shadow-md"></div>
                
                <div className="hidden lg:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}