import React from 'react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-300 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-blue-100">
            Don't just take our word for it - here's what our clients have to say about working with Ennbi Softwares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-blue-800 rounded-lg p-8 relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-full p-1">
                <div className="bg-blue-900 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="mt-6 mb-8">
                  <p className="italic text-blue-100">"{testimonial.quote}"</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;