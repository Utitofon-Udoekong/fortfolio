<template>
  <div class="flex flex-col w-50 h-50 md:w-auto  my-7 mb-11 bg-white p-4 rounded-md">
    <vue3-chart-js
        :id="lineChart.id"
        :type="lineChart.type"
        :data="lineChart.data"
        :options="lineChart.options"
    ></vue3-chart-js>
    <p class="text-center font-extrabold tracking-wide py-4">INVESTMENT STATISTICS</p>
    <!-- <button @click="updateChart" class="m-8 bg-blue-800 p-8 text-white">Update Chart</button> -->
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import dataLabels from "chartjs-plugin-datalabels";
Vue3ChartJs.registerGlobalPlugins([dataLabels])

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup () {
    const lineChart = {
      type: "line",
      plugins: [dataLabels],
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Deposits",
            data: [65, 59, 150, 81, 56, 55, 40, 30, 67, 90, 30, 21],
            fill: false,
            borderColor: "black",
            backgroundColor: "black",
          },
          {
            label: "Withdrawals",
            data: [70, 25, 37, 90, 55, 60, 30, 230, 40, 78, 77, 87],
            fill: false,
            borderColor: "#03426D",
            tension: 0.5,
            backgroundColor: "#03426D",
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: "white",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
            padding: 6,
          },
        },
      },
    };

    return {
      lineChart,
    };
  },
}
</script>

            // backgroundColor: [
            //   '#000091',
            //   '#0f0ff0',
            //   '#5d5df8',
            //   '#3e3e5a'
            // ],