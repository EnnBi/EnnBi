import React from 'react';
import { services } from '../data';
import { Code, Smartphone, Cloud, Brain } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={24} />;
      case 'Smartphone':
        return <Smartphone size={24} />;
      case 'Cloud':
        return <Cloud size={24} />;
      case 'Brain':
        return <Brain size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-8">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-black group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;