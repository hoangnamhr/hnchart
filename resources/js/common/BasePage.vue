<template>
  <div>
    <div class="base-page">

    <div class="header">
      <ul>
        <a class="logo" href=""><img src="/image/icon-chart.png" alt=""></a>
        <li>
          <a href="" @click="$router.push('/')">Home</a>
        </li>
        <li>
          <a href="" @click="$router.push('/pie-chart')">Pie Chart</a>
        </li>
        <li>
          <a href="" @click="$router.push('/bar-chart')">Bar Chart</a>
        </li>
        <li>
          <a href="" @click="$router.push('/line-chart')">Line Chart</a>
        </li>
        <li>
          <a href="" @click="$router.push('/doughnut-chart')">Doughnut Chart</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="icon-footer">
        <a href="#"> <i class="fa fa-facebook-square"></i></a>
        <a href=""> <i class="fa fa-github"></i></a>
        <a href="#"> <i class="fa fa-instagram"></i></a>
        <a href="#"> <i class="fa fa-medium"></i></a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .base-page {
    background-color: #A5B1A2;
    font-family: Barlow;
    .header {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #eee;
      }
      li {
        float: left;
      }
      li a {
        display: block;
        color: #333;
        text-align: center;
        padding: 30px 15px;
        text-decoration: none;
        font-size: 18px;
        &:hover {
          background-color: #808080;
          transform: rotate(-10deg);
          transition: 0.7s;
          color: #fff;
        }
      }
      .logo {
        float: left;
        padding: 15px 15px;
      }
    }
    .footer {
      background-color: #eee;
      margin-top: 30px;
      height: 100px;
      text-align: center;
      .icon-footer {
        font-size: 50px;
        padding-top: 15px;
        .fa {
          padding-left: 10px;
          color: #333;
          &:hover {
            transform: translateY(-10px);
            transition: 0.5s;
          }
        }
      }
    }
  }
</style>
