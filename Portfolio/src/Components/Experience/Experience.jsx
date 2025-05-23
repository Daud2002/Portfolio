import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experience = {
    company: "SevenStacks",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Dec 18, 2024 – Jan 31, 2025",
      },
      {
        title: "Associate Software Engineer",
        period: "Feb 1, 2025 – Present",
      },
    ],
    description: [
      "Leading frontend development on enterprise-scale applications using MERN stack and Next.js.",
      "Worked on AI-driven applications, healthcare platforms, and long-term enterprise projects.",
      "Mentored and trained new interns in frontend developement, Git workflows, UI best practices, and project onboarding.",
      "Continuously optimized code performance, accessibility, and responsiveness across devices.",
      "Converted complex Figma designs into responsive production-ready code.",
    ],
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="experience">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Briefcase className="inline mr-2 text-blue-600" />
        Experience
      </motion.h2>

      <motion.div
        className="relative border-l-2 border-gray-300 pl-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-md" />
        <h3 className="text-xl font-semibold text-blue-500">{experience.company}</h3>

        {experience.roles.map((role, idx) => (
          <div key={idx} className="mb-2">
            <p className="text-md font-medium text-gray-700">{role.title}</p>
            <p className="text-sm text-gray-500">{role.period}</p>
          </div>
        ))}

        <ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
