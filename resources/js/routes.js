import Vue from 'vue';
import VueRouter from 'vue-router';
import BasePage from './common/BasePage.vue';
import PieChart from './Desktop/PieChart.vue';
import BarChart from './Desktop/BarChart.vue';
import DoughnutChart from './Desktop/DoughnutChart.vue';
import LineChart from './Desktop/LineChart.vue';
import HomePage from './Desktop/HomePage.vue';

Vue.use(VueRouter);

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasePage,
      children: [
        {
          path: '/pie-chart',
          component: PieChart
        },
        {
          path: '/bar-chart',
          component: BarChart
        },
        {
          path: '/doughnut-chart',
          component: DoughnutChart
        },
        {
          path: '/line-chart',
          component: LineChart
        },
        {
          path: '/',
          component: HomePage
        }
      ]
    }
  ]
}
