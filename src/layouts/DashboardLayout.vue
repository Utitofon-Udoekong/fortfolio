<template>
  <error-alert />
  <success-alert />
  <loading />
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
        <div @click="logout" class="w-full cursor-pointer">
          <a
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
          </a>
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
          <p class="text-brand-blue text-base md:text-xl font-semibold">{{ breadcrumb }}</p>
        </div>
        <div class="relative">
          <button @click="showProfileCard = !showProfileCard"  class="p-2 md:p-3 bg-brand-blue text-white text-xs md:text-sm rounded-md" >
            Hello {{ user }}
            <span class="icon" >
              <svg viewBox="0 0 24 24" width="25" height="25" class="inline-block fill-current" >
                <path :d="mdiMenuDown" />
              </svg>
            </span>
          </button>
          <div v-if="showProfileCard" class="absolute z-20 translate-y-full text-white bg-brand-blue p-4 w-52 right-2 rounded-md shadow-xl bg-opacity-95 -bottom-1 transform transition-all ease-linear duration-300" >
            <div v-for="(profile, i) in profiles" :key="i" class="rounded-r-lg p-1 hover:bg-white hover:text-brand-blue">
              <router-link @click="showProfileCard = !showProfileCard" :to="profile.path" class="w-full flex items-center mb-2" >
                <span class="icon mr-4">
                  <svg viewBox="0 0 24 24" width="25" height="25" class="inline-block fill-current" >
                    <path :d="profile.icon" />
                  </svg>
                </span>
                <p>{{ profile.name }}</p>
              </router-link>
            </div>
            <div class="p-1 hover:bg-white hover:text-brand-blue">
              <a href="" class="flex w-full items-center">
                <div class="icon mr-4">
                  <svg viewBox="0 0 24 24" width="25" height="25" class="inline-block fill-current" >
                    <path :d="mdiArrowULeftTop" />
                  </svg>
                </div>
                <p>Logout</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mdiClose, mdiSegment, mdiArrowULeftTop, mdiMenuDown } from "@mdi/js";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import menus from "../api/menu";
import profiles from "../api/profile";
import { useRoute } from "vue-router";
import ErrorAlert from "../components/alerts/ErrorAlert.vue";
import SuccessAlert from "../components/alerts/SuccessAlert.vue";
import Loading from "../components/alerts/Loading.vue";
export default {
  components: { ErrorAlert, SuccessAlert, Loading },
  name: "DashboardLayout",
  setup() {
    const showSideBar = ref(true);
    const showProfileCard = ref(false);
    const store = useStore();
    const route = useRoute();
    const user = computed(() => {
      return store.getters.user.firstName;
    });
    const breadcrumb = computed(() => {
      menus.forEach((menu) => {
        if (menu.path === route.path) {
          return menu.name;
        } else return "Dashboard";
      });
      return "Dashboard";
    });
    const logout = () => {
      store.commit("loading", true);
      store.dispatch("logout");
    };
    return {
      logout,
      breadcrumb,
      menus,
      mdiArrowULeftTop,
      mdiSegment,
      mdiClose,
      showSideBar,
      user,
      profiles,
      mdiMenuDown,
      showProfileCard
    };
  },
};
</script>