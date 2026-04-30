import { useEffect } from 'react';

const HERO_VIDEO_SRC = '/hero-video.mp4?v=10000';

if (import.meta.env.DEV) {
  setTimeout(() => {
    const videos = [...document.querySelectorAll('video')];

    console.log('ACTIVE VIDEOS:', videos.map((v, index) => ({
      index,
      currentSrc: v.currentSrc,
      srcAttribute: v.getAttribute('src'),
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight,
      className: v.className,
    })));
  }, 1500);
}

const projects = [
  {
    name: 'Aetheris Voyage',
    tags: ['Landing Page', 'Visual Direction', 'Launch Design'],
    tone: 'from-white/20 via-white/5 to-transparent',
    preview: 'https://motionsites.ai/assets/hero-aetheris-voyage-preview-BGJn1z4t.gif',
    alt: 'Aetheris Voyage project preview',
  },
  {
    name: 'ASME',
    tags: ['Conversion UX', 'Brand Website', 'AI Workflow'],
    tone: 'from-white/15 via-white/10 to-transparent',
    preview: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    alt: 'ASME project preview',
  },
  {
    name: 'Impressive',
    tags: ['Website Design', 'Motion UI', 'Brand System'],
    tone: 'from-white/10 via-white/5 to-white/15',
    preview: 'https://motionsites.ai/assets/hero-impressive-preview-BCJtlSs2.gif',
    alt: 'Impressive project preview',
  },
  {
    name: 'CodeNest',
    tags: ['SaaS Website', 'Frontend Build', 'Design System'],
    tone: 'from-white/25 via-white/5 to-transparent',
    preview: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    alt: 'CodeNest project preview',
  },
];

const services = [
  {
    title: 'Web Strategy',
    items: ['Offer positioning', 'Audience research', 'Page architecture', 'Conversion messaging', 'Creative direction'],
  },
  {
    title: 'Premium Web Design',
    items: ['Landing pages', 'Brand websites', 'Interface systems', 'Responsive layouts', 'Cinematic visuals'],
  },
  {
    title: 'Launch Assets',
    items: ['Campaign pages', 'Product sections', 'Paid social assets', 'Founder-led content', 'Conversion creatives'],
  },
  {
    title: 'AI-Assisted Systems',
    items: ['Content structure', 'Reusable sections', 'Creative testing', 'Launch workflows', 'Repeatable formats'],
  },
];

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

