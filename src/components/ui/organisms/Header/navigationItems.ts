import { NavigationItemProps } from '../../atoms/NavigationItem/types';

export const navigationItems: NavigationItemProps[] = [
  {
    id: 0,
    name: 'home',
    text: '/01 Home',
    type: 'li',
    to: 'home',
  },
  {
    id: 1,
    name: 'about',
    text: '/02 About',
    type: 'li',
    to: 'about',
  },
  {
    id: 2,
    name: 'portfolio',
    text: '/03 Portfolio',
    type: 'li',
    to: 'portfolio',
  },
  {
    id: 3,
    name: 'contact',
    text: '/04 Contact',
    type: 'li',
    to: 'contact',
  },
  {
    id: 4,
    name: 'resume',
    text: 'Resume / CV',
    type: 'button',
    to: null,
  },
];
