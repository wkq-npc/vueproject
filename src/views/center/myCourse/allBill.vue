<template>
  <div>
    <h3>全部订单</h3>
    <div>
      <van-card
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="(v, k) in datalist"
        :key="k"
      >
        <template #title>
          <h2>{{ v.title }}</h2>
        </template>
        <template #price>
          <h3 class="price">￥{{ v.price }}/{{ v.course_count }}课时</h3>
        </template>
        <template #desc>
          <div>剩余<van-count-down :time="time" /></div>
          <div class="desclogo">
            <span v-if="v.type == 0">待支付</span>
            <span v-if="v.type == 1">已结束</span>
            <span v-if="v.type == 2">进行中</span>
          </div>
        </template>
        <template #footer>
          <span>{{ v.time }}&nbsp;{{ v.time2 }}</span>

          <div class="paybtn" v-if="v.type == 0">
            <van-button
              @click="$router.push({ path: '/detail', query: { id: v.billId } })"
              size="mini"
              type="defaut"
              >取消支付</van-button
            >
            <van-button
              @click="$router.push({ path: '/detail', query: { id: v.billId } })"
              size="mini"
              type="info"
              >立即支付</van-button
            >
          </div>

          <div v-if="v.type == 1">
            <van-button
              @click="$router.push({ path: '/detail', query: { id: v.billId } })"
              size="mini"
              type="info"
              >重新报名</van-button
            >
          </div>
          <div v-if="v.type == 2">
            <van-button
              @click="$router.push({ path: '/detail', query: { id: v.billId } })"
              size="mini"
              type="info"
              >立即续费</van-button
            >
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tag, Button, CountDown, Card } from "vant";
Vue.use(Tag);
Vue.use(CountDown);
export default {
  data() {
    return {
      datalist: [],
      time: 10 * 60 * 60 * 1000,
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$store.commit("isShowHeaderMutation", true);
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/allbill"
      )
      .then((ret) => {
        this.datalist = ret.bill;
      });
  },
};
</script>
<style lang="scss" scoped>
.van-card__footer {
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
  }
  button {
    padding: 5px 15px;
  }
}
.price {
  color: red;
}
.paybtn {
  border: none;
  outline: none;
  button:nth-child(1) {
    background: rgb(224, 218, 218);
  }
}
.desclogo {
  width: 40px;
  height: 40px;
  border: 3px solid black;
  line-height: 40px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  right: -10px;
}
</style>
