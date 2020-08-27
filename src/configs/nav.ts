interface NavItem {
  title: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    title: 'About',
    slug: '/about',
  },
  {
    title: 'Blog',
    slug: '/blog/',
  },
  {
    title: 'Contact Me',
    slug: '/contact/',
  },
];

export default navItems;
