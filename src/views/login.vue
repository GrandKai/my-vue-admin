<template>
  <el-form :model="loginForm" :rules="rules" ref="loginFormRefs" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm('loginFormRefs')" :loading="logining">登录</el-button>
      <!--<el-button type="primary" style="width:30%;" @click.native.prevent="resetForm('loginFormRefs')">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script type="es6">

  import { loginUrl } from '../api/api'
  import axios from 'axios'

  export default {
    data () {
      return {
        logining: false,
        loginForm: {
          userName: '',
          password: ''
        },
        rules: {
          userName: [{required: true, message: '请输入账号', trigger: 'blur'}],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        },
        checked: true
      }
    },

    methods: {
      resetForm(formName) {
        console.log("formName: " + JSON.stringify(formName))
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        console.log("formName: " + JSON.stringify(formName))
        console.log("loginForm: " + JSON.stringify(this.loginForm))
        this.$refs[formName].validate((valid) => {

          console.log(valid)
          if (valid) {
            const data = {
              userName: this.loginForm.userName,
              password: this.loginForm.password,
//              grant_type: 'password',
//              client_id: 2,
//              client_sercret: ''
            }
            console.log(data)
            this.$router.push({path: '/home'})
//            loginUrl(data).then(res => {
//              sessionStorage.setItem('ak', res.data().access_token)
//              axios.defaults.headers.common['Authorization'] = 'Bearer' + res.data.access_token
//              this.$router.push({path: '/home'})
//            })
          } else {
            console.log("访问失败")
          }
        })
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
