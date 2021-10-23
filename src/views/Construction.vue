<template>
    <div class="flex items-center justify-center h-screen">
        <div class="text-center text-black max-w-full px-2 sm:px-0 sm:max-w-3xl">
            <h1
                class="text-2xl sm:text-5xl font-bold pb-3"
            >Oops, sorry this feature is not yet available on the website.</h1>
            <p class="text-lg pb-10">
                Contact
                <a href="tel:+234 807 073 8825" class="text-brand-blue">+234 807 073 8825</a> to process your request.
            </p>
            <button class="text-white p-4 rounded-md">
                <a href="https://wa.link/rpdo9m" target="_blank">Chat us on WhatsApp</a>
            </button>
            <p class="pt-10 flex justify-center items-center">
                <Icon icon="cil:arrow-left" class="pr-2" width="25" />Go back
                <a href="/" class="text-brand-blue pl-2">home</a>
            </p>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
}
</script>

<style scoped>
button {
    background: #00af9c;
}
</style>