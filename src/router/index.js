import Vue from 'vue';
import Router from 'vue-router';
import paths from './paths';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);
const router =  new Router({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: paths
});
// router gards
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   next();
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('userToken')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      NProgress.start();
      next();
    }
  } else {
    NProgress.start();
    next();
  }
});

router.afterEach((to, from) => {
  // ...
  NProgress.done();
});

export default router;
