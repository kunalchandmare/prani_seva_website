import { useState } from "react";
import {
  Clock3,
  HandHeart,
  Leaf,
  Menu,
  PawPrint,
  ShieldCheck,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { safeWebUrl, type Studio } from "@/content/studio";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#rescue", label: "Rescue dogs" },
  { href: "#faq", label: "FAQ" },
];

const principles = [
  "Every dog is treated as an individual.",
  "Grooming is adapted to the dog’s comfort level.",
  "Dogs are given time to settle into the environment.",
  "Consent and cooperation are encouraged wherever possible.",
  "The groomer watches for signs of fear, stress, pain, fatigue, or sensory overload.",
  "Breaks are offered when needed.",
  "The goal is not to force a complete groom at any cost.",
  "If a dog becomes overwhelmed, the session can be paused or stopped.",
  "Owners receive honest feedback and practical suggestions for future visits.",
];

const grooming = [
  "Gentle bathing",
  "Brushing and coat care",
  "De-shedding",
  "Nail care",
  "Ear cleaning where appropriate",
  "Hygiene trims",
  "Breed-appropriate grooming",
  "Senior and sensitive-dog grooming",
  "Puppy introduction sessions",
  "Rescue and shelter-dog support",
];

const journey = [
  "Complete a short consultation form.",
  "Discuss the dog’s history, health, sensitivities, and grooming experience.",
  "Attend a calm introductory appointment.",
  "Allow the dog time to settle.",
  "Begin only with care the dog can tolerate.",
  "Receive an update and recommendations after the session.",
];

const ethics = [
  "No unnecessary force",
  "No rushing",
  "No shame or blame",
  "No punishment",
  "No promise of instant comfort",
  "Clear communication with owners",
  "Respect for veterinary advice",
  "Referral when a concern is outside grooming",
  "Safe handling and hygienic practice",
  "Individual assessment before each session",
];

const faqs = [
  [
    "What happens if my dog becomes frightened?",
    "We pause. The groomer watches body language and will slow down, offer a break, change the plan, or stop. We will not push through fear to finish a groom. You will hear what we noticed and what we suggest next.",
  ],
  [
    "Can I stay with my dog during the appointment?",
    "Often, yes, if it helps your dog and the space allows it. We agree this beforehand. Some dogs settle better with their person nearby; others do better with a quiet handover.",
  ],
  [
    "Do you groom dogs with rescue or trauma backgrounds?",
    "Yes. Rescue and shelter dogs are especially welcome. We plan extra time, predictability, and a gradual introduction. Fear is treated as information, not something to override.",
  ],
  [
    "What if my dog cannot complete the full groom?",
    "That is acceptable. We complete only what the dog can tolerate and book a shorter follow-up if needed. Progress is more important than perfection.",
  ],
  [
    "Can my dog have a short introductory visit first?",
    "Yes. An introduction can be mostly meeting, exploring, treats, and familiar smells. Sometimes the most successful first appointment is one where very little grooming happens.",
  ],
  [
    "Do you use restraints?",
    "We do not use force or punishment. Handling stays as light and cooperative as possible. If a dog cannot be cared for safely without pressure they are not ready for, we stop and replan.",
  ],
  [
    "Is Reiki a medical treatment?",
    "No. Reiki does not diagnose, treat, or replace veterinary care. It is offered as a complementary relaxation and wellbeing practice. It may support relaxation. It is not a cure.",
  ],
  [
    "Is animal communication veterinary or behavioural advice?",
    "No. Sessions support reflection and connection. They are not a substitute for veterinary, behavioural, or training advice, and they do not claim diagnoses or guaranteed answers.",
  ],
  [
    "What should I bring to the first appointment?",
    "A usual lead or harness, a familiar treat, any relevant veterinary notes, and a short history of grooming, health, and triggers. A blanket is welcome if it helps your dog settle.",
  ],
  [
    "Can you work with my dog’s veterinarian or behaviour professional?",
    "Yes. With your consent we can share what happened in the session and follow their guidance. We refer on when something is outside grooming.",
  ],
  [
    "What happens if my dog has severe matting?",
    "We assess comfort, skin, and movement first. Severe matting can hide pain. We will not force a cosmetic groom. If clipping or veterinary care is the kinder option, we say so and only proceed with what the dog can tolerate.",
  ],
  [
    "Do you groom elderly dogs or dogs with health conditions?",
    "Yes, with a slower plan and the health notes you share before booking. Grooming does not replace veterinary treatment. If a dog is unwell or in pain, we postpone and suggest you speak with your vet.",
  ],
];

