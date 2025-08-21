import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubscribed(true);
    setLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Tech Trends
          </h2>
          <p className="text-blue-200 mb-8">
            Get daily updates on AI, Data Science, Cloud Computing, and emerging technologies. 
            Join our community of tech enthusiasts and stay ahead of the curve.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Daily Tech Insights</h3>
                  <p className="text-blue-200 text-sm">Latest developments in AI, ML, and emerging technologies</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Industry Analysis</h3>
                  <p className="text-blue-200 text-sm">Expert insights on tech trends and market analysis</p>
                </div>
              </div>
            </div>

            {subscribed ? (
              <div className="bg-green-500/20 text-green-200 p-4 rounded-lg">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm">You'll receive our next newsletter in your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 text-blue-200 text-sm">
            <p>Join 5,000+ tech professionals who get our weekly newsletter.</p>
            <p className="mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;