<template>
  <div>
    <canvas
      :class="classChart"
    />
  </div>
</template>

<script>
  export default {
    name: 'Chart',
    props: {
      classChart: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      dataChart: {},
      optionsChart: {}
    },
    data() {
      return {
        myChart: {},
      }
    },
    mounted() {
      let ctx = window.$(`.${this.classChart}`);
      this.myChart = new Chart(ctx, {
        type: this.type,
        data: this.dataChart,
        options: this.optionsChart
      });
    },
  }
</script>
