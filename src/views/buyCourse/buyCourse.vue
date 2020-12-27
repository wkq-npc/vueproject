<template>
  <div class="box">
    <van-grid>
      <div class="top">
        <h3>用户名称：耐寒教育</h3>
        <p>用户电话：123454678</p>
      </div>
    </van-grid>

    <van-card style="height: 100px">
      <template #thumb>
        <img src="../../assets/img/2.png" alt="" />
      </template>
      <template #desc>
        <div class="details">
          <div>个性化一对一</div>
          <p>1500/10</p>
        </div>
      </template>
    </van-card>

    <div class="chooseBox1">
      <div @click="xueyuan" class="choose">
        <span>选择学员</span>
        <span class="span2">已选择{{ $store.state.StuArr.length }}人></span>
      </div>
      <div @click="xiaoqu" class="choose">
        <span>选择校区老师</span>
        <span class="span2">{{ arrSchool }}校区 {{ arrName }}></span>
      </div>
      <div @click="$router.push('/coupons')" class="choose">
        <span>使用优惠券</span>
        <span class="span2">已使用**元></span>
      </div>
    </div>
    <div class="chooseBox2">
      <div class="choose">
        <span>价格</span>
        <span class="span2">￥1500</span>
      </div>
      <div class="choose">
        <span>学员数量</span>
        <span class="span2">**></span>
      </div>
      <div class="choose">
        <span>优惠券</span>
        <span class="span2">-***></span>
      </div>
      <div class="choose">
        <span>总计</span>
        <span class="span2 price">￥******</span>
      </div>
    </div>

    <div class="bottom">
      <span>￥1500</span>
      <a>立即支付</a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, SwipeCell, Card } from "vant";

Vue.use(Grid);
Vue.use(Card);
Vue.use(GridItem);
Vue.use(SwipeCell);
export default {
  data() {
    return {
      arrName: "--",
      arrSchool: "--",
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    if (this.$store.state.school.length != 0) {
      // 老师名字
      this.arrName = this.$store.state.school[0].name;
      // 校区名字
      this.arrSchool = this.$store.state.school[0].school;
    }

    // 选择学生数量
    this.num = this.$store.state.nameNum;
  },
  methods: {
    xueyuan() {
      console.log(321);
      this.$router.push("/students");
    },
    xiaoqu() {
      console.log(123);
      this.$router.push("/campus");
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 130%;
  height: 85px;
  border-radius: 16px;
}
.box {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 70px;
}
.top {
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
  background: rgb(250, 248, 248);
  width: 100%;
}
.details {
  margin-top: 5px;
  margin-left: 50px;
  line-height: 30px;
  div {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    color: red;
  }
}
// 选择学员。。。  价格。。。
.choose {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  .span2 {
    color: rgb(209, 203, 203);
  }
}
.choose .price {
  font-size: 30px;
  color: red;
}
// 这是上下分割线
.chooseBox1 {
  border-bottom: 1px solid #999;
  padding-bottom: 10px;
}
.chooseBox2 {
  padding-top: 10px;
  color: rgb(145, 137, 137);
}

.bottom {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  span {
    width: 50%;
    line-height: 60px;
    text-align: center;
    font-size: 26px;
    color: red;
    background: #fff;
  }
  a {
    width: 50%;
    line-height: 60px;
    text-align: center;
    background: red;
    color: #fff;
    font-size: 20px;
  }
}
</style>
