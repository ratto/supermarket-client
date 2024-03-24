import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import RegistrationView from "../views/RegistrationView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationView
  }
]

export default routes
