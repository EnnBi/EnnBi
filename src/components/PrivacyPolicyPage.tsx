import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Section, Eyebrow } from './ui';

const LAST_UPDATED = 'October 7, 2026';
const CONTACT_EMAIL = 'hr@ennbi.com';

interface PolicySection {
  id: string;
  title: string;
  body: React.ReactNode;
}

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-plex text-base leading-[1.65] text-ink-300">{children}</p>
);

const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 font-plex text-base leading-[1.65] text-ink-300">
        <span className="text-mint-500 mt-0.5">→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const mail = (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="text-mint-500 underline underline-offset-4 decoration-mint-500/70 hover:decoration-mint-500 transition-colors"
  >
    {CONTACT_EMAIL}
  </a>
);

const sections: PolicySection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <P>
          EnnBi (&ldquo;EnnBi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a software
          engineering company headquartered in Srinagar, India. This policy explains what
          personal information we collect through this website, why we collect it, and the
          choices you have.
        </P>
        <P>
          By using this website you acknowledge the practices described here. If you do not
          agree with them, please do not submit personal information through the site.
        </P>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <P>We collect only what is needed to respond to you and to run the site:</P>
        <List
          items={[
            <>
              <strong className="text-ink-100">Information you give us</strong> &mdash; your
              name, email address, phone number, company, and the contents of any message you
              send through the contact form or by email.
            </>,
            <>
              <strong className="text-ink-100">Employee Corner sign-in details</strong> &mdash;
              credentials entered on the Employee Corner page, which is intended for EnnBi
              staff only.
            </>,
            <>
              <strong className="text-ink-100">Technical data</strong> &mdash; standard
              request data such as IP address, browser type, and pages requested, which our
              hosting provider records in server logs when you load the site.
            </>,
          ]}
        />
        <P>
          We do not knowingly collect personal information from children under 16, and the
          site is not directed at them.
        </P>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    title: 'How we use your information',
    body: (
      <List
        items={[
          'To reply to enquiries, proposals, and support or hiring requests.',
          'To discuss, scope, and deliver software engineering work you ask us about.',
          'To keep the website secure, diagnose technical problems, and prevent abuse.',
          'To meet legal, accounting, and regulatory obligations.',
        ]}
      />
    ),
  },
  {
    id: 'cookies-and-tracking',
    title: 'Cookies and tracking',
    body: (
      <P>
        This website does not set advertising or analytics cookies and does not run
        third-party analytics or tracking scripts. If that changes, we will update this
        policy and, where required by law, ask for your consent first.
      </P>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services',
    body: (
      <>
        <P>
          We do not sell your personal information. The site relies on a few providers that
          can receive technical data (such as your IP address) when your browser loads
          resources from them:
        </P>
        <List
          items={[
            'GitHub Pages — hosts the website.',
            'Google Fonts — serves the typefaces used on the site.',
            'Postimages (postimg.cc) — serves our logo image.',
          ]}
        />
        <P>
          Each provider handles that data under its own privacy policy. We may also share
          information with professional advisers or authorities where the law requires it.
        </P>
      </>
    ),
  },
  {
    id: 'retention-and-security',
    title: 'Retention and security',
    body: (
      <>
        <P>
          We keep correspondence and project information only as long as needed for the
          purposes above or as the law requires, and then delete or anonymise it.
        </P>
        <P>
          We use reasonable technical and organisational measures to protect your
          information, including HTTPS for all traffic to this site. No method of
          transmission or storage is completely secure, so we cannot guarantee absolute
          security.
        </P>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International transfers',
    body: (
      <P>
        We work with clients worldwide, so information you send us may be processed in India
        and in other countries where we or our providers operate. Those countries may have
        data-protection rules different from your own.
      </P>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <P>
          Depending on where you live, you may have the right to access, correct, delete, or
          export the personal information we hold about you, to object to or restrict certain
          processing, and to withdraw consent you previously gave.
        </P>
        <P>To exercise any of these rights, email {mail}. We will respond within a reasonable time.</P>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <P>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at
        the top of this page shows when it last changed. Material changes will be reflected
        here.
      </P>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <P>
        Questions about this policy or your information? Email {mail} or write to EnnBi,
        Srinagar, India.
      </P>
    ),
  },
];

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy — EnnBi';
    return () => {
      document.title = 'EnnBi — Custom Software & Technology Solutions';
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <Section eyebrow="// LEGAL · PRIVACY" title="Privacy policy." containerSize="md" className="pb-12 md:pb-16">
          <Eyebrow className="mb-6">LAST UPDATED · {LAST_UPDATED}</Eyebrow>
          <p className="font-plex text-lg text-ink-300 max-w-2xl leading-[1.55]">
            Plain-language summary: we collect only what you send us, we don&apos;t sell it,
            and the site doesn&apos;t track you with analytics or advertising cookies.
          </p>
        </Section>

        <Section variant="bordered" containerSize="md" className="pt-12 md:pt-16">
          <div className="space-y-14">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-brutal uppercase text-xl leading-none text-mint-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-brutal uppercase text-2xl leading-[1.1] tracking-[-0.015em] text-ink-50">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4">{s.body}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-ink-700">
            <RouterLink
              to="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors"
            >
              ← Back home
            </RouterLink>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
