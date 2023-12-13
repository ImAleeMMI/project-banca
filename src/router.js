import { createRouter, createWebHistory } from "vue-router";

import HomePage from './views/pages/HomePage.vue';
import NotFound from './views/NotFound.vue';
import ErrorPage from './views/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: '/:id?',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/:404(.*)',
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