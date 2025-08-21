import React from 'react';
import { whyChooseUs } from '../data';
import { Timer, LineChart, Layout } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Timer':
        return <Timer size={32} className="text-blue-900" />;
      case 'LineChart':
        return <LineChart size={32} className="text-blue-900" />;
      case 'Layout':
        return <Layout size={32} className="text-blue-900" />;
      default:
        return <Timer size={32} className="text-blue-900" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-900">EnnBi</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-700 mb-8">
              We combine technical expertise with industry knowledge to deliver solutions that drive real business impact. Our approach is collaborative, agile, and focused on your success.
            </p>
            
            <div className="space-y-6">
              {whyChooseUs.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-blue-900 w-full h-full absolute z-0 rounded-lg transform rotate-3 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-xl relative z-10"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg z-20 max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Success Rate</h4>
                </div>
                <p className="text-gray-700">98% of our projects are delivered on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;