<template>
  <div>
    <div class="formbox">
      <h1>新用户注册</h1>
      <van-form>
        <van-field
          v-model="mobile"
          name="mobile"
          label="+86"
          placeholder="用户名"
          :rules="[{ pattern, message: '请填写正确手机号' }]"
        />
        <van-field
          v-model="sms"
          center
          name="smscode"
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              @click="sendSms"
              :disabled="isdisabled"
              size="small"
              type="primary"
              >{{ content }}</van-button
            >
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button @click="onSubmit" round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field, Button, Form, Dialog } from "vant";
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
export default {
  data() {
    return {
      sms: "",
      mobile: "",
      pattern: /^1[3-9]\d{9}$/,
      content: "获取验证码",
      isdisabled: false,
    };
  },
  methods: {
    async onSubmit(val) {
      if (this.sms.split("").length == 6) {
        let ret = await this.$http.post("/logreg/check_sms", { smscode: this.sms });
        console.log(ret);
        if (ret.code == 0) {
          this.$http.post("/logreg/reg", { mobile: this.mobile }).then((ret1) => {
            console.log(ret1);
          });
        }
      } else {
        Dialog({ message: "请输入正确验证码" });
      }
    },
    sendSms() {
      if (this.mobile) {
        this.$http.post("/logreg/sendsms", { mobile: this.mobile }).then((ret) => {
          if (ret.code == 1) {
            this.isdisabled = true;
            let count = 10;
            let time = setInterval(() => {
              count--;
              this.content = count + "秒";
              if (count == 0) {
                clearInterval(time);
                this.isdisabled = false;
                this.content = "获取验证码";
              }
            }, 1000);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.formbox {
  margin: 100px 0;
  h1 {
    text-align: center;
    margin: 50px auto;
  }
}
</style>
