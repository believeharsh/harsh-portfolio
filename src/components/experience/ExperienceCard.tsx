import { Experience, Role } from '@/config/Experience';
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
      {/* Company Header */}
      <div className="flex justify-between items-center wrap-normal">
        <div className="flex gap-4 items-center">
          <div className="mt-1">
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={100}
              height={100}
              className="size-12 rounded-sm object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground tracking-tight">
            {experience.company}
          </h3>
        </div>
        {experience.overallDuration && (
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm font-medium shrink-0">
              {experience.overallDuration}
            </p>
            <p className="text-muted-foreground text-sm font-medium">
              {experience.location}
            </p>
          </div>
        )}
      </div>
      <Separator />

      {/* Roles Timeline */}
      <div className="relative border-l-2 border-muted-foreground/30 ml-[23px] pl-8 mt-2 flex flex-col gap-8">
        {experience.roles.map((role: Role, index: number) => (
          <div key={index} className="relative">
            {/* Timeline Dot  */}
            <div className="absolute -left-[40px] top-1.5 w-4 h-4 bg-muted-foreground/60 rounded-full ring-4 ring-background" />

            {/* Role Header */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col">
                <h4 className="text-foreground font-semibold text-md">
                  {role.position}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {role.startDate} - {role.endDate} . {role.duration}
                </p>
              </div>
            </div>

            {/* Role Description */}
            <div className="flex flex-col gap-2 mb-4">
              {role.descritption.map((desc: string, i: number) => (
                <p
                  key={i}
                  className="text-muted-foreground text-md font-medium -tracking-normal"
                >
                  • {desc}
                </p>
              ))}
            </div>

            {/* Role Technologies */}
            {role.technologies && role.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {role.technologies.map((tech, techIndex) => (
                  <Skill key={techIndex} name={tech.name} href={tech.href}>
                    {tech.icon}
                  </Skill>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
