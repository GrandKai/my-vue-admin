<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="12">
        <div id="radarChart" style="width:100%; height:500px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartColumn" style="width:100%; height:500px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartBar" style="width:100%; height:500px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartLine" style="width:100%; height:500px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartPie" style="width:100%; height:500px;"></div>
      </el-col>
      <el-col :span="24">
        <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
      </el-col>
    </el-row>
  </section>
</template>

<script type="es6">
  import echart from 'echarts'

  export default {
    data() {
      return {
        radarChart: null
      }
    },

    methods: {
      drawRadarChart: function () {
        this.radarChart = echart.init(document.getElementById('radarChart'));
        this.radarChart.setOption({
            title: {
              text: '基础雷达图'
            },
            tooltip: {},
            legend: {
              data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [
                {name: '销售（sales）', max: 6500},
                {name: '管理（Administration）', max: 16000},
                {name: '信息技术（Information Techology）', max: 30000},
                {name: '客服（Customer Support）', max: 38000},
                {name: '研发（Development）', max: 52000},
                {name: '市场（Marketing）', max: 25000}
              ]
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [4300, 10000, 28000, 35000, 50000, 19000],
                  name: '预算分配（Allocated Budget）'
                },
                {
                  value: [5000, 14000, 28000, 31000, 42000, 21000],
                  name: '实际开销（Actual Spending）'
                }
              ]
            }]
          }
        )
      }
    },
    mounted() {
      this.drawRadarChart()
    },
    updated() {
      this.drawRadarChart()
    }
  }
</script>

<style scoped>
  .chart-container {
    width: 100%;
    float: left;
  }

  /*.chart div {
      height: 400px;
      float: left;
  }*/

  .el-col {
    padding: 30px 20px;
  }
</style>
