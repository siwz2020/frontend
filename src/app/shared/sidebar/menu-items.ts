import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/starter',
    title: 'Zarezerwuj lot',
    icon: 'mdi mdi-airplane-takeoff',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/airports',
    title: 'Zaplanuj podróż',
    icon: 'mdi mdi-airballoon',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/trips',
    title: 'Twoje bilety',
    icon: 'mdi mdi-cart',
    class: '',
    extralink: false,
    submenu: []
  }
];
