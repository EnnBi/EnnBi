import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Section, Card, Badge, Eyebrow } from './ui';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
};

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The IT Revolution: Then and Now',
    excerpt:
      'From mainframes to edge AI — a short tour of the shifts that reshaped enterprise software, and what it means for teams building today.',
    date: '2026-03-18',
    readTime: '7 min',
    tag: 'Essay',
  },
  {
    id: '2',
    title: 'Why we write design specs before code',
    excerpt:
      'Specs are slower on day one and faster on day ten. A short defense of doing the thinking work before the building work.',
    date: '2026-02-22',
    readTime: '5 min',
    tag: 'Engineering',
  },
  {
    id: '3',
    title: 'Shipping LLM features without shipping LLM theater',
    excerpt:
      'The difference between products that use AI and products that perform using AI — and why the second kind costs you users.',
    date: '2026-01-14',
    readTime: '9 min',
    tag: 'AI',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <Section id="blog-intro" eyebrow="// WRITING · 2026" title="Field Notes." containerSize="md">
          <p className="font-plex text-lg text-ink-300 max-w-2xl">
            Short posts on what we&apos;ve learned building software. Opinions are
            our own, delivery dates are approximate.
          </p>
        </Section>

        <Section variant="bordered" containerSize="md" className="pt-0 md:pt-12">
          <div className="grid grid-cols-1 gap-4">
            {posts.map((p, i) => (
              <Card key={p.id} variant="outlined" padding="lg" interactive>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-brutal uppercase text-[2.5rem] leading-none text-mint-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Badge variant="outline" size="sm">{p.tag}</Badge>
                </div>
                <RouterLink
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  className="block group"
                >
                  <h2 className="font-brutal uppercase text-[1.75rem] md:text-[2rem] leading-[1.1] tracking-[-0.015em] text-ink-50 group-hover:text-mint-500 transition-colors duration-base">
                    {p.title}
                  </h2>
                </RouterLink>
                <p className="mt-4 font-plex text-ink-300 leading-[1.55] max-w-2xl">
                  {p.excerpt}
                </p>
                <div className="mt-6 pt-5 border-t border-ink-700 flex items-center gap-4">
                  <Eyebrow>{new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</Eyebrow>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
                    · {p.readTime}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-ink-700">
            <Eyebrow withDot>// MORE COMING · STAY SUBSCRIBED</Eyebrow>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
