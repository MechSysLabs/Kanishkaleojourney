import awardCeremony1 from 'figma:asset/6820eef08b9fe138f27392da7cc25c132ab9c0d8.png';
import mainCollagePhoto from 'figma:asset/e6da6bd7b38c2cce749b210e083242866173fb49.png';
import awardCeremony2 from 'figma:asset/a1e2936cff41966e9c0c60c7bdd7416e268d09f4.png';
import leoClubFormalPhoto from 'figma:asset/bb5dbba0932b303de18c9d632177437379ea9756.png';
import awardsDisplayPhoto from 'figma:asset/fa1b4bd6d6941c44625aaf2443dadc9fc618067c.png';

export function PhotoCollage() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moments That <span className="text-cyan-600">Define</span> Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through the milestones, events, and achievements that shaped my path in Leo Club leadership.
          </p>
        </div>

        {/* Large Featured Image - Award Ceremony with Banners */}
        <div className="mb-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={mainCollagePhoto}
              alt="Leo Club Award Ceremony - District 306 B2"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Second Row Photos Grid - All Leo Club Moments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={awardCeremony1}
              alt="Award Ceremony - Leo Excellence Award"
              className="w-full h-[450px] lg:h-[500px] object-cover"
            />
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={awardCeremony2}
              alt="Award Ceremony - Leadership Recognition"
              className="w-full h-[450px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={leoClubFormalPhoto}
              alt="Leo Club of Gampaha Circle - Formal Group Photo"
              className="w-full h-[450px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={awardsDisplayPhoto}
              alt="Awards Display - Team Achievement Showcase"
              className="w-full h-[450px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}