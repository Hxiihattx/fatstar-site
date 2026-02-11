import AnimatedBlock from './components/AnimatedBlock'
import SectionHeading from './components/SectionHeading'
import { benefits, processSteps, testimonials } from './data'

function App() {
  return (
    <div className="overflow-x-hidden bg-stone bg-grain [background-size:22px_22px]">
      <header className="relative isolate min-h-screen overflow-hidden bg-ink text-stone">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80"
          alt="Legal office interior"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/90 via-ink/80 to-ink/65" />

        <nav className="section-shell flex items-center justify-between py-8 md:py-10">
          <div>
            <p className="font-display text-3xl font-semibold leading-none">Mateen & Associates</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone/70">Lahore Legal Services</p>
          </div>
          <a
            href="#consultation"
            className="rounded-full border border-stone/40 px-5 py-2 text-sm font-medium transition hover:border-brass hover:text-brass"
          >
            Book Consultation
          </a>
        </nav>

        <section className="section-shell grid items-end gap-12 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
          <AnimatedBlock inView={false} className="max-w-2xl">
            <span className="eyebrow text-stone/80">Trusted legal counsel in Lahore</span>
            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Resolve Legal Uncertainty with Strategy, Clarity, and Confident Representation
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone/85 md:text-xl">
              Legal disputes can disrupt your family, finances, and peace of mind. We help you take control with
              clear advice, disciplined preparation, and strong advocacy tailored to your matter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="rounded-full bg-brass px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition hover:bg-[#caa571]"
              >
                Book a free consultation
              </a>
              <a
                href="#process"
                className="rounded-full border border-stone/45 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition hover:border-brass hover:text-brass"
              >
                See our process
              </a>
            </div>
          </AnimatedBlock>

          <AnimatedBlock inView={false} delay={0.2} className="justify-self-end rounded-3xl border border-stone/15 bg-stone/10 p-8 backdrop-blur">
            <p className="font-display text-3xl">Why clients trust us</p>
            <ul className="mt-6 space-y-4 text-stone/85">
              <li>• Experienced in Lahore&apos;s legal environment</li>
              <li>• Strategy-led case planning from day one</li>
              <li>• Clear communication without legal jargon</li>
              <li>• Respectful, persistent representation</li>
            </ul>
          </AnimatedBlock>
        </section>
      </header>

      <main>
        <section className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <AnimatedBlock amount={0.35}>
            <SectionHeading
              eyebrow="The problem"
              title="Most legal matters become more expensive and stressful when action is delayed."
            />
          </AnimatedBlock>
          <AnimatedBlock delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Many people feel stuck between confusing procedures, delayed timelines, and unclear legal guidance.
              Without the right counsel, important decisions are made too late—or without a proper legal strategy.
            </p>
            <p>
              Mateen & Associates helps you understand your legal position quickly and move forward with confidence.
              We turn uncertainty into a practical plan.
            </p>
          </AnimatedBlock>
        </section>

        <section className="bg-white">
          <div className="section-shell grid gap-12 md:grid-cols-2 md:gap-16">
            <AnimatedBlock className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
                alt="Lawyers discussing strategy"
                className="h-full min-h-[420px] w-full rounded-[2.5rem] object-cover shadow-editorial"
                loading="lazy"
                decoding="async"
              />
            </AnimatedBlock>

            <AnimatedBlock delay={0.1} className="order-1 md:order-2">
              <SectionHeading eyebrow="Our solution" title="A practical legal strategy built around your goals." />
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-lg text-ink/80">
                    <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-brass" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedBlock>
          </div>
        </section>

        <section id="process" className="section-shell">
          <AnimatedBlock className="max-w-3xl">
            <SectionHeading eyebrow="How it works" title="A clear, three-step process from consultation to resolution." />
          </AnimatedBlock>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <AnimatedBlock
                key={step.title}
                delay={index * 0.1}
                className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">Step {index + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/75">{step.detail}</p>
              </AnimatedBlock>
            ))}
          </div>
        </section>

        <section className="bg-ink text-stone">
          <div className="section-shell">
            <AnimatedBlock className="flex flex-wrap items-end justify-between gap-8">
              <SectionHeading
                eyebrow="Client voices"
                title="Trusted by families and professionals across Lahore."
                className="max-w-3xl"
                eyebrowClassName="text-stone/70 border-stone/40"
              />
              <p className="max-w-md text-stone/75">
                Your case deserves a legal team that listens deeply, prepares thoroughly, and advocates
                relentlessly.
              </p>
            </AnimatedBlock>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedBlock
                  key={testimonial.name}
                  delay={index * 0.1}
                  className="rounded-3xl border border-stone/15 bg-stone/5 p-7"
                >
                  <blockquote className="leading-relaxed text-stone/90">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm text-stone/70">
                    <span className="font-semibold text-stone">{testimonial.name}</span>
                    <br />
                    {testimonial.context}
                  </figcaption>
                </AnimatedBlock>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <AnimatedBlock>
            <SectionHeading eyebrow="About the firm" title="Disciplined legal counsel rooted in integrity." />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              Mateen & Associates is a Lahore-based legal practice providing trusted counsel for civil, family,
              property, and litigation matters. We combine legal depth with practical thinking so you can make the
              right decisions at the right time.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1} className="grid gap-4 rounded-3xl bg-white p-8 shadow-editorial">
            <div className="border-b border-ink/10 pb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Location</p>
              <p className="mt-2 text-lg">Lahore, Pakistan</p>
            </div>
            <div className="border-b border-ink/10 pb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Consultation</p>
              <p className="mt-2 text-lg">Free initial case review</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Practice Focus</p>
              <p className="mt-2 text-lg">Civil • Family • Property • Litigation</p>
            </div>
          </AnimatedBlock>
        </section>

        <section id="consultation" className="relative isolate overflow-hidden bg-[#ede4d7]">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-brass/15 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
          <AnimatedBlock className="section-shell relative text-center" amount={0.3}>
            <span className="eyebrow">Take the next step</span>
            <h2 className="mx-auto max-w-4xl font-display text-4xl md:text-6xl">
              Book a free consultation and get a clear legal path forward.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              Tell us about your matter, and we&apos;ll help you understand your options, your risks, and your best
              next move.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:consult@mateenassociates.pk"
                className="inline-flex rounded-full bg-ink px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone transition hover:bg-olive"
              >
                Book a free consultation
              </a>
              <a
                href="tel:+923000000000"
                className="inline-flex rounded-full border border-ink/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-ink/60"
              >
                Call now
              </a>
            </div>
          </AnimatedBlock>
        </section>
      </main>

      <footer className="bg-ink text-stone/80">
        <div className="section-shell grid gap-10 py-12 md:grid-cols-2 md:items-end md:py-14">
          <div>
            <p className="font-display text-3xl text-stone">Mateen & Associates</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Professional legal services in Lahore for individuals, families, and business owners.
            </p>
          </div>
          <div className="text-sm md:text-right">
            <p>Email: consult@mateenassociates.pk</p>
            <p>Phone: +92 300 0000000</p>
            <p className="mt-3 text-stone/55">© {new Date().getFullYear()} Mateen & Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
