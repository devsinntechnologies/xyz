"use client"

import { motion } from "framer-motion"

export default function WhatWeDo() {

  const items = [
    {
      title: "Acquire & Invest",
      text: "Acquire and invest in privately held businesses",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
    },
    {
      title: "Owner Partnerships",
      text: "Partner with owners seeking liquidity, succession, or growth capital",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=90",
    },
    {
      title: "Broker Collaboration",
      text: "Collaborate with brokers and intermediaries on off-market and proprietary deals",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90",
    },
    {
      title: "Patient Capital",
      text: "Deploy patient capital with an operational mindset",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
    },
  ]

  return (
    <section className="relative bg-[#0F1720] text-white py-36 overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/10 blur-[200px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-600/10 blur-[200px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            What We Do
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We partner with exceptional businesses and leadership teams to
            create long-term value through strategic capital and operational excellence.
          </p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-red-500 to-transparent mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-14 md:grid-cols-2">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-red-500/10 transition-all duration-700"
            >

              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[1600ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
              </div>

              {/* Soft Overlay Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-red-500/20 to-transparent" />

              {/* Content */}
              <div className="relative p-14 min-h-[420px] flex flex-col justify-end">

                {/* Large Background Number */}
                <span className="absolute top-10 right-10 text-[100px] font-bold text-white/5 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {item.text}
                </p>

                {/* Animated Line */}
                <div className="mt-10 h-[2px] w-0 bg-gradient-to-r from-red-500 to-transparent group-hover:w-28 transition-all duration-700" />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}