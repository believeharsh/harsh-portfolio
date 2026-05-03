import { Experience } from '@/config/Experience';
import Image from 'next/image';
import React from 'react';

import Skill from '../common/Skills';
import { Separator } from '../ui/separator';

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={100}
              height={100}
              className="size-6 rounded-sm"
            />
            <h3 className="text-foreground font-semibold text-md">
              {experience.company}
            </h3>
          </div>
          <p className="text-muted-foreground">{experience.position}</p>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <p>{experience.startDate + ' - ' + experience.endDate}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <Separator />
      <div className="max-w-3xl">
        <h4 className="text-foreground tracking-wide font-medium py-2">
          Work I did
        </h4>
        <div className="">
          {experience.descritption.map(
            (description: string, descriptionIndex: number) => (
              <p key={descriptionIndex} className="text-muted-foreground">
                • {description}
              </p>
            ),
          )}
        </div>
      </div>

      <div>
        <h4 className="text-foreground tracking-wide font-medium py-2">
          Tools & Technology
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>
    </div>
  );
}
