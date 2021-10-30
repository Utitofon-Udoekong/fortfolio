<template>
  <div class="p-4 overflow-y-scroll h-5/6">
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center h-auto gap-5">
      <div class="bg-white w-full md:w-1/4 text-brand-blue text-sm h-full p-4 rounded-md">
        <p>Total Revenue</p>
        <p class="text-xl font-semibold">
          <span class="line-through">N</span>500,000,000
        </p>
      </div>
      <div class="bg-white w-full md:w-1/4 text-brand-blue text-sm block h-auto rounded-md">
        <div class="p-4">
          <p>Account Balance</p>
          <p class="text-xl pb-3 font-semibold">
            <span class="line-through">N</span>500
          </p>
          <button @click="$router.push({name: 'dashboard-user-deposit' })" class="bg-brand-blue text-white p-3 rounded-md w-full">DEPOSIT</button>
        </div>
      </div>
      <div class="bg-white w-full md:w-1/4 text-brand-blue text-sm block h-auto rounded-md">
        <div class="p-4">
          <p>Active Investments</p>
          <p class="text-xl pb-3 font-semibold">2 TIERS</p>
          <button @click="$router.push({name: 'dashboard-user-investment' })" class="bg-brand-blue text-white p-3 rounded-md w-full">INVEST</button>
        </div>
      </div>
      <div class="bg-white w-full md:w-1/4 text-brand-blue text-sm block h-auto rounded-md">
        <div class="p-4">
          <p>Withdrawal Balance</p>
          <p class="text-xl pb-3 font-semibold">
            <span class="line-through">N</span>500
          </p>
          <button @click="$router.push({name: 'dashboard-user-withdraw' })" class="bg-brand-blue text-white p-3 rounded-md w-full">WITHDRAW</button>
        </div>
      </div>
    </div>
    <div class="chart-form">
      <ChartComponent/>
    </div>
    <div class="table-form">
      <div class="flex flex-col">
        <div class="overflow-x-scroll md:overflow-x-hidden">
          <div class="py-2 align-middle inline-block min-w-full ">
            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >S/N</th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >Amount</th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >Description</th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >Date</th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >Time</th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                    >Status</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(activity, index) in activities" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <p>{{index + 1}}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">{{ activity.amount }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-500">{{ activity.description }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ activity.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ activity.time }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                      :class="activity.status === 'pending' ? 'text-yellow-600 bg-yellow-200' : 'text-green-800 bg-green-100' "
                        class="px-2 py-1 inline-flex text-sm leading-5 rounded-full "
                      >{{activity.status}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartComponent from "../../components/charts/ChartComponent.vue"
const activities = [
  {
    amount: '50,000',
    description: 'Fort Dolar Purchased',
    date: new Date().toISOString().substr(0,10),
    time: new Date().toLocaleTimeString(),
    status: 'pending',
  },
]
export default {
  components:{
    ChartComponent
  },
  setup(){
    return{
      activities
    }
  }
}
</script>
