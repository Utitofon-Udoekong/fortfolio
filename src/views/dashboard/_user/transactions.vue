<template>
  <div class="p-4">
    <div class="table-form">
      <div class="flex flex-col">
        <div class=" overflow-x-hidden">
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
setup(){
    return{
      activities
    }
  }
}
</script>

<style>

</style>