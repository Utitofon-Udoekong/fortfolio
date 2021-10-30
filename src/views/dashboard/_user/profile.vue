<template>
<loading/>
<error-alert/>
<success-alert/>
  <div class="overflow-y-scroll h-5/6">
    <form class="p-4">
      <div class="flex justify-between mb-4">
        <div class="text-brand-blue flex items-center">
          <svg viewBox="0 0 24 24" width="25" height="25" class="inline-block fill-current mr-3" >
            <path :d="mdiAccountCircleOutline" />
          </svg>
          <p class="capitalize text-3xl font-bold">{{ $route.params.user }}</p>
        </div>
        <button
          class="bg-brand-blue text-white p-3 rounded-md"
          @click.prevent="toggleModal = !toggleModal"
        >user Details</button>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="first" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">First Name</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="first"
            class="text-md appearance-none text-black bg-white border-none w-full sm:w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.name.firstName"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="last" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Last Name</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="last"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.name.lastName"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="phone" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Phone Number</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="phone"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.phone"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="email" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Email</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="email"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.email"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="bankname" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Bank Name</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="bankname"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.bankName"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="accname" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Account Name</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="accname"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.bankAccountName"
          />
        </div>
      </div>
      <div class="mb-4 flex flex-col sm:flex-row w-full items-start sm:items-center">
        <label for="accnum" class="w-full sm:w-2/12 text-gray-700 font-semibold text-md">Account Number</label>
        <div class="border-2 rounded-md w-full sm:w-10/12">
          <input
          id="accnum"
            class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2 focus:outline-none"
            type="text"
            disabled
            v-model="user.bankAccountNumber"
          />
        </div>
      </div>
    </form>
    <!-- edit card -->
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden z-50 overflow-y-scroll inset-0 flex justify-center items-center"
    >
      <div class="max-w-3xl w-100 relative mx-auto h-100">
        <form class="p-4 bg-white w-full h-full overflow-y-scroll">
          <div class="flex items-center justify-between">
            <p class="font-bold text-black text-2xl pb-4">Edit Details</p>
            <svg @click="toggleModal = !toggleModal" viewBox="0 0 24 24" width="25" height="25" class="cursor-pointer inline-block fill-current mr-3">
              <path :d="mdiClose" />
            </svg>
          </div>
          <div class="mb-4">
            <label for="first" class="text-gray-700 font-semibold text-md">First Name</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="first"
                v-model="user.name.firstName"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="last" class="text-gray-700 font-semibold text-md">Last Name</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="last"
                v-model="user.name.lastName"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="phone" class="text-gray-700 font-semibold text-md">Phone</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="phone"
                v-model="user.phone"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="email" class="text-gray-700 font-semibold text-md">Email</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="email"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="bank" class="text-gray-700 font-semibold text-md">Bank Name</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="bank"
                v-model="user.bankName"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="accName" class="text-gray-700 font-semibold text-md">Account Name</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="accName"
                v-model="user.bankAccountName"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="accNum" class="text-gray-700 font-semibold text-md">Account Number</label>
            <div class="border-2 rounded-md">
              <input
                class="text-md appearance-none text-black bg-white border-none w-full py-1 px-2"
                type="text"
                id="accNum"
                v-model="user.bankAccountNumber"
              />
            </div>
          </div>
          <button class="bg-green-600 rounded-md mr-3 text-sm text-white p-3" @click="saveProfile">SAVE</button>
          <button class="bg-red-500 rounded-md text-sm text-white p-3" @click="toggleModal = !toggleModal">CANCEL</button>
        </form>
      </div>
    </div>
    <div v-if="toggleModal" class="absolute z-40 inset-0 bg-black opacity-40"></div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { mdiClose,mdiAccountCircleOutline } from '@mdi/js';
import { useStore } from 'vuex';
import Loading from '../../../components/alerts/Loading.vue';
import ErrorAlert from '../../../components/alerts/ErrorAlert.vue';
import SuccessAlert from '../../../components/alerts/SuccessAlert.vue';
export default {
  components: { Loading, ErrorAlert, SuccessAlert },
  setup() {
    const store = useStore();
    const user = computed(() => {
      return {
        name: {
          firstName: store.state.user.firstName,
          lastName: store.state.user.lastName
        },
        phone: store.state.user.phone,
        email: store.state.user.email,
        bankName: store.state.user.bankName,
        bankAccountName: store.state.user.bankAccountName,
        bankAccountNumber: store.state.user.bankAccountNumber,
        // refCode: ""
      }
    })
    const toggleModal = ref(false);
    const saveProfile = () => {
      store.commit("loading", true)
      store.dispatch("updateProfile", user)
    }

    return {
      user, toggleModal, mdiAccountCircleOutline, mdiClose, saveProfile
    }
  }
}
</script>

<style>
.w-100{
  width: 30rem;
}
.h-100{
  height: 28rem;
}
</style>