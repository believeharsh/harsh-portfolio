export interface NavbarItems {
  label: string;
  href: string;
}

export const navbarConfig = {
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Experience',
      href: '/experience',
    },
  ] as NavbarItems[],
};
