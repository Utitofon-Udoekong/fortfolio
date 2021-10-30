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
  },
  {
    path: '/forgotPassword',
    name: 'Forgot-Password',
    component: () => import('../views/auth/ForgotPassword.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/auth/signup.vue')
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
    path: '/dashboard',
    name: 'dashboard-user-account',
    component: () => import('../views/dashboard/_user/index.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/profile',
    name: 'dashboard-user-profile',
    component: () => import('../views/dashboard/_user/profile.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/investments',
    name: 'dashboard-user-investment',
    component: () => import('../views/dashboard/_user/investment.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/plans',
    name: 'dashboard-user-plans',
    component: () => import('../views/dashboard/_user/plans.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/deposit',
    name: 'dashboard-user-deposit',
    component: () => import('../views/dashboard/_user/deposit.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/withdraw',
    name: 'dashboard-user-withdraw',
    component: () => import('../views/dashboard/_user/withdraw.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/transactions',
    name: 'dashboard-user-transactions',
    component: () => import('../views/dashboard/_user/transactions.vue'),
    meta: {
      layout: 'DashboardLayout'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
