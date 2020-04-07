<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div>
          <!-- input total record -->
          <div class="total-record">
            <label>Input your total record data</label>
            <input class="form-control"
                   v-model="totalRecord" 
                   type="number"
                   min="0">
            <button v-if="!isShowInput"
                    @click="updateRecord()" 
                    class="btn btn-primary">
            Confirm
            </button>
            <button v-else 
                    @click="resetRecord()" 
                    class="btn btn-danger">
                    Reset
            </button>
          </div>
          <!-- loop for input data -->
          <div v-show="isShowInput" v-for="item in dataTotalRecord" :key="item" class="input-data-labels">
            <div class="form-input">
              <span>
                <label>Amount</label>
                <input type="number" 
                       v-model="amount[item]" 
                       min="0">
              </span>
              <span>
                <label>Labels</label>
                <input type="text"
                       v-model="labels[item]">
              </span>
            </div>
          </div>
          <div class="btn-submit" v-if="isShowInput">
            <button class="btn btn-dark" @click="submit()">Submit</button>
          </div>
        </div>
      </div>
      <!-- show chart -->
      <div class="col-md-8 chart-block">
        Total data: {{totalData}}
        <chart
          class="chart"
          :classChart="classChart"
          :type="type"
          :dataChart="dataChart"
          :optionsChart="optionChart"
          :key="indexKey">
        </chart>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from './Chart.vue';

export default {
  components: {
    Chart
  },
  props: {
    type: {
      type: String
    },
    optionChart: {
      type: Object
    },
    classChart: {
      type: String
    }
  },
  data() {
    return {
      totalRecord: Number,
      dataTotalRecord: [],
      totalData: 0,
      isShowInput: false,
      amount: {},
      labels: {},
      indexKey: 0,
      dataChart: {
        labels: ['PieChart','DoughnutChart' ,'BarChart', 'PolarAreaChart'],
        datasets: [{
            label: '#data',
            data: [8, 4, 10, 8],
            backgroundColor: [
              'rgba(194, 235, 180, 0.8)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
        }],
      },
      options: {}
    }
  },
  methods: {
    updateRecord() {
      var i;
      for (i = 0; i < this.totalRecord; i++) {
        this.dataTotalRecord.push(i);
        this.amount[i] = '';
        this.labels[i] = '';
      }
      this.isShowInput = true;
    },

    resetRecord() {
      this.totalRecord = null;
      this.dataTotalRecord = [];
      this.isShowInput = false;
    },

    getDataChart() {
      let dataCharts = [];
      let labelCharts = [];
      let colorChart = [];
      let totalData = 0;

      window._.map(this.amount, function(item) {
        dataCharts.push(item);
        colorChart.push('#' + `${Math.floor(Math.random()*16777215).toString(16)}`);
        totalData += Number(item);
      });

      window._.map(this.labels, function(item) {
        labelCharts.push(item);
      })

      this.dataChart.datasets[0].backgroundColor = window._.clone(colorChart); 
      this.dataChart.datasets[0].data = window._.clone(dataCharts);
      this.dataChart.labels = window._.clone(labelCharts);
      this.totalData = totalData;
    },

    async submit() {
      await this.getDataChart();
      this.indexKey++;
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    height: 600px;
    padding-top: 50px;
    .total-record {
      button {
        margin-top: 20px;
      }
    }
    .btn-submit {
      margin-top: 15px;
    }
    .chart-block {
      .chart {
        background-color: #fff;
        width: 800px !important;
        transform: 0.5s;
      }
    }
    .input-data-labels {
      padding-top: 30px;
      input {
        max-width: 100px;
        padding: .375rem .75rem;
        border: 1px solid #ced4da;
        border-radius: .25rem;
      }
    }
  }
</style>
