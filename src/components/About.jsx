import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-24 md:py-32 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        </div>
        <div className="lg:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-lg leading-relaxed"
          >
            I’m Christopher Mesaya, a full‑stack developer focused on building elegant, performant interfaces with solid engineering under the hood. I care deeply about typography, motion, and micro‑interactions—using them to tell a story and guide attention.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-white/70"
          >
            Comfortable across the stack: React, Next.js, Node, TypeScript, MongoDB/Postgres, and modern tooling. I prototype fast, ship thoughtfully, and sweat the details.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
              { title: 'Backend', items: ['Node.js', 'Express', 'Nest', 'MongoDB', 'PostgreSQL'] },
              { title: 'Tools & Design', items: ['Figma', 'Git', 'Vite', 'Jest', 'Vercel'] },
            ].map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold text-white/90">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 inline-block" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
