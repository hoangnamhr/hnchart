<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title">
        <h2>Create Your Own <span style="color: #333"> Chart </span><img src="/image/icon-chart.svg" alt=""> </h2>
      </div>
      <div class="col-md-6 container-chart pie-block">
        <a href="" @click="$router.push('/pie-chart')">
          <chart
            class="chart pie"
            :class-chart="'pie-chart'"
            :type="'pie'"
            :data-chart="dataChart"
            :options-chart="optionsPieChart">
          </chart>
        </a>
      </div>
      <div class="col-md-6 container-chart bar-block">
        <a href="" @click="$router.push('/bar-chart')">
          <chart
            class="chart bar"
            :class-chart="'bar-chart'"
            :type="'bar'"
            :data-chart="dataChart"
            :options-chart="optionsBarChart">
          </chart>
        </a>
      </div>
      <div class="col-md-6 container-chart line-block">
        <a href="" @click="$router.push('/line-chart')">
          <chart
            class="chart line"
            :class-chart="'line-chart'"
            :type="'line'"
            :data-chart="dataChart">
          </chart>
        </a>
      </div>
      <div class="col-md-6 container-chart donut-block">
        <a href="" @click="$router.push('/doughnut-chart')">
          <chart
            class="chart donut"
            :class-chart="'donut-chart'"
            :type="'doughnut'"
            :data-chart="dataChart"
            :options-chart="optionsPieChart">
          </chart>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '../common/Chart.vue';

export default {
  components: {
    Chart
  },
  data() {
    return {
      dataChart: {
        labels: ['PieChart','DoughnutChart' ,'BarChart', 'PolarAreaChart'],
        datasets: [
          {
            label: '#data',
            data: [5, 6, 7, 3],
            backgroundColor: [
                'rgba(194, 235, 180, 0.8)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            fillColor: '#D6194C',
          }
        ],
      },
      optionsBarChart: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                offset: true,
            }],
            xAxes: [{
              offset: true,
            }]
        }
      },
      optionsPieChart: {
        animation: {
          onProgress: function (animation) {
            var ctx = animation.chart.ctx;
            var textSize = animation.chart.canvas.width / 42;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            var datasets = window._.cloneDeep(animation.chart.data.datasets);
            datasets.forEach(function (dataset) {
              var commonData = dataset._meta[Object.keys(dataset._meta)[Object.values(dataset._meta).length - 1]];
              var totalPercent = 0;
              var maxKey = Object.keys(dataset.data)[Object.keys(dataset.data).length - 1];
              for (var i = 0; i < dataset.data.length; i++) {
                var model = commonData.data[i]._model,
                  total = commonData.total,
                  mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                  start_angle = model.startAngle,
                  end_angle = model.endAngle,
                  mid_angle = start_angle + (end_angle - start_angle)/2;

                var x = mid_radius * Math.cos(mid_angle);
                var y = mid_radius * Math.sin(mid_angle);

                ctx.fillStyle = '#fff';
                ctx.font = textSize + "px Verdana";
                var itemData = dataset.data[i];
                if (commonData.data[i].hidden && !itemData/total*100) return;
                var percent = (!commonData.data[i].hidden && itemData/total*100)
                  ? (String(Math.round(itemData/total*100)) + "%")
                  : '';
                if (i != maxKey) {
                  totalPercent += Math.round(itemData/total*100);
                } else {
                  percent = String(100 - totalPercent) + '%';
                }
                if (percent == '100%') {
                  ctx.fillText(percent, model.y, model.y);
                } else {
                  ctx.fillText(percent, model.x + x, model.y + y - 7);
                }
              }
            });
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    .container-chart{
      padding-top: 30px;
      &:hover {
        transform: translateY(-10px);
        transition: 0.5s;
        .chart {
          opacity: 1;
        }
      }
    }
    .chart {
      background: #eee;
      box-shadow: 5px 10px #888888;
      padding: 20px;
      opacity: 0.5;
    }
    .title {
      padding-top: 8px;
      color: #eee;
      text-align: center;
      img {
        width: 60px;
      }
    }
  }
</style>
