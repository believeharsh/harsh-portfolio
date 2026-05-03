import { type Experience, experiences } from '@/config/Experience';
import Link from 'next/link';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ExperienceCard from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container>
      <SectionHeading subHeading="Experience" heading="Experience" />
      <div className="">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-7 flex justify-center">
        <Button variant={'outline'} size="lg">
          <Link href="/experiece" className="text-foreground">
            View All Experience
          </Link>
        </Button>
      </div>
    </Container>
  );
}