const companyLinks = [
  { label: 'About', href: '#approach' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Strategy', href: '#services' },
  { label: 'Web Design', href: '#services' },
  { label: 'Launch Assets', href: '#services' },
  { label: 'Content Systems', href: '#services' },
];

const followLinks = [
  { label: 'YouTube', href: '#contact' },
  { label: 'Instagram', href: '#contact' },
  { label: 'LinkedIn', href: '#contact' },
];

function RevealText({ as: Component = 'span', className = '', children }) {
  return (
    <Component className={`text-reveal ${className}`}>
      {children.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="reveal-word" style={{ '--delay': `${index * 45}ms` }}>
          {word}{index === children.split(' ').length - 1 ? '' : ' '}
        </span>
      ))}
    </Component>
  );
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal, .text-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black font-barlow text-white">
      <video
        className="hero-video absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <nav className="absolute left-1/2 top-6 z-20 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between text-white sm:top-8">
        <a href="#home" className="fixed left-4 top-6 text-3xl font-semibold tracking-[-0.06em] text-white transition-colors hover:text-white/80 sm:left-6 sm:top-8 sm:text-4xl">
          AISTUDIO
        </a>
        <div className="hidden items-center gap-1 rounded-full sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-light text-white transition-colors hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="liquid-glass rounded-full px-5 py-2 text-sm font-light text-white transition-colors hover:bg-white/10"
        >
          Book a Call
        </a>
      </nav>

      <section id="home" className="relative z-10 flex min-h-screen items-end justify-center px-4 pb-[250px] pt-32 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <span className="absolute left-0 top-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute right-0 top-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute bottom-0 left-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />
          <span className="absolute bottom-0 right-0 h-[7px] w-[7px] bg-white" aria-hidden="true" />

          <a
            href="#approach"
            className="mb-8 rounded-full bg-white/10 p-1 text-sm font-light text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <span className="block rounded-full bg-white/90 px-5 py-2 text-neutral-950 backdrop-blur-md">
              AI Web Design Studio
            </span>
          </a>

          <h1 className="max-w-4xl text-[48px] font-light leading-[0.95] tracking-[-0.055em] text-white sm:text-[64px]">
            <span className="block">Premium AI-powered websites</span>
            <span className="block font-instrument italic tracking-[-0.035em]">that launch faster and convert better</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base font-light leading-7 text-white/75 sm:text-lg">
            We design and build cinematic landing pages, AI-assisted websites, and conversion-focused digital experiences for founders, creators, and modern businesses.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              Book a Free Call
            </a>
            <a
              href="#work"
              className="liquid-glass rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              View Selected Work
            </a>
          </div>
        </div>
      </section>

      <section id="approach" className="relative z-10 bg-black px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <RevealText as="p" className="mb-8 text-sm font-light uppercase tracking-[0.32em] text-white/60">Our Approach</RevealText>
            <h2 className="text-reveal max-w-5xl text-[44px] font-light leading-[1.02] tracking-[-0.055em] text-white sm:text-[68px] lg:text-[82px]">
              {['We', 'build', 'premium', 'websites'].map((word, index) => (
                <span key={word} className="reveal-word" style={{ '--delay': `${index * 45}ms` }}>{word} </span>
              ))}
              {['that', 'make', 'your', 'brand', 'feel', 'credible'].map((word, index) => (
                <span key={word} className="reveal-word font-instrument italic tracking-[-0.02em]" style={{ '--delay': `${(index + 4) * 45}ms` }}>{word} </span>
              ))}
              {['and', 'turn', 'visitors', 'into', 'clients', 'with', 'clarity.'].map((word, index) => (
                <span key={`${word}-${index}`} className="reveal-word" style={{ '--delay': `${(index + 10) * 45}ms` }}>{word}{index === 6 ? '' : ' '}</span>
              ))}
            </h2>
            <RevealText as="p" className="mt-8 max-w-4xl text-lg font-light leading-8 text-white/75 sm:text-xl">
              From positioning and visual direction to responsive frontend delivery, we turn your offer into a polished web experience built for launch.
            </RevealText>
            <a
              href="#services"
              className="scroll-reveal liquid-glass-strong mt-10 inline-flex rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              See Our Process
            </a>
          </div>

          <div className="liquid-glass rounded-[28px] p-6 transition-colors hover:bg-white/5">
            <p className="text-sm font-light uppercase tracking-[0.28em] text-white/50">Built For</p>
            <p className="mt-10 font-instrument text-5xl italic leading-none text-white">AI</p>
            <p className="mt-4 text-base font-light leading-7 text-white/75">
              Founders and teams who need a premium web presence without months of production.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 bg-black px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <RevealText as="p" className="mb-5 text-sm font-light uppercase tracking-[0.32em] text-white/50">Portfolio</RevealText>
            <RevealText as="h2" className="text-[44px] font-light leading-none tracking-[-0.055em] text-white sm:text-[64px]">Selected Work</RevealText>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="scroll-reveal liquid-glass group rounded-[34px] p-4 transition-colors hover:bg-white/5">
                <div className={`relative h-72 overflow-hidden rounded-[26px] bg-gradient-to-br ${project.tone}`}>
                  <img
                    src={project.preview}
                    alt={project.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                  />
                  <span className="absolute right-6 top-6 h-[7px] w-[7px] bg-white" aria-hidden="true" />
                  <span className="absolute bottom-6 left-6 h-[7px] w-[7px] bg-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-5 px-2 pb-2 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-2xl font-light tracking-[-0.035em] text-white">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-light text-white/75 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="scroll-reveal mt-12 text-center">
            <a
              href="#work"
              className="liquid-glass-strong inline-flex rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              Explore Selected Work
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-black px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-light uppercase tracking-[0.32em] text-white/50">Services</p>
            <h2 className="text-[44px] font-light leading-none tracking-[-0.055em] text-white sm:text-[64px]">What We Do</h2>
            <p className="mt-6 text-base font-light leading-7 text-white/70 sm:text-lg">
              Strategy, design, and responsive frontend builds for brands that need to look credible, launch faster, and convert more clearly.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="liquid-glass rounded-[30px] p-6 transition-colors hover:bg-white/5">
                <h3 className="text-2xl font-light tracking-[-0.035em] text-white">{service.title}</h3>
                <ul className="mt-6 space-y-3 text-base font-light leading-7 text-white/75">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-white/70" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="video-showcase" className="relative z-10 h-[70vh] min-h-[520px] w-full overflow-hidden bg-black">
        <video
          className="section-video-fade absolute inset-0 h-full w-full object-cover"
          src="/untitled_fal-ai_kling-video_v2.6_pro_image-to-video_2026-04-29_19-23-29.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </section>

      <section id="client-voices" className="relative z-10 bg-black px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="liquid-glass mx-auto max-w-6xl rounded-[38px] p-8 transition-colors hover:bg-white/[0.03] sm:p-12 lg:p-16">
          <p className="text-sm font-light uppercase tracking-[0.32em] text-white/50">Client Voices</p>
          <blockquote className="mt-10 max-w-5xl text-[34px] font-light leading-[1.12] tracking-[-0.045em] text-white sm:text-[52px]">
            Working with AISTUDIO changed how people understood our offer. Within weeks, our new website made the brand feel sharper, easier to trust, and easier for the right clients to act on.
          </blockquote>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/photo_2025-07-17_21-03-41.jpg"
                alt="Fartans avatar"
                loading="lazy"
                className="liquid-glass h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-light text-white">Fartans</p>
                <p className="text-sm font-light text-white/60">Founder &amp; CEO</p>
              </div>
            </div>
            <span className="liquid-glass rounded-full px-5 py-2 text-sm font-light text-white/75">Featured Client</span>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 bg-black px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="liquid-glass-strong mx-auto max-w-6xl rounded-[42px] px-6 py-20 text-center sm:px-12 lg:px-20">
          <h2 className="mx-auto max-w-4xl text-[42px] font-light leading-[1.02] tracking-[-0.055em] text-white sm:text-[68px]">
            Ready to make your website your strongest sales asset?
          </h2>
          <p className="mt-6 font-instrument text-3xl italic leading-none text-white sm:text-5xl">
            Look premium. Launch faster. Convert clearly.
          </p>
          <a
            href="mailto:@fartanses"
            className="liquid-glass-strong mt-10 inline-flex rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
          >
            Book a Free Call
          </a>
        </div>
      </section>

      <footer className="relative z-10 bg-black px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.4fr_2fr]">
            <div>
              <p className="text-xl font-medium tracking-[-0.02em] text-white">AISTUDIO</p>
              <a href="mailto:@fartanses" className="mt-5 inline-block text-sm font-light text-white/60 transition-colors hover:text-white">
                @fartanses
              </a>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <p className="mb-5 text-sm font-light uppercase tracking-[0.28em] text-white/45">Company</p>
                {companyLinks.map((item) => (
                  <a key={item.label} href={item.href} className="block py-1.5 text-sm font-light text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="mb-5 text-sm font-light uppercase tracking-[0.28em] text-white/45">Services</p>
                {serviceLinks.map((item) => (
                  <a key={item.label} href={item.href} className="block py-1.5 text-sm font-light text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="mb-5 text-sm font-light uppercase tracking-[0.28em] text-white/45">Follow</p>
                {followLinks.map((item) => (
                  <a key={item.label} href={item.href} className="block py-1.5 text-sm font-light text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div id="footer-legal" className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm font-light text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 AISTUDIO. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#footer-legal" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#footer-legal" className="transition-colors hover:text-white">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
