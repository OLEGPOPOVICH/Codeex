import VueRouter from 'vue-router'
import AllСompanies from './pages/AllСompanies.vue'
import AddCompany from './pages/AddCompany.vue'
import EditСompanies from './pages/EditСompanies.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: AllСompanies
    },
    {
      path: '/add-company',
      component: AddCompany
    },
    {
      path: '/edit-companies',
      component: EditСompanies
    }

  ],
  mode: 'history'

})
