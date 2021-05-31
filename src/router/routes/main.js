import user from './main/user';
import def from './main/default';

const routes = [
  {
    path: '/main',
    component: () => import('../../views/main/app/index'),
    children: [
      ...user,
      ...def
    ]
  }
];

export default routes;