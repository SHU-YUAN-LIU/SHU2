import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const history = createWebHistory('SHU2');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  //跳轉頁面後,會回到最上成
  scrollBehavior(to, from, savedPosition) {
    // 如果有 savedPosition，使用它，不然滾動到頁面最上面
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }


  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
