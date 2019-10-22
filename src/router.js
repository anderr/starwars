import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const StartPage = () => import('./components/StartPage')
const PeoplePage = () => import('./components/PeoplePage')
const PersonPage = () => import('./components/PersonPage')
const NotFoundPage = () => import('./components/errors/NotFoundPage')

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
        component: PeoplePage
      },
      {
        path: '/people',
        name: 'people',
        component: PeoplePage,
      },
      {
        path: '/people/:id',
        name: 'person',
        component: PersonPage,
        props: true
      },
      {
        path: '*',
        name: 'notfound',
        component: NotFoundPage
      }
    ]
});
