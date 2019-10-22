import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const StartPage = () => import('./components/StartPage')
const MainPage = () => import('./components/MainPage')

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/start',
        name: 'start',
        component: StartPage
      },
      {
        path: '/',
        name: 'home',
        component: MainPage
      },
    ]
});
