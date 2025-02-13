"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section id="contacts" className="relative flex flex-col items-center overflow-hidden bg-[url('/bg-project-home.png')]  bg-center overscroll-auto justify-center min-h-screen text-white px-6 py-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Entre em Contato
      </motion.h1>
        <motion.img
            src="/arrow.png"
            alt="Star"
            className="mb-96 hidden md:block w-[200px] h-[200px] object-contain absolute right-36 md:right-48 transition-all"
            animate={{
                scale: [1, 1, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-12">
        {/* Formulário */}
        <motion.form
          className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Nome</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-zinc-700 rounded-lg focus:ring-2 focus:ring-yellow-500" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-zinc-700 rounded-lg focus:ring-2 focus:ring-yellow-500" required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Mensagem</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-zinc-700 rounded-lg focus:ring-2 focus:ring-yellow-500" rows={4} required />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all">
            Enviar Mensagem
          </button>
        </motion.form>

        {/* Informações de Contato */}
        <motion.div
          className="backdrop-blur-sm flex-1 flex flex-col justify-center space-y-6 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <span>São Paulo, Brasil</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <span>email@exemplo.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-yellow-400 text-xl" />
            <span>+55 11 99999-9999</span>
          </div>
          <div className="flex gap-6 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-400 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-yellow-400 transition-all">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;