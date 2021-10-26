<template>
  <div class="flex flex-col w-auto my-7 mb-11 bg-white p-4 rounded-md">
    <apexchart
      type="area"
      :options="chartOptions.options"
      :series="chartOptions.series"
    ></apexchart>
    <p class="text-center font-extrabold tracking-wide pt-4">INVESTMENT STATISTICS</p>
  </div>
</template>

<script>
import dateRange from "./dateLogic";
import formatter from "./formatNumber";
export default {
  name: 'Chart',
  props: {
    investmentData: {
      type: Array,
      reuired: true
    }
  },
  setup(props) {
    
    const dateInt = new Date();
    // const itirator = chartOptions.series[0].data.length
    const start = new Date().toISOString().substr(0, 10)
    const dates = dateRange(start, dateInt.addDays(6));
    const chartOptions = {
      options: {
        chart: {
          id: "vuechart",
          width: "100%",
          redrawOnWindowResize: true,
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3.5,
            opacity: 0.2
          },
          responsive: [
            {breakpoint: 500, options: {
              chart: {
                height: '100%'
              }
            }},

          ]
        },
        xaxis: {
          type: 'datetime',
          categories: dates
        },
        stroke: {
          curve: 'smooth',
          width: 2.5
        },
        dataLabels: {
          formatter
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#d626e2"
            },
            labels: {
              style: {
                colors: "#03426D"
              }
            }
          },
        ],
        colors: ["#d626e2"],
      },
      series: [
        {
          name: "Investment",
          data: props.investmentData
        },
      ]
    }

    return {
      chartOptions, dates
    }
  }
}
</script>

