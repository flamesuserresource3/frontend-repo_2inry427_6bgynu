import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Visionary Commerce',
    desc: 'A high‑performance storefront with edge‑rendered product pages and delightful motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Realtime Collab Board',
    desc: 'Canvas‑based collaboration with WebSockets, presence, and frictionless UX.',
    tech: ['React', 'Node', 'WebSocket', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Creative Portfolio',
    desc: 'Awwwards‑inspired portfolio with 3D, parallax, and buttery‑smooth page transitions.',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop'
  },
];

export default function Projects() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition">Open to collaborations →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
