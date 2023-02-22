interface INavigationItem {
  name: string;
  path: string;
}

export const navigationList: INavigationItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  { name: 'Contacts', path: '/contacts' },
  {
    name: 'Products',
    path: '/products',
  },
];
