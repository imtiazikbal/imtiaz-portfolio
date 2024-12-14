import React from "react";

interface Skill {
  name: string;
  percentage: number; // Skill proficiency as a percentage
}

const skills: Skill[] = [
  { name: "Express.js", percentage: 90 },
  { name: "Node.js", percentage: 85 },
  { name: "NestJS", percentage: 80 },
  { name: "Laravel", percentage: 88 },
  { name: "Django", percentage: 75 },
  { name: "MongoDB", percentage: 90 },
  { name: "MySQL", percentage: 85 },
  { name: "PostgreSQL", percentage: 80 },
];

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">My Expertise</h2>
          <p className="text-lg text-gray-600 mt-4">
            Here's a snapshot of my skills and proficiency in various technologies and tools.
          </p>
        </div>

        {/* Skill Bars */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                <span className="text-lg text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
