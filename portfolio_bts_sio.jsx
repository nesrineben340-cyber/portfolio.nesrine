import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Menu, FileText } from "lucide-react";

export default function PortfolioNesrine() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("accueil");

  const fadeAnim = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35 }
  };

  const tabs = [
    ["accueil", "Accueil"],
    ["competences", "Compétences"],
    ["projets", "Projets"],
    ["veille", "Veille"],
    ["contact", "Contact"]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 text-gray-900 p-6">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-purple-600"
        >
          Nesrine B.
        </motion.h1>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 font-medium text-purple-700">
            {tabs.map(([value, label]) => (
              <li
                key={value}
                onClick={() => setActiveTab(value)}
                className={`cursor-pointer transition-all ${activeTab === value ? "text-purple-900 font-bold" : "hover:text-purple-500"}`}
              >
                {label}
              </li>
            ))}
          </ul>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md" aria-label="Ouvrir le menu">
            <Menu className="w-7 h-7 text-purple-600" />
          </button>
        </div>
      </nav>

      {/* BURGER MENU (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden max-w-6xl mx-auto mb-6"
          >
            <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-4 flex flex-col gap-3 text-purple-700 font-medium">
              {tabs.map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => { setActiveTab(value); setOpen(false); }}
                  className={`text-left p-2 rounded hover:bg-purple-50 ${activeTab === value ? 'bg-purple-50 font-semibold' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TABS CONTENT */}
      <main className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === "accueil" && (
            <motion.section key="accueil" {...fadeAnim}>
              <header className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="text-4xl font-extrabold text-purple-600"
                >
                  Portfolio — Nesrine Benallal
                </motion.h2>
                <p className="text-gray-700 mt-2">Étudiante en BTS SIO — Spécialité SISR</p>
              </header>

              <section className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
                  <CardContent className="p-6">
                    <motion.h3 initial={{ x: -6, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-purple-600 mb-3">À propos</motion.h3>
                    <p className="text-gray-700">Je suis une étudiante motivée en BTS SIO, passionnée par les systèmes et réseaux, la cybersécurité et l'administration des systèmes. Mon objectif est d'intégrer une alternance pour approfondir mes compétences techniques et professionnelles.</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
                  <CardContent className="p-6 space-y-3">
                    <motion.h3 initial={{ x: 6, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-purple-600 mb-2">Contact</motion.h3>
                    <p className="flex items-center gap-3"><Mail className="w-5 h-5"/> <a href="mailto:nesrineben340@gmail.com" className="hover:underline">nesrineben340@gmail.com</a></p>
                    <p className="flex items-center gap-3"><Mail className="w-5 h-5"/> <a href="mailto:nesrine.benallal@ecoles-epsi.net" className="hover:underline">nesrine.benallal@ecoles-epsi.net</a></p>
                    <p className="flex items-center gap-3"><Phone className="w-5 h-5"/> <a href="tel:+33787803166" className="hover:underline">07 87 80 31 66</a></p>
                    <p className="flex items-center gap-3"><MapPin className="w-5 h-5"/> Montpellier, 34000</p>

                    <div className="flex flex-col gap-2 mt-2">
                      <a href="https://www.linkedin.com/in/nesrine-benallal-472a7b250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline"><Linkedin className="w-5 h-5"/> LinkedIn</a>
                      <a href="/Cv benallal Nesrine .pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-purple-600 hover:underline"><FileText className="w-5 h-5"/> Voir mon CV</a>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </motion.section>
          )}

          {activeTab === "competences" && (
            <motion.section key="competences" {...fadeAnim}>
              <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Compétences Techniques</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Administration Windows & Linux</li>
                  <li>Virtualisation (VirtualBox, VMware)</li>
                  <li>Réseaux : TCP/IP, DNS, DHCP, VLAN</li>
                  <li>Programmation : Java, Python</li>
                  <li>Bases de données : SQL</li>
                </ul>

                <h3 className="text-2xl font-bold text-purple-600 mt-6 mb-3">Soft Skills</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Travail en équipe</li>
                  <li>Organisation</li>
                  <li>Autonomie</li>
                  <li>Écoute active</li>
                </ul>
              </Card>
            </motion.section>
          )}

          {activeTab === "projets" && (
            <motion.section key="projets" {...fadeAnim}>
              <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Mes Projets BTS SIO (PPE)</h3>
                <p className="text-gray-700 mb-3">Ici vous pourrez présenter les projets encadrés, détailler les technologies utilisées (GLPI, Active Directory, VirtualBox, scripts, SQL...) et ajouter des captures d'écran ou liens vers vos dépôts GitHub.</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li><strong>Support XEFI Montpellier Ouest</strong> — administration réseau, tickets GLPI, assistance.</li>
                  <li><strong>Mairie de Tlemcen</strong> — maintenance, déploiement, assistance utilisateurs.</li>
                </ul>
              </Card>
            </motion.section>
          )}

          {activeTab === "veille" && (
            <motion.section key="veille" {...fadeAnim}>
              <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Veille Technologique</h3>
                <p className="text-gray-700">Présentez ici votre sujet de veille, les outils utilisés (Google Alerts, Feedly...) et l'impact des récentes évolutions technologiques sur votre domaine.</p>
              </Card>
            </motion.section>
          )}

          {activeTab === "contact" && (
            <motion.section key="contact" {...fadeAnim}>
              <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Contact</h3>
                <p className="text-gray-700 mb-4">Vous pouvez ajouter ici un formulaire de contact (ex: nom, email, message) ou laisser vos informations professionnelles.</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700"><strong>Email pro:</strong> <a href="mailto:nesrine.benallal@ecoles-epsi.net" className="hover:underline">nesrine.benallal@ecoles-epsi.net</a></p>
                    <p className="text-gray-700 mt-2"><strong>Téléphone:</strong> <a href="tel:+33787803166" className="hover:underline">07 87 80 31 66</a></p>
                  </div>
                  <div className="flex-1">
                    <a href="https://www.linkedin.com/in/nesrine-benallal-472a7b250" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline"><Linkedin className="w-5 h-5"/> Mon LinkedIn</a>
                    <div className="mt-3">
                      <a href="/Cv benallal Nesrine .pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:underline"><FileText className="w-5 h-5"/> Télécharger le CV</a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600 font-medium">
          © 2025 — Portfolio de Nesrine Benallal
        </footer>
      </main>
    </div>
  );
}
