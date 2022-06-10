<template>
    <footer id="footer">
        <div
            class="bg-black-500 bg-no-repeat bg-fixed bg-footer-texture bg-center bg-cover bg-blend-overlay p-8 md:px-20 sm:py-14 text-white"
        >
            <div class="md:flex justify-around items-start">
                <div class="max-w-xs">
                    <div class="image w-20 h-auto mb-3">
                        <img src="@/assets/images/logo.svg" class="w-full h-full" alt="LOGO" />
                    </div>
                    <p>We are keen on demistyfying the mode of operation in the cryptocurrency market by leveraging the knowledge, experience and expertise of industry professionals</p>
                    <span class="flex mt-3">
                        <a href="#"> <Icon icon="cib:facebook-f" color="white" width="23" height="23" class="mr-4" /> </a>
                        <a href="#"> <Icon icon="la:instagram" color="white" width="23" height="23" class="mr-4" /> </a>
                        <a href="#"> <Icon icon="carbon:logo-twitter" color="white" width="23" height="23" class="mr-4" /> </a>
                        <a href="#"> <Icon icon="cib:whatsapp" color="white" width="23" height="23" class="mr-4" /> </a>
                    </span>
                </div>
                <div class="w-40 my-10 sm:my-0">
                    <h1 class="font-semibold text-xl pb-4">COMPANY</h1>
                    <ul class="text-md leading-8">
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#plans">Services</a>
                        </li>
                        <li>
                            <a href="/consultation" target="_blank">Contact Us</a>
                        </li>
                        <li>
                            <a href="#faq">FAQs</a>
                        </li>
                        <li>
                            <a href="/termsAndConditions">Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="w-40 mb-10 sm:mb-0">
                    <h1 class="font-semibold text-xl pb-4">CONTACT</h1>
                    <ul class="text-md leading-8">
                        <li><a href="mailto:support@fortfolio.info">support@fortfolio.info</a></li>
                        <li><a href="tel:+2349073177243">+2349073177243</a></li>
                        <li>Suite J269, road 5, ikota shopping complex. VGC, Ajah Lagos</li>
                    </ul>
                </div>
                <div class="max-w-xs">
                    <h1 class="font-semibold text-xl pb-4">Get Latest Updates & Offers</h1>
                    <div>
                        <form class="w-full">
                            <div class="flex items-center border-b border-white py-1">
                                <input
                                    class="text-sm appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-white" type="text" placeholder="Enter your email" aria-label="Email" />
                                <button class="flex-shrink-0 text-md p-1 rounded-md text-white " type="button" >Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <p
                        class="pt-6"
                    >Signup for our newsletter to get free update, promotion, news & insight about Finance</p>
                </div>
            </div>
            <hr class="border-none h-px bg-white w-full my-6" />
            <p
                class="text-left sm:text-center py-2"
            >Disclaimer: Trading of leveraged products carries a high level ofrisk, and may not be suitable for all investors.</p>
            <p class="text-left sm:text-center">© 2020 Fortfolio . All rights reserved</p>
        </div>
    </footer>
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
.bg-black-500{
    background-color: rgba(0, 0, 0, 0.959)!important;
}
</style>