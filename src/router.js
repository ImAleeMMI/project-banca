import { createRouter, createWebHistory } from "vue-router";

import HomePage from './views/pages/HomePage.vue';
import NotFound from './views/pages/error/NotFound.vue';
import ErrorPage from './views/pages/error/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: '/:id?',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/:notFound(.*)',
        component: NotFound,
        name: 'notFound'
    },
    {
        path: '/error',
        component: ErrorPage,
        name: 'errorPage'
    }
  ],
});

export default router;