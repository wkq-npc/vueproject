<template>
  <div>
    <div class="fanhui" @click="fanhui">
      <span><b>&lt;</b></span
      >待支付订单
    </div>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <van-card price="1500/10课时" :title="item.title">
          <template #thumb class="img">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" />
          </template>

          <template #footer>
            <div class="footer-time">
              <span class="shengyu">剩余：</span>
              <van-count-down :time="time" class="time1">
                <template #default="timeData">
                  <span class="block">{{ timeData.hours }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>

            <van-button class="quxiao" @click="Dialog(index)">取消支付</van-button>
            <van-button class="zhifu" @click="lijizhifu(item.billId)"
              >立即支付</van-button
            >
          </template>
        </van-card>
      </li>
    </ul>
    <p class="dibuwenzi">没有更多内容了</p>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button } from "vant";
import { CountDown } from "vant";
Vue.use(CountDown);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
import { Dialog } from "vant";
export default {
  data() {
    return {
      time: 60 * 60 * 1000,
      list: {},
      abc: "",
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);

    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/unpaidbill"
      )
      .then((ret) => {
        console.log(ret);
        this.list = ret.unpaidBill;
        console.log(this.list);
      });
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    lijizhifu(id) {
      console.log(id);
      this.$router.push("/center/unpaid/" + id);
    },

    Dialog(index) {
      this.abc = index;
      this.$dialog
        .confirm({
          message: "您确认取消订单么？订单取消后不可恢复!",
          confirmButtonColor: "red",
        })
        .then(() => {
          this.list.splice(this.abc, 1);
          console.log(this.abc);
        })
        .catch(() => {
          console.log("点击了取消");
        });
    },
  },
  watch: {
    time: {},
  },
};
</script>
<style lang="scss" scoped>
.dibuwenzi {
  width: 100%;
  text-align: center;
}
.van-card__title {
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.footer-time {
  position: relative;
  margin: 5px 0;
}
.van-card__price {
  color: red;
  font-size: 18px;
}
.shengyu {
  // float: right;
  font-size: 18px;
  color: red;
  vertical-align: middle;
  position: absolute;
  top: -4px;
  right: 135px;
}
.colon {
  display: inline-block;
  margin: 0px 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 36px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: #ee0a24;
}

.van-card__thumb {
  margin-right: 0px;

  width: 160px;
}
img {
  width: 160px;
  height: 100px;
}
li {
  font-size: 20px;
}
.quxiao {
  display: inline-block;
  width: 80px;
  padding: 0 10px;
  border-radius: 10px;
  color: white;
  background: rgba(204, 204, 204, 1);
}
.zhifu {
  display: inline-block;
  width: 80px;
  padding: 0 10px;
  border-radius: 10px;
  background: rgba(47, 120, 255, 1);
  color: white;
}
</style>
