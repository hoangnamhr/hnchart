<template>
  <div class="container">
    <custom-chart 
      :type="'bar'" 
      :optionChart="options"
      :classChart="'bar-chart'"> 
    </custom-chart>
  </div>
</template>
<script>
import CustomChart from '../common/CustomChart.vue';

export default {
  components: {
    CustomChart
  },
  data() {
    return {
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
              offset: true,
            }]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>