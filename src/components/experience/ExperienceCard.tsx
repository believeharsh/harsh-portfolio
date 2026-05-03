import { Experience } from '@/config/Experience';
import React from 'react';

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{experience.company}</h1>
      <h2 className="text-xl font-medium">{experience.position}</h2>
      <p className="text-lg font-normal">{experience.location}</p>
      <p className="text-lg font-normal">
        {experience.startDate} - {experience.endDate}
      </p>
      <div className="flex gap-2">
        {experience.technologies.map((tech) => (
          <div key={tech.name} className="flex items-center gap-2">
            {tech.icon}
            <span className="text-lg font-normal">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
