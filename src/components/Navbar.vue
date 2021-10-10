<template>
    <nav
        class="flex w-full items-center justify-between md:justify-around text-gray-700"
    >
        <div class="flex items-center">
            <div class="logo w-20 h-20 sm:w-32 sm:h-32">
                <img src="@/assets/images/logo.png" class="w-full h-full" alt="logo" />
            </div>
        </div>
        <div class="flex items-center">
            <div class="hidden md:flex md:justify-between items-center md:bg-transparent">
                <ul class="inline-flex">
                    <li
                        class="text-white text-md mx-4"
                        v-for="(link, i) in navigation"
                        :key="i"
                    ><a :href="link.href">{{ link.name }}</a></li>
                </ul>
            </div>
        </div>
        <button
            class="hidden md:block bg-transparent text-white rounded-md text-lg font-bold"
        ><a href="/login">SIGNUP | LOGIN</a></button>
        <button class="mr-2 block md:hidden" aria-label="Open Menu" @click="drawer">
            <svg
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-8 h-8"
            >
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
        >
            <div
                @keydown.esc="isOpen = false"
                v-show="isOpen"
                class="z-10 fixed inset-0 transition-opacity"
            >
                <div
                    @click="isOpen = false"
                    class="absolute inset-0 bg-black opacity-50"
                    tabindex="0"
                ></div>
            </div>
        </transition>
        <aside
            class="transform top-0 left-0 w-full sm:w-72 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
                <img src="@/assets/images/logo.png" class="h-auto w-20 sm:w-32 mx-auto" alt="logo" />
            </span>
            <span
                @click="isOpen = false"
                class="flex items-center p-4 hover:bg-brand-lightblue hover:text-white"
                v-for="(link, i) in navigation" 
                :key="i"
            >
                <span><a :href="link.href">{{link.name}}</a></span>
            </span>
            <div class="fixed bottom-0 w-full">
                <button
                    class="flex items-center p-4 text-white bg-brand-lightblue hover:bg-blue-600 w-full"
                >
                    <span><a href="/login">Login</a></span>
                </button>
            </div>
        </aside>
    </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'How to Invest', href: '#steps' },
    { name: 'Plans', href: '#plans' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact us', href: '#footer' },
]
export default {
    setup() {
        let isOpen = ref(false)
        const drawer = () => {
            isOpen.value = !isOpen.value
        }
        onMounted(() => {
            document.addEventListener("keydown", e => {
                if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
            });
        })

        return {
            isOpen,
            navigation,
            drawer
        };
    },

    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen) document.body.style.setProperty("overflow", "hidden");
                    else document.body.style.removeProperty("overflow");
                }
            }
        }
    },
};
</script>