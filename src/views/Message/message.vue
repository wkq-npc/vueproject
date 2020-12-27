<template>
  <div class="msgbox">
    <h3 class="title" style="background: white">
      <van-icon name="chat" color="skyblue" />全部消息通知
    </h3>
    <van-swipe-cell v-for="(v, k) in msg" :key="k">
      <van-card desc="描述信息" v-if="v.isshow" class="goods-card">
        <template #title>
          <h2 v-if="v.type == 0">课程消息</h2>
          <h2 v-if="v.type == 1">机构消息</h2>
          <h2 v-if="v.type == 2">考勤消息</h2>
          <h2 v-if="v.type == 3">其他消息</h2>
        </template>
        <template #desc>
          <p>{{ v.msg }}</p>
          <span class="time">{{ v.time }}</span>
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="删除"
          @click="del(v.msgId)"
          type="info"
          class="delete-button"
        />
        <br />
        <br />
        <van-button
          square
          text="已读"
          @click="read(v.msgId)"
          type="info"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { SwipeCell, Button, Card, Icon } from "vant";
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Card);
Vue.use(Icon);

export default {
  data() {
    return {
      msg: [],
    };
  },
  methods: {
    del(val) {
      console.log(val);
    },
    read(val) {
      console.log(val);
    },
  },
  created() {
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/message"
      )
      .then((ret) => {
        console.log(ret);
        this.msg = ret.message;
        this.$store.commit("setmsgnum", this.msg.length);
      });
  },
};
</script>
<style lang="scss" scoped>
.msgbox {
  background: rgb(221, 216, 216);
}
.title {
  padding-left: 20px;
}
.time {
  position: absolute;
  right: 10px;
}
.goods-card {
  margin-bottom: 10px;
}
</style>
