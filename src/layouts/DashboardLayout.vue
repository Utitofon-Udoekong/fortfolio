<template>
  <div class="flex w-full h-screen">
    <div class="w-1/4 h-full bg-gray-600">
      <!-- <router-link to="/dashboard/moses" class="text-white">
      <a href="">Main</a>
      </router-link>
      <router-link to="/dashboard/moses/payment">payment</router-link>-->
      <span class="flex w-full items-center p-4 border-b">
        <img src="@/assets/images/logo.png" class="h-auto w-20 sm:w-32 mx-auto" alt="logo" />
      </span>
      <div class="w-full pl-4">
        <div v-for="(menu,i) in menus" :key="i" class="w-full">
          <router-link :to="menu.path" class="w-full flex items-center text-white text-md p-3 hover:bg-gray-900" >
            <div class="icon mr-4">
              <svg viewBox="0 0 24 24" width="25" height="25" fill="#fff" class="inline-block">
                <path :d="menu.icon" />
              </svg>
            </div>
            <p>{{ menu.name }}</p>
          </router-link>
        </div>
        <div class="w-full">
          <router-link to="/dashboard/moses" class="w-full flex items-center text-white text-md p-3 hover:bg-gray-900">
            <div class="icon mr-4">
              <svg viewBox="0 0 24 24" width="25" height="25" fill="#fff" class="inline-block">
                <path :d="mdiArrowULeftTop" />
              </svg>
            </div>
            <p>Logout</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-3/4 h-full bg-gray-900">
      <slot />
    </div>
  </div>
</template>

<script>
import { mdiAlphaDBox, mdiAccountCircleOutline, mdiCashLock, mdiCashPlus, mdiCartPlus, mdiCashMinus, mdiCellphoneWireless, mdiArrowULeftTop } from '@mdi/js'
const user = "moses"
const menus = [
  {
    name: "Dashboard",
    path: `/dashboard/${user}`,
    icon: mdiAlphaDBox
  },
  {
    name: "Profile",
    path: `/dashboard/${user}/profile`,
    icon: mdiAccountCircleOutline
  },
  {
    name: "My Investment",
    path: `/dashboard/${user}/investments`,
    icon: mdiCashLock
  },
  {
    name: "Investment Plans",
    path: `/dashboard/${user}/plans`,
    icon: mdiCartPlus
  },
  {
    name: "Deposit Funds",
    path: `/dashboard/${user}/deposit`,
    icon: mdiCashPlus
  },
  {
    name: "Request Payout",
    path: `/dashboard/${user}/withdraw`,
    icon: mdiCashMinus
  },
  {
    name: "Transactions",
    path: `/dashboard/${user}/transactions`,
    icon: mdiCellphoneWireless
  },
]
export default {
  name: "DashboardLayout",
  setup() {
    return {
      menus,
      mdiArrowULeftTop
    }
  }
}
</script>