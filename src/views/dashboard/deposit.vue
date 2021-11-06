<template>
    <div class="p-4 overflow-y-scroll h-5/6">
        <div
            v-if="showAlert"
            class="fixed p-4 bg-brand-blue text-white inset-x-2 md:inset-x-20 transition-all duration-500 top-9 alert flex justify-between items-center"
        >
            <p>Deposit of {{ state.amount }} made</p>
            <p class="text-2xl cursor-pointer" @click="toggleAlert">&xotime;</p>
        </div>
        <form class="sm:px-8 mb-4" @submit.prevent="deposit">
            <p>Minimum amount to deposit {{ $route.query.minPrice }}</p>
            <div class="mb-4 flex flex-col md:flex-row w-full items-start md:items-center">
                <label
                    for="last"
                    class="w-full text-gray-800 font-semibold text-lg md:w-2/12"
                >Deposit</label>
                <div class="border-2 rounded-md w-full md:w-10/12">
                    <input
                        :minlength="$route.query.minPrice"
                        :maxlength="$route.query.maxPrice"
                        id="last"
                        class="text-md appearance-none shadow-md text-black bg-white border-none w-full p-2"
                        type="text"
                        v-model="state.amount"
                        placeholder="Enter amount here"
                    />
                </div>
                <small v-if="v$.amount.$error" class="text-red-600">
                    {{
                        v$.amount.$errors[0].$message
                    }}
                </small>
            </div>
            <button
                class="p-4 rounded-md text-white bg-brand-blue"
                @click.prevent="deposit"
            >Continue to Deposit</button>
        </form>

        <div class="sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- <div class="bankTransfer bg-white p-4 rounded-md w-full hover:shadow-xl cursor-pointer">
                <p class="text-xl font-bold pb-3">Pay via Bank Transfer</p>
                <p>Transfer the Amount to deposit into the following account details</p>
                <p>
                    BANK:
                    <span class="font-semibold select-all">UNITY BANK</span>
                </p>
                <p>
                    ACCOUNT NAME:
                    <span
                        class="font-semibold select-all"
                    >IK MOORE UNITED COMPANY NIGERIA LIMITED</span>.
                </p>
                <p>
                    ACCOUNT NUMBER:
                    <span class="font-semibold select-all">0028363372</span>
                </p>
            </div>
            <div class="bankTransfer bg-white p-4 rounded-md w-full hover:shadow-xl cursor-pointer">
                <p class="text-xl font-bold pb-3">Pay via crypto wallet</p>
                <p
                    class="pb-2"
                >Transfer the corresponding USD value (400 NGN/USD) to deposit to BTC wallet address:</p>
                <p class="pb-3 select-all font-semibold">1Br6XZA3uJxsvWCA2BsbbcfgURrcBtDTNP</p>
            </div>-->
        </div>
        <p class="p-8">
            After making payment, send a screenshot via Whatsapp to contact number:
            <a
                class="text-brand-blue font-semibold"
                href="tel:+2348120912268"
            >2348120912268</a>. An account will immediately be created for you and you will be added to all eligible training channels. All login details will be sent to you.
        </p>
    </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import useVuelidate from "@vuelidate/core";
import { required} from "@vuelidate/validators";
// import { useRoute } from 'vue-router';
export default {
    setup() {
        const state = reactive({
            amount: "",
        })
        const showAlert = ref(false);
        const toggleAlert = () => {
            showAlert.value = !showAlert.value
        }
        const deposit = () => {
            toggleAlert();
        }
        // const route = useRoute();
        const rules = computed(() => {
            return {
                amount: {
                    required,
                    // minValue: route.query.minPrice,
                    // maxValue: route.query.maxPrice
                }
            };
        });
        const v$ = useVuelidate(rules, state);
        watchEffect(() => {
            if (showAlert.value === true) {
                setTimeout(() => {
                    showAlert.value = false
                }, 3000)
            }
        })
        return {
            state,
            deposit,
            showAlert,
            toggleAlert,
            v$
        }
    }
}
</script>

<style>
</style>