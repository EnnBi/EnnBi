import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Section, Button, Input, Textarea, Eyebrow } from './ui';

const contactInfo = [
  { icon: <Mail size={16} />, label: 'Email', value: 'hr@ennbi.com', href: 'mailto:hr@ennbi.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+91 7889449921', href: 'tel:+917889449921' },
  { icon: <MapPin size={16} />, label: 'Address', value: 'Habbak Naseem Bagh, Hazratbal\nSrinagar, J&K — 190006' },
];

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder — wire up to a real backend (Formspree, Resend, etc.) in a follow-up.
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="// CH.07 · START A PROJECT" title="Tell us what you're building." variant="bordered">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16">
        {/* Left: info */}
        <div className="flex flex-col gap-8">
          <p className="font-plex text-lg text-ink-300 leading-[1.55] max-w-md">
            A short note goes a long way. Tell us what you&apos;re building, roughly what
            you need, and we&apos;ll come back within two working days with a honest take
            on scope, timeline, and fit.
          </p>

          <div className="border-t border-ink-700 pt-8 space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="mt-1 text-mint-500 flex-shrink-0">{c.icon}</div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-plex text-ink-100 hover:text-mint-500 transition-colors text-base break-all"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-plex text-ink-100 whitespace-pre-line text-base">
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Eyebrow withDot>RESPONSE WINDOW · 48H · MON–FRI</Eyebrow>
        </div>

        {/* Right: form */}
        <form onSubmit={onSubmit} className="border border-ink-700 bg-ink-900 p-6 md:p-8 rounded-xs">
          {sent ? (
            <div className="flex flex-col gap-4 py-8 text-center">
              <span className="font-brutal uppercase text-4xl text-mint-500">Sent.</span>
              <p className="font-plex text-ink-300">
                Thanks — we&apos;ll be in touch within two working days.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Name" name="name" placeholder="Your name" required />
              <Input label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Input label="Company" name="company" placeholder="(optional)" className="md:col-span-2" />
              <div className="md:col-span-2">
                <Textarea
                  label="Project brief"
                  name="message"
                  placeholder="What are you building? Who's it for? Rough timeline?"
                  rows={5}
                  required
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                  // we read every message
                </p>
                <Button type="submit" variant="primary" size="lg">
                  Send →
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