export function HomePage({ studio }: { studio: Studio }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="border-b border-line bg-primary text-primary-fg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm">
          <p>{studio.announcement}</p>
          <p>{studio.motto}</p>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3 text-fg no-underline">
            <span className="grid size-11 place-items-center rounded-card bg-soft text-primary">
              <PawPrint aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block font-display text-xl leading-none">{studio.name}</span>
              <span className="text-xs tracking-wide text-muted">{studio.eyebrow}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-fg no-underline">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="hidden rounded-control bg-accent px-4 py-3 text-sm font-semibold text-accent-fg no-underline sm:inline-flex"
            >
              Book a consultation
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-control border border-line bg-surface lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-line px-5 py-4 lg:hidden" aria-label="Mobile">
            <div className="grid gap-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="py-1 text-fg no-underline" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#book" className="rounded-control bg-accent px-4 py-3 text-center font-semibold text-accent-fg no-underline" onClick={() => setOpen(false)}>
                Book a gentle consultation
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main">
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Ethical dog grooming in Berlin</p>
            <h1 className="mt-3 font-display text-5xl leading-tight text-fg md:text-6xl">
              Gentle grooming for dogs who need patience, trust, and understanding.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              We provide ethical, anti-stress dog grooming and holistic wellbeing services designed around each individual dog. Rescue dogs, nervous dogs, senior dogs, and sensitive dogs are always welcome.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#book" className="rounded-control bg-accent px-5 py-3 font-semibold text-accent-fg no-underline">
                Book a gentle consultation
              </a>
              <a href="#services" className="rounded-control border border-primary px-5 py-3 font-semibold text-primary no-underline">
                Explore our services
              </a>
            </div>
            <p className="mt-6 rounded-card border border-line bg-surface px-4 py-3 font-medium">
              Your dog’s emotional safety matters as much as their physical care.
            </p>
          </div>
          <figure className="overflow-hidden rounded-card bg-soft shadow-sm">
            <img
              src="/photos/hero.jpg"
              alt="A relaxed golden dog resting on grass and looking calmly toward the camera."
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
            />
          </figure>
        </section>

        <section className="border-y border-line bg-surface" aria-label="How sessions are held">
          <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-center gap-3 font-medium">
              <ShieldCheck aria-hidden="true" className="size-5 text-primary" />
              No unnecessary force
            </li>
            <li className="flex items-center gap-3 font-medium">
              <Clock3 aria-hidden="true" className="size-5 text-primary" />
              Breaks when needed
            </li>
            <li className="flex items-center gap-3 font-medium">
              <HandHeart aria-hidden="true" className="size-5 text-primary" />
              Rescue dogs welcome
            </li>
            <li className="flex items-center gap-3 font-medium">
              <Leaf aria-hidden="true" className="size-5 text-primary" />
              Progress over perfection
            </li>
          </ul>
        </section>

        <section id="approach" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">About the approach</p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">A different kind of grooming experience</h2>
            <p className="mt-4 text-muted">
              Grooming is not only about appearance. It is about helping each dog feel safe, respected, and understood, while you get clear communication and reassurance.
            </p>
            <p className="mt-3 text-muted">
              We use a patient, individualised approach instead of rushing dogs through a fixed routine. A dog may need several short visits before a full session feels possible.
            </p>
            <figure className="mt-6 overflow-hidden rounded-card">
              <img src="/photos/calm.jpg" alt="A white dog lying peacefully on a wooden floor in soft daylight." className="aspect-[5/3] w-full object-cover" />
            </figure>
          </div>
          <div>
            <ol className="grid gap-3">
              {principles.map((item, index) => (
                <li key={item} className="flex gap-4 rounded-card border border-line bg-surface px-4 py-3">
                  <span className="font-display text-xl text-primary">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 font-display text-3xl text-primary">Progress is more important than perfection.</p>
          </div>
        </section>

        <section id="services" className="bg-soft py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Services</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl leading-tight md:text-5xl">Care that follows the dog, not the clock</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Low-stress dog grooming and complementary wellbeing, at the dog’s pace. Nothing here replaces veterinary or behavioural care.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <article className="rounded-card border border-line bg-surface p-6 lg:row-span-2">
                <p className="text-sm font-semibold text-primary">Grooming</p>
                <h3 className="mt-1 font-display text-3xl">Ethical dog grooming</h3>
                <p className="mt-3 text-muted">
                  Each session is adapted to the dog’s coat, health, age, history, body language, and emotional needs.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {grooming.map((item) => (
                    <li key={item} className="rounded-control bg-bg px-3 py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-card border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-primary">First visit</p>
                <h3 className="mt-1 font-display text-2xl">First visit and decompression session</h3>
                <p className="mt-3 text-muted">
                  The first visit may simply involve meeting the groomer, exploring the space, receiving treats, and becoming familiar with the sounds and smells.
                </p>
                <p className="mt-3 font-display text-xl text-primary">
                  Sometimes the most successful first appointment is one where very little grooming happens.
                </p>
              </article>
              <article className="rounded-card border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-primary">Complementary</p>
                <h3 className="mt-1 font-display text-2xl">Reiki for dogs in Berlin</h3>
                <p className="mt-3 text-muted">
                  Animal Reiki sessions offer a quiet, peaceful space where your dog can rest and choose how much interaction they want. The session is gentle, non-invasive, and guided by the dog’s comfort and body language.
                </p>
                <p className="mt-3 rounded-card bg-bg px-4 py-3 text-sm text-muted">
                  Reiki does not diagnose, treat, or replace veterinary care. It is offered as a complementary relaxation and wellbeing practice.
                </p>
              </article>
              <article className="rounded-card border border-line bg-surface p-6">
                <p className="text-sm font-semibold text-primary">Complementary</p>
                <h3 className="mt-1 font-display text-2xl">Animal communication</h3>
                <p className="mt-3 text-muted">
                  Animal communication sessions are intended to support reflection, connection, and a deeper understanding of your relationship with your dog. They are not a substitute for veterinary, behavioural, or training advice.
                </p>
                <p className="mt-3 text-muted">This service does not claim to provide medical diagnoses or guaranteed answers.</p>
              </article>
              <article className="rounded-card border border-line bg-primary p-6 text-primary-fg">
                <p className="text-sm font-semibold">Package</p>
                <h3 className="mt-1 font-display text-3xl">The Gentle Start Package</h3>
                <p className="mt-3">An optional package combining grooming preparation, calming support, Reiki, and an owner consultation.</p>
                <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  {[
                    "A pre-visit conversation with the owner",
                    "A calm introduction to the grooming environment",
                    "A personalised grooming or care plan",
                    "Optional Reiki relaxation time",
                    "Practical home-care recommendations",
                    "A follow-up message after the appointment",
                  ].map((item) => (
                    <li key={item} className="rounded-control bg-soft px-3 py-2 text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="rescue" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Rescue dog grooming</p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">A safe first step for rescue dogs</h2>
            <p className="mt-4 text-muted">
              Dogs coming from shelters or difficult backgrounds may need extra time, predictability, and patience. Newly adopted dogs, dogs who have never been groomed, and dogs who react strongly to handling are welcome.
            </p>
            <p className="mt-3 text-muted">
              That includes dogs who are fearful of handling, nervous around strangers, sensitive to sounds, dryers, clippers, or touch, or who have experienced neglect, matting, or inconsistent care.
            </p>
            <p className="mt-4 font-display text-2xl text-primary">
              We never judge a dog for being afraid. Fear is communication, and we respond with patience.
            </p>
            <ol className="mt-6 grid gap-3">
              {[
                ["Meet and understand", "Learn about the dog’s history, triggers, preferences, and current needs."],
                ["Build trust", "Allow the dog to explore and become comfortable without pressure."],
                ["Groom gradually", "Introduce grooming in small, manageable steps."],
              ].map(([title, body], index) => (
                <li key={title} className="rounded-card border border-line bg-surface px-4 py-3">
                  <p className="font-semibold">
                    {index + 1}. {title}
                  </p>
                  <p className="text-muted">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-muted">
              You will always know what happened during the session, what your dog managed comfortably, and what we recommend next.
            </p>
          </div>
          <figure className="overflow-hidden rounded-card">
            <img src="/photos/rescue.jpg" alt="A cream-coloured dog sitting calmly outdoors and looking toward the camera." className="aspect-[4/5] w-full object-cover" />
          </figure>
        </section>

        <section id="expect" className="border-y border-line bg-surface py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">What to expect</p>
              <h2 className="mt-2 font-display text-4xl leading-tight">A clear, unhurried path</h2>
              <p className="mt-4 text-muted">
                Owners may stay nearby when that helps the dog and the space allows it. Communication stays transparent from the first form to the note after the visit.
              </p>
              <ol className="mt-6 grid gap-3">
                {journey.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-control bg-primary font-semibold text-primary-fg">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="overflow-hidden rounded-card">
              <img src="/photos/hands.jpg" alt="Two relaxed dogs resting together on grass in warm light." className="h-full min-h-80 w-full object-cover" />
            </figure>
          </div>
        </section>

        <section id="ethics" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Ethical standards and safety</p>
          <h2 className="mt-2 font-display text-4xl leading-tight">Care built on respect</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ethics.map((item) => (
              <li key={item} className="rounded-card bg-soft px-4 py-3 font-medium">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl rounded-card border border-line bg-surface px-4 py-4 text-muted">
            Grooming and complementary wellbeing services do not replace veterinary diagnosis, treatment, medication, or qualified behaviour support. If your dog is in pain, unwell, or showing serious behavioural concerns, please consult your veterinarian or an appropriately qualified professional.
          </p>
        </section>

        <section id="pricing" className="bg-soft py-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Pricing</p>
            <h2 className="mt-2 font-display text-4xl">Clear estimates before you book</h2>
            <dl className="mt-6 divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
              {studio.prices.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <dt className="font-medium">{item.name}</dt>
                  <dd className="font-display text-xl text-accent">{item.amount}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-3xl text-muted">
              Prices depend on coat condition, dog size, session length, grooming requirements, and the level of support needed. A clear estimate will be provided before booking.
            </p>
          </div>
        </section>

        <section id="stories" className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Testimonials</p>
          <h2 className="mt-2 font-display text-4xl">
            {studio.testimonials.some((item) => item.isPlaceholder)
              ? "Placeholder voices, until real reviews replace them"
              : "From the people who visit"}
          </h2>
          {studio.testimonials.some((item) => item.isPlaceholder) ? (
            <p className="mt-3 max-w-2xl text-muted">
              These examples show tone only. They are not genuine customer reviews and do not claim medical recovery or behavioural change.
            </p>
          ) : null}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {studio.testimonials.map((item) => (
              <blockquote key={item.quote} className="rounded-card border border-line bg-surface p-5">
                {item.isPlaceholder ? (
                  <p className="text-xs font-semibold tracking-widest text-accent uppercase">Placeholder</p>
                ) : null}
                <p className="mt-3 font-display text-xl leading-snug">“{item.quote}”</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Questions</p>
          <h2 className="mt-2 font-display text-4xl">Frequently asked questions</h2>
          <div className="mt-6 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-card border border-line bg-surface px-4 py-3">
                <summary className="cursor-pointer font-semibold">{question}</summary>
                <p className="mt-3 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="book" className="bg-soft py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">Contact and booking</p>
              <h2 className="mt-2 font-display text-4xl leading-tight">Let’s create a calmer grooming experience together.</h2>
              <dl className="mt-6 grid gap-3 text-sm">
                <div>
                  <dt className="font-semibold">Location</dt>
                  <dd className="text-muted">{studio.location}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Opening hours</dt>
                  <dd className="text-muted">{studio.hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>
                    <a href={`mailto:${studio.email}`}>{studio.email}</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Telephone</dt>
                  <dd className="text-muted">
                    <a href={`tel:${studio.phone.replace(/\s/g, "")}`}>{studio.phone}</a>
                    {studio.phoneIsPlaceholder ? " (placeholder)" : ""}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-muted">
                {studio.accessibility} {studio.cancellation}
              </p>
              <p className="mt-4 text-sm text-muted">
                If your dog is in pain or this is an emergency, contact a veterinarian first. This form is not an emergency service.
                {safeWebUrl(studio.instagram) || safeWebUrl(studio.facebook) ? (
                  <>
                    {" "}
                    {safeWebUrl(studio.instagram) ? (
                      <a href={safeWebUrl(studio.instagram)}>Instagram</a>
                    ) : null}
                    {safeWebUrl(studio.instagram) && safeWebUrl(studio.facebook) ? " · " : null}
                    {safeWebUrl(studio.facebook) ? <a href={safeWebUrl(studio.facebook)}>Facebook</a> : null}
                  </>
                ) : (
                  " Instagram and Facebook links will be added when the studio accounts are ready."
                )}
              </p>
            </div>
            <div className="lg:col-span-3">
              {sent ? (
                <p role="status" tabIndex={-1} className="rounded-card bg-surface px-5 py-8 text-lg">
                  Thank you. This preview does not send the form yet. When booking email is connected, we will confirm a consultation and send a clear estimate first.
                </p>
              ) : (
                <form
                  className="grid gap-4 rounded-card border border-line bg-surface p-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = event.currentTarget;
                    if (!form.checkValidity()) {
                      form.reportValidity();
                      return;
                    }
                    setSent(true);
                  }}
                >
                  <h3 className="font-display text-3xl">Request a gentle consultation</h3>
                  <Field label="Owner name" name="owner" required autoComplete="name" />
                  <Field label="Email address" name="email" type="email" required autoComplete="email" />
                  <Field label="Telephone number" name="phone" type="tel" required autoComplete="tel" />
                  <Field label="Dog’s name" name="dog" required />
                  <Field label="Dog’s age and breed or type" name="agebreed" required />
                  <label className="grid gap-1 text-sm font-semibold">
                    Rescue or shelter background
                    <select name="rescue" className="rounded-control border border-line bg-bg px-3 py-3 font-normal text-fg">
                      <option>Not sure yet</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </label>
                  <Field label="Previous grooming experience" name="history" required multiline />
                  <Field label="Known fears or triggers" name="triggers" multiline />
                  <Field label="Health conditions or medication" name="health" multiline />
                  <Field label="What support is needed?" name="support" required multiline />
                  <Field label="Preferred appointment date" name="date" type="date" />
                  <label className="flex items-start gap-3 text-sm">
                    <input type="checkbox" required className="mt-1 size-4" />
                    <span>
                      I understand grooming and complementary sessions do not replace veterinary or qualified behaviour care, and that a session may be paused if my dog becomes overwhelmed.
                    </span>
                  </label>
                  <button type="submit" className="rounded-control bg-accent px-5 py-3 font-semibold text-accent-fg">
                    Request a gentle consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:justify-between">
          <p>{studio.name} · {studio.footer}</p>
          <p className="max-w-md">
            A calm place where dogs are respected, owners are reassured, and every visit follows the individual dog.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  multiline,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  multiline?: boolean;
}) {
  const className = "rounded-control border border-line bg-bg px-3 py-3 font-normal text-fg";
  return (
    <label className="grid gap-1 text-sm font-semibold">
      {label}
      {multiline ? (
        <textarea name={name} required={required} className={cn(className, "min-h-24")} />
      ) : (
        <input name={name} type={type} required={required} autoComplete={autoComplete} className={className} />
      )}
    </label>
  );
}
