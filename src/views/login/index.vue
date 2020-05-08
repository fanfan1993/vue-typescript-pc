<template>
  <div class="login">
    <LoginHeader>
      <el-form
        slot="container"
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
      >
        <div class="title">
          <h3>账号密码登录</h3>
        </div>
        <!-- username -->
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>

        <!-- password -->
        <el-form-item prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" auto-complete="off" placeholder="密码">
            <i slot="prefix" class="fa fa-lock"></i>
          </el-input>
        </el-form-item>

        <!-- 登录button -->
        <el-form-item>
          <el-button
            :loading="isLogin"
            @click.native.prevent="handleSubmit"
            type="primary"
            style="width:100%;"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop,Provide } from "vue-property-decorator";
import LoginHeader from "@/components/LoginHeader.vue";
@Component({
  components: {
    LoginHeader
  }
})
export default class  extends Vue {
 @Provide() private isLogin: boolean = false;
 @Provide() ruleForm: {
    username: String;
    pwd: String;
    autoLogin: boolean;
  } = {
    username: "",
    pwd: "",
    autoLogin: false
  };

  @Provide() rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
   /**
   * 登陆
   */
   private handleSubmit(): void {
    (this.$refs["ruleForm"] as any).validate((value: boolean) => {
      if (value) {
        this.isLogin = true;
        localStorage.setItem("token", 'token-fafaf');
        this.$router.push({path: '/home'});
        this.isLogin = false;
      } else {
        this.isLogin = false;
        console.log("失败");
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
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
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
i {
  font-size: 14px;
  margin-left: 8px;
}
.forget {
  float: right;
}
</style>