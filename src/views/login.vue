<template>
  <div>
    <h2>用户登录</h2>
    <div class="pir">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4033562545,70876256&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入正确的手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Field } from "vant";

Vue.use(Form);
Vue.use(Field);

export default {
  data() {
    return {
      username: "",
      password: "",
      pattern: /^1[3-9]\d{9}/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      this.$http
        .post(
          "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/login",
          { mobile: 152123456789, password: 12345 }
        )
        .then((ret) => {
          console.log(ret);
          if (ret.code == 0) {
            // 存储jwt
            this.$store.commit("setJwt", ret.jwt);
            setTimeout(() => {
              // 判断是否是指定登录成功返回的页面
              if (this.$route.query.toUrl) {
                // 使用指定的地址
                this.$router.push(this.$route.query.toUrl);
              } else {
                // 使用默认地址
                this.$router.push("/center");
              }
            }, 2000);
          }
        });
    },
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$store.commit("isShowHeaderMutation", true);
  },
};
</script>
<style lang="scss" scoped>
.pir {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  img {
    width: 100%;
    height: 100%;
  }
}
h2 {
  text-align: center;
}
</style>
