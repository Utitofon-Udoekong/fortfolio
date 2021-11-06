<template>
  <div class="flex flex-col w-auto my-7 mb-11 bg-white p-4 rounded-md">
    <apexchart
      type="area"
      :options="chartOptions.options"
      :series="chartOptions.series"
      height="400"
      width="100%"
    ></apexchart>
    <p class="text-center font-extrabold tracking-wide py-4">INVESTMENT STATISTICS</p>
  </div>
</template>

<script>
import dateRange2 from '../../helpers/dateLogic2';
import formatter from '../../helpers/formatNumber';
export default {
  name: 'Chart',

  setup() {
    const dateInt = new Date();
    // const itirator = chartOptions.series[0].data.length
    const start = new Date().toISOString().substr(0, 10)
    const dates = dateRange2(start,dateInt.addDays(7));
    
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
        dataLabels: {
          formatter
        },
        stroke: {
          curve: 'smooth',
          width: 2.5
        },
        xaxis: {
          type: 'datetime',
          categories: dates
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#03426D"
            },
            labels: {
              style: {
                colors: "#03426D"
              }
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#000"
            },
            labels: {
              style: {
                colors: "#000"
              }
            },
          }
        ],
        colors: ["#03426D", "#09F4A2"]
      },
      series: [
        {
          name: "Deposit",
          data: [20, 29, 0, 36, 44, 45, 50, 58]
        },
        {
          name: "Withdrawal",
          data: [414, 322, 0, 150, 0, 0, 238, 400]
        }
      ]
    }

    return {
      chartOptions, dates
    }
  }
}
</script>

