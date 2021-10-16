<template>
    <nav
        class="flex w-full items-center justify-between md:justify-around text-gray-700 py-2 px-4 z-10 shadow-xl fixed top-0 inset-x-0 bg-white"
    >
        <div class="flex items-center">
            <div class="logo sm:w-24 sm:h-24 w-16 h-16">
                <img src="@/assets/images/logo.png" class="w-full h-full" alt="logo" />
            </div>
        </div>
        <div class="flex">
            <div class="flex items-center mr-3">
                <div class="hidden md:flex md:justify-between items-center md:bg-transparent">
                    <ul class="inline-flex">
                        <li
                            class="text-black text-md mx-4"
                            v-for="(link, i) in navigation"
                            :key="i"
                        >
                            <a :href="link.href">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button
                class="ease-linear transition-all duration-150 hover:bg-brand-blue hidden md:block bg-transparent bg-brand-lightblue text-white rounded-md text-md px-6 p-3 mr-2"
            >
                <a href="/login">Log in</a>
            </button>
            <button
                class="ease-linear transition-all duration-150 hover:bg-brand-lightblue hidden md:block bg-transparent bg-brand-blue text-white rounded-md text-md px-8 p-3"
            >
                <a href="/signup">Sign Up</a>
            </button>
        </div>
        <button class="mr-2 block md:hidden" aria-label="Open Menu" @click="drawer">
            <svg
                fill="none"
                stroke="#000"
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
            <span class="flex w-full justify-between items-center p-4 border-b">
                <img src="@/assets/images/logo.png" class="h-auto w-20 sm:w-32" alt="logo" />
                <span class="text-2xl" @click="isOpen = false">X</span>
            </span>
            <span
                @click="isOpen = false"
                class="flex justify-center items-center p-4 hover:bg-brand-lightblue hover:text-white"
                v-for="(link, i) in navigation"
                :key="i"
            >
                <span>
                    <a :href="link.href">{{ link.name }}</a>
                </span>
            </span>
            <div class="w-full">
                <button
                    class="flex justify-center items-center p-4 text-white bg-brand-lightblue mb-1 hover:bg-brand-blue w-full"
                >
                    <span>
                        <a href="/login">Login</a>
                    </span>
                </button>
                <button
                    class="flex justify-center items-center p-4 text-white bg-brand-blue hover:bg-brand-lightblue w-full"
                >
                    <span>
                        <a href="/signup">Sign Up</a>
                    </span>
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