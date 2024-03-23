import { createRouter, createWebHistory } from 'vue-router';
import Upload from '../pages/upload.vue';
import Card from '../pages/card.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card',
      component: Card
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }, {
      path: '/:pathMatch(.*)*',
      name: '404',
      redirect: '/'
    }
  ]
});

export default router;
