<template>
  <div>
    <div class="mycourse">
      <i class="iiii">我的课程</i>
      <div class="mycourse_nav">
        <ul class="my-order-tab">
          <li
            data-enter-time="1608645908"
            data-click-fun="track_f_192924"
            @click="$router.push('/unpaid')"
          >
            <van-badge :content="obligat_length">
              <van-icon class="iconfont icon-daifukuan" size="2.2rem" />
            </van-badge>
            <div class="common-p common-pp">待付款</div>
          </li>

          <li
            data-enter-time="1608645908"
            data-click-fun="track_f_128457"
            @click="$router.push('/studing')"
          >
            <van-badge :content="studying_length">
              <van-icon class="iconfont icon-xuexizhongxin" size="2.8rem" />
            </van-badge>
            <div class="common-p">学习中</div>
          </li>

          <li
            data-enter-time="1608645908"
            data-click-fun="track_f_128457"
            @click="$router.push('/endCourse')"
          >
            <van-badge :content="5">
              <van-icon class="iconfont icon-wancheng" size="2.8rem" />
            </van-badge>
            <div class="common-p">已结束</div>
          </li>

          <li
            data-enter-time="1608645908"
            data-click-fun="track_f_128457"
            @click="$router.push('/allbill')"
          >
            <van-icon class="iconfont icon-quanbudingdan" size="2.8rem" />
            <div class="common-p">全部订单</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Badge } from "vant";

Vue.use(Badge);
import "../../assets/icon/iconfont.css";
Vue.use(Icon);

export default {
  data() {
    return {
      studying_length: 0,
      obligat_length: 0,
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/learningCourse"
      )
      .then((ret) => {
        this.studying_length = ret.learningCourse.length;
        // this.studying_length=ret.
      });
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/unpaidbill"
      )
      .then((ret) => {
        this.obligat_length = ret.unpaidBill.length;
        // console.log(ret)
      });
  },
};
</script>
<style lang="scss" scoped>
.child {
  width: 40px;
  height: 40px;
  background: #f2f3f5;
  border-radius: 4px;
}
.iconfont {
  color: orange;
}
.common-pp {
  margin-top: 8px;
}
.mycourse_nav {
  margin-top: 10px;
}
.my-order-tab {
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  font-size: 16px;
  padding: 0;
  height: 79px;
  // background: #fff;
  margin-bottom: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mycourse .iiii {
  font-size: 18px;
  font-weight: bold;
  display: block;
  border-bottom: 1px solid black;
  font-style: normal;
}
.mycourse {
  width: 85%;
  height: 140px;
  background: ghostwhite;
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
}

.my-order-tab li {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
}
</style>
