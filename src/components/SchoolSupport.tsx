import React from 'react';
import { School, Award, TrendingUp, Users } from 'lucide-react';

const SchoolSupport = () => {
  const stats = [
    {
      icon: School,
      number: '100+',
      label: 'Schools',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      number: '35+',
      label: 'Years Experience',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transformative School Support
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Working with schools, authorities, and organizations, DOTLES enhances 
                pedagogy and school management through tailored programs that improve 
                student performance and outcomes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">School Performance</h3>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Student Engagement</span>
                    <span className="text-green-600 font-semibold">+25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Academic Results</span>
                    <span className="text-green-600 font-semibold">+30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-blue-500 h-2 rounded-full w-5/6"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Teacher Satisfaction</span>
                    <span className="text-green-600 font-semibold">+40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Serving educational communities nationwide</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSupport;