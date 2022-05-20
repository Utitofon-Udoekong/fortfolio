<template>
  <div class="home">
    <HeadSection />
    <IntroBanner />
    <AboutSection />
    <HowToInvest />
    <InvestmentPlans />
    <OfferSection />
    <WhyChooseUs />
    <Recommendations />
    <FAQs />
    <CallUsSection />
    <Footer />
    <div class="cwu"></div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core"
import HeadSection from "../components/HeadSection.vue";
import IntroBanner from "../components/IntroBanner.vue";
import AboutSection from "../components/AboutSection.vue";
import HowToInvest from "../components/HowToInvest.vue";
import OfferSection from "../components/OfferSection.vue";
import InvestmentPlans from "../components/InvestmentPlans.vue";
import Recommendations from "../components/Recommendations.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import FAQs from '../components/FAQs.vue';
import CallUsSection from '../components/CallUsSection.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Home',
  components: {
    HeadSection,
    IntroBanner,
    AboutSection,
    HowToInvest,
    OfferSection,
    InvestmentPlans,
    Recommendations,
    WhyChooseUs,
    FAQs,
    CallUsSection,
    Footer
  },
  setup(){
    onMounted(() => {
       const fortform = document.querySelector(".cwu");
        const formscript = document.createElement("script")
        formscript.setAttribute("src", "//js-eu1.hs-scripts.com/25881000.js")
        formscript.setAttribute("id","hs-script-loader")
        formscript.setAttribute("type", "text/javascript")
        formscript.setAttribute("defer", "")
        formscript.setAttribute("async", "")
        fortform.appendChild(formscript)
    })
  }

}
</script>

<style>

</style>
