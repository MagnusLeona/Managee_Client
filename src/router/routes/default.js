import index from '../../views/index';

const routes = [
  {
    path: '/',
    name: 'default',
    component: index
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }
];

export default routes;