import React from 'react';
import { Compass, BookOpen, FileText, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: 'Educational and Career Guidance',
      description: 'Personalized support for education and career choices.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Standardized Test Preparation',
      description: 'Comprehensive prep for IELTS, TOEFL, SAT, ACT, GRE, GMAT, etc.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Policy Development and Analysis',
      description: 'Support for education policy through data review, reforms, and planning.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational solutions tailored to meet your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-blue-600 hover:text-orange-500 font-semibold flex items-center gap-2 transition-colors duration-200">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto">
            View All Services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;