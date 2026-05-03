import LucideIcon from '@/components/lucide-icons/LucideIconMap';
import AnimatedNodeIcon from '@/components/svgs/technologies/Node.js';
import React from 'react';

export interface Technologies {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image?: string;
  companyLogo: string;
  startDate: string;
  endDate: string;
  descritption: string[];
  companyLinkedinPageUrl?: string;
  technologies: Technologies[];
  isWorking: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Evoltsoft Technologies',
    position: 'Full Stack Engineer Intern',
    location: 'Pune, Maharashtra, India (Remote)',
    image: '',
    companyLogo: '',
    startDate: 'Jan 2026',
    endDate: 'Present',
    descritption: [
      'Developing backend for EV Charging Station Management System (CSMS) using Firebase',
      'Implementing OCPP and OCPI protocols for seamless charger communication and interoperability',
      'Building scalable APIs and backend services for white-label EV solutions including portals and mobile apps',
      'Optimizing real-time data handling, session management, and charging workflows',
    ],
    companyLinkedinPageUrl: 'https://www.linkedin.com/company/evoltsoft',
    technologies: [
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        // icon: <LucideIcon name="" size={26} />
        icon: <AnimatedNodeIcon />,
      },
      // {
      //   name: "OCPP",
      //   href: "https://ocpp.org/",
      //   icon: <LucideIcon name="ocpp" size={26} />
      // },
      // {
      //   name: "OCPI",
      //   href: "https://ocpi.io/",
      //   icon: <LucideIcon name="ocpi" size={26} />
      // },
    ],
    isWorking: true,
  },
  {
    company: 'iTUX',
    position: 'Full Stack Developer Intern',
    location: 'Pune, Maharashtra, India (Remote)',
    image: '',
    companyLogo: '',
    startDate: 'Jul 2023',
    endDate: 'Dec 2023',
    descritption: [],
    companyLinkedinPageUrl: 'https://www.linkedin.com/company/itux',
    technologies: [],
    isWorking: false,
  },
];
