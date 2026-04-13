import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Button, Input, Eyebrow } from './ui';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Placeholder authentication — replace with real backend in follow-up.
    window.setTimeout(() => {
      setLoading(false);
      if (!email || !password) {
        setError('Please enter your credentials.');
        return;
      }
      // Accept anything for the stub
      navigate('/');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <Eyebrow withDot className="mb-6">// EMPLOYEE CORNER · RESTRICTED</Eyebrow>
            <h1 className="font-brutal uppercase text-[2.5rem] md:text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-ink-50">
              Sign in.
            </h1>
            <p className="mt-4 font-plex text-ink-300">
              Internal tooling for the EnnBi team. Not for public access.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-ink-700 bg-ink-900 p-6 md:p-8 rounded-xs space-y-5"
          >
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@ennbi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              error={error || undefined}
              required
            />
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in →'}
            </Button>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 text-center pt-2">
              // Forgot password? Ping ops in Slack.
            </p>
          </form>

          <div className="mt-8 text-center">
            <RouterLink
              to="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 hover:text-mint-500 transition-colors"
            >
              ← Back to site
            </RouterLink>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
