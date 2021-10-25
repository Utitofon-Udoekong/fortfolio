import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/login.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/auth/signup.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: () => import('../views/ComingSoon.vue')
  },
  {
    path: '/constructionpage',
    name: 'ConstructionPage',
    component: () => import('../views/Construction.vue')
  },
  {
    path: '/termsAndConditions',
    name: 'TermsAndConditions',
    component: () => import('../views/TermsAndConditions.vue')
  },
  {
    path: '/dashboard/:user',
    name: 'dashboard-user-account',
    component: () => import('../views/dashboard/_user/index.vue'),
    meta: {
      layout: 'DashboardLayout',
      auth: true
    },
    children: [
      {
        path: '',
        name: 'dashboard-user-account',
        component: () => import('../views/dashboard/_user/index.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-profile',
        component: () => import('../views/dashboard/_user/profile.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-investment',
        component: () => import('../views/dashboard/_user/investment.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-plans',
        component: () => import('../views/dashboard/_user/plans.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-deposit',
        component: () => import('../views/dashboard/_user/deposit.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-withdraw',
        component: () => import('../views/dashboard/_user/withdraw.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
      {
        name: 'dashboard-user-transactions',
        component: () => import('../views/dashboard/_user/transactions.vue'),
        meta: {
          layout: 'DashboardLayout',
          auth: true
        }
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
