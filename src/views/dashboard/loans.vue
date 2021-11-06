<template>
  <div class="p-4 md:p-8 overflow-y-scroll h-5/6">
    <vue-echarts class="bg-white" :option="option" style="height: 400px" ref="chart" autoresize />
  </div>
</template>

<script>
import dateRange from "../../helpers/dateLogic";
export default {
  setup() {
    const dateInt = new Date();
    const start = new Date().toISOString().substr(0, 10)
    const dates = dateRange(start, dateInt.addDays(6));
    const option = {
      tooltip: {
        trigger: 'axis',
        show: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dates,
        // axisLabel: {
        //   formatter: {
        //       month: '{MMMM}', // Jan, Feb, ...
        //       day: '{d}' // 1, 2, ...
        //   }
        // }
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          areaStyle: {}
        }
      ],
      media: [{
        query: {
          minWidth: 300,
          maxHeight: 400
        }
      }]
    };
    return {
      option
    }
  }
}
</script>

<style>
</style>