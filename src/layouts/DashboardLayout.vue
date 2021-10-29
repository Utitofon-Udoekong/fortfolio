<template>
  <div class="flex w-full h-screen relative">
    <div
      class="
        md:block
        hidden
        h-full
        bg-white
        ease-linear
        transition-all
        duration-300
      "
      :class="showSideBar ? 'w-2/12' : 'w-0'"
    >
      <span class="flex w-full items-center p-8 border-b">
        <img
          src="@/assets/images/logo-text.png"
          class="h-auto w-20 sm:w-32"
          alt="logo"
        />
      </span>
      <div class="w-full pl-4">
        <div v-for="(menu, i) in menus" :key="i" class="w-full">
          <router-link
            :to="menu.path"
            :class="
              $route.path === menu.path
                ? 'bg-brand-blue text-white'
                : 'text-brand-blue'
            "
            class="
              w-full
              flex
              items-center
              text-md
              p-3
              hover:bg-brand-blue hover:text-white
            "
          >
            <div class="icon mr-4">
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                class="inline-block fill-current"
              >
                <path :d="menu.icon" />
              </svg>
            </div>
            <p>{{ menu.name }}</p>
          </router-link>
        </div>
        <div class="w-full">
          <router-link
            to="/login"
            class="
              w-full
              flex
              items-center
              text-brand-blue text-md
              p-3
              hover:bg-brand-blue hover:text-white
            "
          >
            <div class="icon mr-4">
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                class="inline-block fill-current"
              >
                <path :d="mdiArrowULeftTop" />
              </svg>
            </div>
            <p>Logout</p>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="
        h-full
        block
        md:hidden
        bg-white
        ease-linear
        transition-all
        duration-100
      "
      :class="
        showSideBar
          ? 'md:w-6/12 w-full absolute inset-y-0 left-0 bg-white z-40'
          : 'static w-0'
      "
    >
      <span class="flex justify-between w-full items-center p-8 border-b">
        <img
          src="@/assets/images/logo-text.png"
          class="h-auto w-20 sm:w-32"
          alt="logo"
        />
        <svg
          @click="showSideBar = !showSideBar"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          class="cursor-pointer inline-block fill-current mr-3"
        >
          <path :d="mdiClose" />
        </svg>
      </span>
      <div class="w-full pl-4">
        <div v-for="(menu, i) in menus" :key="i" class="w-full">
          <router-link
            @click="showSideBar = !showSideBar"
            :to="menu.path"
            :class="
              $route.path === menu.path
                ? 'bg-brand-blue text-white'
                : 'text-brand-blue'
            "
            class="
              w-full
              flex
              items-center
              text-md
              p-3
              hover:bg-brand-blue hover:text-white
            "
          >
            <div class="icon mr-4">
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                class="inline-block fill-current"
              >
                <path :d="menu.icon" />
              </svg>
            </div>
            <p>{{ menu.name }}</p>
          </router-link>
        </div>
        <div class="w-full">
          <router-link
            to="/login"
            class="
              w-full
              flex
              items-center
              text-brand-blue text-md
              p-3
              hover:bg-brand-blue hover:text-white
            "
          >
            <div class="icon mr-4">
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                class="inline-block fill-current"
              >
                <path :d="mdiArrowULeftTop" />
              </svg>
            </div>
            <p>Logout</p>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="h-full bg-gray-200 ease-linear transition-all duration-300"
      :class="showSideBar ? 'md:w-10/12 w-full' : 'w-full'"
    >
      <div
        class="
          flex
          justify-between
          items-center
          p-4
          border-b border-gray-300
          h-1/6
        "
      >
        <div class="flex">
          <svg
            @click="showSideBar = !showSideBar"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            class="cursor-pointer inline-block fill-current mr-3"
          >
            <path :d="mdiSegment" />
          </svg>
          <p class="text-brand-blue text-xl font-semibold">{{ breadcrumb }}</p>
        </div>
        <button class="p-3 bg-brand-blue text-white text-sm rounded-md">
          Hello {{ user }}
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import {
  mdiClose,
  mdiSegment,
  mdiAlphaDBox,
  mdiAccountCircleOutline,
  mdiCashLock,
  mdiCashPlus,
  mdiCartPlus,
  mdiCashMinus,
  mdiCellphoneWireless,
  mdiArrowULeftTop,
} from "@mdi/js";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "DashboardLayout",
  setup() {
    const menus = [
      {
        name: "Dashboard",
        path: `/dashboard/${user}`,
        icon: mdiAlphaDBox,
      },
      {
        name: "Profile",
        path: `/dashboard/${user}/profile`,
        icon: mdiAccountCircleOutline,
      },
      {
        name: "My Investment",
        path: `/dashboard/${user}/investments`,
        icon: mdiCashLock,
      },
      {
        name: "Investment Plans",
        path: `/dashboard/${user}/plans`,
        icon: mdiCartPlus,
      },
      {
        name: "Deposit Funds",
        path: `/dashboard/${user}/deposit`,
        icon: mdiCashPlus,
      },
      {
        name: "Request Payout",
        path: `/dashboard/${user}/withdraw`,
        icon: mdiCashMinus,
      },
      {
        name: "Transactions",
        path: `/dashboard/${user}/transactions`,
        icon: mdiCellphoneWireless,
      },
    ];
    const showSideBar = ref(true);
    const store = useStore();
    const user = computed(() => {
      return store.getters.email;
    });
    

    return {
      menus,
      mdiArrowULeftTop,
      mdiSegment,
      mdiClose,
      showSideBar,
      user,
    };
  },
};
</script>