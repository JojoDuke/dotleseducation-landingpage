import React from 'react';
import { GraduationCap, Users, BookOpen, Target } from 'lucide-react';

const ExpertGuidance = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Personalized guidance for academic success'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Interactive learning environments'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Access to extensive educational materials'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Strategic planning for career objectives'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Expert Educational Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DOTLES offers comprehensive educational and career guidance to students, parents, 
            and professionals. Our experienced consultants help individuals make informed 
            decisions about academic and career pathways.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Images */}
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative group">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-orange-100 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;