"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

const certGradients = [
  "from-purple-600/20 to-blue-600/10",
  "from-blue-600/20 to-cyan-600/10",
  "from-cyan-600/20 to-purple-600/10",
  "from-violet-600/20 to-indigo-600/10",
  "from-indigo-600/20 to-purple-600/10",
  "from-purple-500/20 to-pink-600/10",
  "from-emerald-600/20 to-teal-600/10",
  "from-rose-600/20 to-purple-600/10",
];

const issuerLogos: Record<string, string> = {
  Cisco: "Cisco",
  ISRO: "ISRO",
  Nokia: "Nokia",
  Infosys: "Infosys",
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications that validate my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/20 transition-all duration-300 overflow-hidden cursor-default"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${certGradients[i % certGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                  <Award size={20} className="text-white" />
                </div>

                <h3 className="text-sm font-bold font-heading text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-purple-400">{cert.issuer}</p>
                <p className="text-[11px] text-gray-600 mt-1">{cert.year}</p>

                <div className="mt-3 flex items-center gap-1 text-[11px] text-gray-500 group-hover:text-purple-400 transition-colors">
                  <ExternalLink size={10} />
                  <span>View Certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
