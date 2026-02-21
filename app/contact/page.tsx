// @ts-nocheck
"use client";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";



// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      {/* Keep all your existing UI sections here */}

  {/* ================= HERO ================= */}
         <section className="relative h-[65vh] flex items-center justify-center text-white overflow-hidden">
       <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Business discussion"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative text-center max-w-4xl px-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Let’s Start the Conversation
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-200 tracking-wide"
          >
            Confidential. Thoughtful. Long-Term Focused.
          </motion.p>
        </motion.div>
      </section>

       {/* ================= INQUIRIES ================= */}
      <section className="relative py-28 bg-gray-50 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900"
          >
            We Welcome Inquiries From
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              "Business owners exploring a sale, partial liquidity, or succession planning",
              "Brokers and intermediaries with proprietary or off-market opportunities",
              "Investors interested in learning more about our strategy",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeScale}
                className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-red-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-gray-200 group-hover:bg-red-300 transition-colors" />
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 text-gray-600 text-lg"
          >
            All discussions are treated with strict confidentiality.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

           {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-8 text-lg">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Email
                </p>
                <p className="text-red-500 font-medium text-xl mt-1">
                  arhamdevsinn@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Location
                </p>
                <p className="text-gray-800 font-medium text-xl mt-1">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            <p className="mt-12 text-gray-700 leading-relaxed max-w-md">
              Please include a brief description of your inquiry so we can
              respond appropriately.
            </p>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            className="relative bg-white p-12 rounded-3xl shadow-2xl text-black border border-gray-100 space-y-6"
            onSubmit={handleSubmit}
          >
          {/* subtle glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-40" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
      {/* Contact Form Button Update */}
      <button
        type="submit"
        disabled={loading || !form.name || !form.email || !form.message}
        className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>

      {status && (
        <p className="mt-4 text-center text-sm text-green-600">
          {status}
        </p>
      )}
            </motion.form>
                     </div>
     </section>
    </>
  );
}