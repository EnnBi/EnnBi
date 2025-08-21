import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Stats Section */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-blue-900 w-64 h-64 md:w-80 md:h-80 rounded-full absolute -z-10 -left-5 -top-5 opacity-10"></div>
              <div className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">50+</h3>
                    <p className="text-gray-600">Projects Delivered</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="text-4xl font-bold text-blue-900">99.9%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-900">EnnBi</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Welcome to <strong>EnnBi</strong> — where innovation meets precision. Something exciting is in the works! Our developers are fine-tuning every pixel and perfecting every line of code to create a digital experience that reflects our commitment to excellence. Just like our custom solutions, this platform is being built to inspire, empower, and elevate your business. Stay tuned—your next big idea might just start here!
            </p>

            <p className="text-gray-700 mb-6">
              Established in 2022, EnnBi is a trailblazing technology firm dedicated to crafting intelligent, scalable, and future-ready software solutions. With a blend of creativity and technical mastery, we help businesses of all sizes unlock growth and streamline operations.
            </p>

            <p className="text-gray-700 mb-6">
              Our expertise spans across industries including healthcare, fintech, e-commerce, education, and more. Whether it's a robust enterprise system or an agile startup MVP, we engineer platforms that not only perform—but redefine performance.
            </p>

            <p className="text-gray-700 mb-6">
              At EnnBi, we don’t just build software. We architect success.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "Agile Development",
                "24/7 Support",
                "Experienced Team",
                "Custom Solutions"
              ].map((feature, idx) => (
                <div className="flex items-center" key={idx}>
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
