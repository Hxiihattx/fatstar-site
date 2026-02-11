import { motion as Motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const processSteps = [
  {
    title: 'Initial Consultation',
    detail:
      'Share your matter in confidence. We review your facts, documents, and goals during a free consultation.',
  },
  {
    title: 'Legal Strategy',
    detail:
      'We design a tailored legal roadmap, explain your options in plain language, and set realistic outcomes.',
  },
  {
    title: 'Representation & Resolution',
    detail:
      'From court advocacy to negotiated settlement, we represent your interests with precision and resolve.',
  },
]

const benefits = [
  'Clear legal guidance without confusing jargon',
  'Strategic representation for civil, family, and property matters',
  'Transparent communication from day one',
  'Focused on timely, practical results for you and your family',
]

const testimonials = [
  {
    quote:
      'Mateen & Associates handled our property dispute with exceptional professionalism. They were always prepared and kept us informed at every stage.',
    name: 'A. Raza',
    context: 'Property Client, Lahore',
  },
  {
    quote:
      'I came in anxious about a family matter and left with clarity and confidence. Their legal strategy was sharp, and their support was genuine.',
    name: 'S. Malik',
    context: 'Family Law Client',
  },
  {
    quote:
      'Their team combines legal depth with practical thinking. The consultation itself gave me a clear path forward when I needed it most.',
    name: 'H. Khan',
    context: 'Civil Litigation Client',
  },
]

function App() {
  return (
    <div className="overflow-x-hidden bg-stone bg-grain [background-size:22px_22px]">
      <header className="relative isolate min-h-screen overflow-hidden bg-ink text-stone">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Legal office interior"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/90 via-ink/80 to-ink/60" />

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

        <section className="section-shell grid items-end gap-12 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
          <Motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="eyebrow text-stone/80">Trusted legal counsel in Lahore</span>
            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Strategic Legal Representation for Life&apos;s Most Difficult Matters
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone/85 md:text-xl">
              When legal issues threaten your peace, your family, or your assets, you need more than advice.
              You need an advocate who protects your position with clarity, preparation, and confidence.
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
                See how we work
              </a>
            </div>
          </Motion.div>

          <Motion.aside
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUp}
            className="justify-self-end rounded-3xl border border-stone/15 bg-stone/10 p-8 backdrop-blur"
          >
            <p className="font-display text-3xl">Why clients choose us</p>
            <ul className="mt-6 space-y-4 text-stone/85">
              <li>• Grounded in Lahore&apos;s legal environment</li>
              <li>• Detail-focused case preparation</li>
              <li>• Honest advice and practical strategy</li>
              <li>• Respectful representation in and out of court</li>
            </ul>
          </Motion.aside>
        </section>
      </header>

      <main>
        <section className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            <span className="eyebrow">The problem</span>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Legal problems don&apos;t just affect your case, they affect your entire life.
            </h2>
          </Motion.div>
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
            className="space-y-5 text-lg leading-relaxed text-ink/80"
          >
            <p>
              Confusing procedures, delayed hearings, and unclear legal advice can leave you feeling vulnerable.
              Many people in Lahore enter legal matters without a clear strategy and pay for it in time, money,
              and stress.
            </p>
            <p>
              At Mateen & Associates, we remove uncertainty. We help you understand exactly where you stand,
              what comes next, and how to move forward with confidence.
            </p>
          </Motion.div>
        </section>

        <section className="bg-white">
          <div className="section-shell grid gap-12 md:grid-cols-2 md:gap-16">
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                alt="Legal team discussing strategy"
                className="h-full min-h-[420px] w-full rounded-[2.5rem] object-cover shadow-editorial"
                loading="lazy"
              />
            </Motion.div>

            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeUp}
              className="order-1 md:order-2"
            >
              <span className="eyebrow">Our solution</span>
              <h2 className="font-display text-4xl md:text-5xl">Practical legal strategy built around your goals.</h2>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-lg text-ink/80">
                    <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-brass" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          </div>
        </section>

        <section id="process" className="section-shell">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="eyebrow">How it works</span>
            <h2 className="font-display text-4xl md:text-5xl">A structured process designed for clarity and results.</h2>
          </Motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Motion.article
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeUp}
                className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/75">{step.detail}</p>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="bg-ink text-stone">
          <div className="section-shell">
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
              className="flex flex-wrap items-end justify-between gap-8"
            >
              <div>
                <span className="eyebrow text-stone/70">Client voices</span>
                <h2 className="font-display text-4xl md:text-5xl">Trusted by families and professionals across Lahore.</h2>
              </div>
              <p className="max-w-md text-stone/75">
                Your case deserves a legal team that listens carefully, prepares deeply, and advocates relentlessly.
              </p>
            </Motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Motion.figure
                  key={testimonial.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeUp}
                  className="rounded-3xl border border-stone/15 bg-stone/5 p-7"
                >
                  <blockquote className="leading-relaxed text-stone/90">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm text-stone/70">
                    <span className="font-semibold text-stone">{testimonial.name}</span>
                    <br />
                    {testimonial.context}
                  </figcaption>
                </Motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            <span className="eyebrow">About the firm</span>
            <h2 className="font-display text-4xl md:text-5xl">Disciplined legal counsel rooted in integrity.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              Mateen & Associates is a Lahore-based legal practice committed to solving complex matters with
              strategic thinking and personal attention. We combine courtroom capability with compassionate client
              care, ensuring you always understand your legal position and options.
            </p>
          </Motion.div>
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeUp}
            className="grid gap-4 rounded-3xl bg-white p-8 shadow-editorial"
          >
            <div className="border-b border-ink/10 pb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Location</p>
              <p className="mt-2 text-lg">Lahore, Pakistan</p>
            </div>
            <div className="border-b border-ink/10 pb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Consultations</p>
              <p className="mt-2 text-lg">Free initial case review</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-olive">Focus</p>
              <p className="mt-2 text-lg">Civil • Family • Property • Litigation</p>
            </div>
          </Motion.div>
        </section>

        <section id="consultation" className="relative isolate overflow-hidden bg-[#ede4d7]">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-brass/15 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="section-shell relative text-center"
          >
            <span className="eyebrow">Take the next step</span>
            <h2 className="mx-auto max-w-4xl font-display text-4xl md:text-6xl">
              Get trusted legal guidance before the situation becomes more costly.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              Book your free consultation with Mateen & Associates today and get a clear legal strategy designed
              for your matter.
            </p>
            <a
              href="mailto:consult@mateenassociates.pk"
              className="mt-10 inline-flex rounded-full bg-ink px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone transition hover:bg-olive"
            >
              Book a free consultation
            </a>
          </Motion.div>
        </section>
      </main>

      <footer className="bg-ink text-stone/80">
        <div className="section-shell grid gap-10 py-12 md:grid-cols-2 md:items-end md:py-14">
          <div>
            <p className="font-display text-3xl text-stone">Mateen & Associates</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              Professional legal services for individuals and families in Lahore, Pakistan.
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
