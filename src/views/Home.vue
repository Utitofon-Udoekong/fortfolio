<template>
  <div class="home">
    <HeadSection/>
    <IntroBanner/>
    <AboutSection/>
    <HowToInvest/>
    <OfferSection/>
    <InvestmentPlans/>
    <Recommendations/>
    <WhyChooseUs/>
    <FAQs/>
    <CallUsSection/>
    <Footer/>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
*{
  scroll-behavior: smooth;
}
</style>
