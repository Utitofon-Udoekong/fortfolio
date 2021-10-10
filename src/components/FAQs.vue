<template>
    <div class="md:flex justify-center items-center px-12 md:px-28 md:flex-row flex-col" id="faq">
        <div class="md:p-8 pb-8">
            <h1
                class="text-3xl font-semibold text-brand-lightblue pb-2"
            >WHO CAN INVEST WITH FORTFOLIO?</h1>
            <hr class="border-none h-1 bg-brand-blue mb-5" />
            <div class="text-md sm:text-lg">
                <p>We have everyone in mind that is why we have different packages to suit all intending investors regardless what you earn.</p>
                <p>Our packages ranges from 50,0000 - 1,000,000 upwards.</p>
                <p>Below are some of the fort packages</p>
                <ul class="list-disc list-inside">
                    <li>Fort - 50k minimum</li>
                    <li>Fort growth – 100k</li>
                    <li>Forth star – 200k</li>
                    <li>Forth boss – 500k</li>
                    <li>Fort Chairman – 1m and above</li>
                </ul>
            </div>
        </div>
        <div>
            <h1 class="text-5xl sm:text-7xl font-bold text-brand-lightblue">FAQS</h1>
            <div class="w-full mx-auto sm:py-4 py-0">
                <div>
                    <div class="tab w-full overflow-hidden border-b-2 border-brand-lightblue border-solid" v-for="(faq, i) in faqs" :key="i" >
                        <input class="absolute opacity-0" :id="faq.id" type="radio" name="tabs2" />
                        <label class="block py-5 leading-normal cursor-pointer" :for="faq.id" >{{ faq.q }}</label>
                        <div class="tab-content text-white text-md bg-brand-lightblue overflow-hidden border-l-2 border-brand-lightblue leading-normal" >
                            <p class="p-5">{{ faq.a }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
const faqs = [
    {
        q: "Is the company regulated?",
        a: "We are registered under CAC RC:1742448",
        id: "tab-single-one"
    },
    {
        q: "Do you give loans",
        a: "No we don't give loans but we give our investors a free asset finance",
        id: "tab-single-two"
    },
    {
        q: "How does the company generate its profit?",
        a: "Fortfolio generate their income from the businesses that we do which are; cryptocurrency trading, car windshield, e-commerce, POS services, real estate, social media management and Shortlets",
        id: "tab-single-three"
    },
    {
        q: "Do you have a Physical Office?",
        a: "Yes, Suite 269 Road 5 Ikota shopping complex lagos",
        id: "tab-single-four"
    },
    {
        q: "What is the Minimum investment tenure?",
        a: "6 months",
        id: "tab-single-five"
    },
    {
        q: "What is the minimum amount to invest?",
        a: "The minimum investment is 50,000 naira",
        id: "tab-single-six"
    },

]

export default {
    components: {
    },
    setup() {
        onMounted(() => {
            let myRadios = document.getElementsByName('tabs2');
            let setCheck;
            let x = 0;
            for (x = 0; x < myRadios.length; x++) {
                myRadios[x].onclick = function () {
                    if (setCheck != this) {
                        setCheck = this;
                    } else {
                        this.checked = false;
                        setCheck = null;
                    }
                };
            }
        })
        return {
            faqs
        }
    }
}
</script>

<style scoped>
.tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
    max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
    color: #00adee;
}
/* Icon */
.tab label::after {
    float: right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
    text-align: center;
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
    content: "+";
}
.tab input[type="radio"] + label::after {
    content: "+";
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
    content: "-";
}
.tab input[type="radio"]:checked + label::after {
    content: "-";
}
</style>