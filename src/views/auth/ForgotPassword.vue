<template>
  <success-alert/>
 <error-alert/>
  <div
    class="
      bg-login-texture
      h-screen
      w-full
      bg-center bg-cover
      flex
      justify-center
      items-center
      bg-brand-lightblue bg-blend-overlay
    "
  >
    <div class="bg-white max-w-5xl p-8 shadow-xl">
      <p class="text-brand-lightblue text-3xl">Forgot Password?</p>
      <p class="text-gray-600 pb-4">
        Enter your email below to request a new password
      </p>
      <div>
        <form class="w-full" @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="emailText" class="text-gray-700 font-semibold text-md"
              >Email</label
            >
            <div
              class="
                border-2
                focus-within:border-brand-lightblue
                hover:border-brand-lightblue
                rounded-md
              "
            >
              <input
                class="
                  text-md
                  border-gray-300
                  appearance-none
                  bg-transparent
                  border-none
                  w-full
                  mr-3
                  py-3
                  px-2
                  leading-tight
                  focus:outline-none
                "
                type="text"
                placeholder="Enter your email"
                aria-label="Email"
                id="emailText"
                v-model="user.email"
              />
            </div>
            <small v-if="v$.email.$error" class="text-red-600">{{
              v$.email.$errors[0].$message
            }}</small>
          </div>
          <button
            @click.prevent="submitForm"
            type="submit"
            class="
              bg-brand-lightblue
              text-white text-lg
              font-semibold
              p-3
              w-full
              rounded-md
            "
          >
            Reset Password
          </button>
          <p class="text-center py-2">Back to <a href="/login" class="text-brand-lightblue">Login</a></p>
        </form>
      </div>
    </div>
  </div>
  <loading/>
</template>

<script>
import { computed, reactive} from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useStore } from "vuex";
import Loading from '../../components/alerts/Loading.vue';
import SuccessAlert from '../../components/alerts/SuccessAlert.vue';
import ErrorAlert from '../../components/alerts/ErrorAlert.vue';
export default {
  components: {Loading, SuccessAlert, ErrorAlert},
  setup() {
    const user = reactive({
      email: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
      };
    });

    const v$ = useVuelidate(rules, user);

    const store = useStore();
    const resetPassword = () => {
      store.commit("loading", true);
      store.dispatch("resetPassword", user.email)
    };

    return {
      user,
      v$,
      resetPassword,
      successText: computed(() => store.getters.successText),
    };
  },
  methods: {
    async submitForm() {
      await this.v$.$validate();
      if (!this.v$.$error) {
        this.resetPassword();
      } else console.log("error");
    },
  },
};
</script>

<style>
button {
  background: #00af9c;
}
</style>
