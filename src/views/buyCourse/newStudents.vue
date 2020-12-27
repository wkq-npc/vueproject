<template>
  <div>
    <van-grid :center="false" direction="horizontal" :border="false" :column-num="1">
      <van-grid-item>
        <div class="choose">
          <span class="xz"> 请选择参与学员 </span>
        </div>
      </van-grid-item>
    </van-grid>

    <van-grid :border="false" :column-num="1">
      <van-grid-item>
        <van-image
          round
          width="8rem"
          height="8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="head">上传头像</span>
      </van-grid-item>
    </van-grid>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="name"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import { Form, Field } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Form);
Vue.use(Field);

export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);

      this.$router.push("/students");
    },
  },
  created() {
    this.$store.commit("isShowHeaderMutation", true);
    this.$store.commit("isShowFooterMutation", false);
  },
};
</script>

<style lang="scss" scoped>
.choose {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .xz {
    font-size: 20px;
    font-weight: bold;
    padding-top: 5px;
  }
}
.head {
  margin-top: 10px;
  color: rgb(192, 181, 181);
}
// .username {
//   width: 100%;
//   border-bottom: 1px solid red;
//   padding-left: 10px;
//   padding-right: 10px;
//   box-sizing: border-box;
// }
</style>
