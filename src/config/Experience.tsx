import LucideIcon from '@/components/lucide-icons/LucideIconMap';
import ExpressJs from '@/components/svgs/technologies/ExpressJs';
import Firebase from '@/components/svgs/technologies/Firebase';
import GCP from '@/components/svgs/technologies/GCP';
import MongoDB from '@/components/svgs/technologies/MongoDB';
import NodeJs from '@/components/svgs/technologies/NodeJs';
import Postman from '@/components/svgs/technologies/Postman';
import ReactIcon from '@/components/svgs/technologies/ReactIcon';
import TailwindCss from '@/components/svgs/technologies/TailwindCss';
import TypeScript from '@/components/svgs/technologies/TypeScript';
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
    companyLogo: '/company/evoltsoft.png',
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
        name: 'Express',
        href: '',
        icon: <ExpressJs />,
      },
      {
        name: 'Node',
        href: '',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: '',
        icon: <Postman />,
      },
      {
        name: 'Firebase',
        href: '',
        icon: <Firebase />,
      },
      {
        name: 'GCP',
        href: '',
        icon: <GCP />,
      },
    ],
    isWorking: true,
  },
  {
    company: 'iTUX',
    position: 'Full Stack Developer (Intern)',
    location: 'Pune, Maharashtra, India (Remote)',
    image: '',
    companyLogo: '/company/iTUX.png',
    startDate: 'Jul 2023',
    endDate: 'Dec 2023',
    descritption: [
      'Led development of CRM platform landing page using React, Tailwind CSS, and TypeScript',
      'Built scalable backend with Node.js, Express, and MongoDB with optimized RESTful APIs',
      'Integrated Razorpay payment gateway and Cloudinary image management',
    ],
    companyLinkedinPageUrl: 'https://www.linkedin.com/company/itux',
    technologies: [
      {
        name: 'Express',
        href: '',
        icon: <ExpressJs />,
      },
      {
        name: 'Node',
        href: '',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: '',
        icon: <ReactIcon />,
      },
      {
        name: 'MongoDB',
        href: '',
        icon: <MongoDB />,
      },
      {
        name: 'Tailwind',
        href: '',
        icon: <TailwindCss />,
      },
    ],
    isWorking: false,
  },
];
