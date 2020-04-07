<template>
  <div class="container">
    <custom-chart 
      :type="'line'" 
      :optionChart="options"
      :classChart="'polar-area-chart'"> 
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
            }]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>