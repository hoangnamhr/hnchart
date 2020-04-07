<template>
  <div class="container">
    <custom-chart 
      :type="'doughnut'" 
      :classChart="'bar-chart'"
      :optionChart="options"> 
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