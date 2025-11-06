import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 right-1/2 translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Let’s build something remarkable
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70"
        >
          I’m currently open to freelance, full‑time, or collaboration opportunities. Drop a message and I’ll get back soon.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid grid-cols-1 gap-4 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
            <input type="email" placeholder="Email address" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
          </div>
          <textarea placeholder="Your message" rows={5} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30" />
          <button type="submit" className="inline-flex justify-center rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-5 py-3 font-medium transition shadow-lg shadow-blue-500/25">Send Message</button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-5 text-white/70">
          <a href="#" aria-label="Email" className="hover:text-white transition"><Mail className="w-5 h-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
}
