import {createRouter, createWebHistory } from 'vue-router';
import login from './routes/login';
import main from './routes/main';

const router = createRouter({
  history: createWebHistory('/magnus/'),
  routes: [
    ...login,
    ...main
  ]
});

export default router;