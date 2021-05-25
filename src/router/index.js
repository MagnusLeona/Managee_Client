import {createRouter, createWebHistory } from 'vue-router';
import user from './routes/user';
import route from './routes/default';
import toolbar from './routes/toolbar';

const router = createRouter({
  history: createWebHistory('/magnus/'),
  routes: [
    ...user,
    ...route,
    ...toolbar
  ]
});

export default router;