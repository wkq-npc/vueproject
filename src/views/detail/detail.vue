<template>
  <div class="detail_box">
    <div class="imgBox">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>

    <div class="title" style="display: flex; justify-content: space-between">
      <div class="name">
        <h3>{{ detail.title }}</h3>
        <br />
        <h5>{{ detail.baomin }}人报名</h5>
      </div>
      <div class="price">
        <h5>￥{{ detail.price }}/{{ detail.course_num }}课时</h5>
      </div>
    </div>

    <van-tabs v-model="active">
      <van-tab title="课程简介">
        <div>
          <div class="descname" v-for="(v, k) in detail.course_des" :key="k">
            <h3>{{ v.name }}</h3>
            <p>{{ v.desc }}</p>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </div>
      </van-tab>

      <van-tab title="课程设置">
        <div class="classconfig">
          <div class="classconfig_title">
            <span>课程教室</span><span>上课时间</span><span>授课教师</span>
          </div>
          <div v-for="(v, k) in detail.course_config" :key="k">
            <div class="classconfig_item">
              <span>{{ v.classroom }}</span>
              <div>
                <span>{{ v.classbegin_date }}</span>
                <p>{{ v.classbegin_time }}</p>
              </div>
              <span>{{ v.teacher }}</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="师资介绍">
        <div>
          <div class="descname" v-for="(v, k) in detail.teacherInfo" :key="k">
            <h3>{{ v.name }}<span v-if="v.type">(全能老师)</span></h3>
            <p>{{ v.desc }}</p>
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div></div
      ></van-tab>
    </van-tabs>
    <van-submit-bar
      button-color="#2F78FF"
      button-text="立即报名"
      @submit="onSubmit(detail.couserId)"
    >
      <template #default>
        <div class="totalmoney">￥ {{ detail.price }}</div>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Image, Tab, Tabs, SubmitBar } from "vant";
Vue.use(Image);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Image);
Vue.use(SubmitBar);
export default {
  data() {
    return {
      detail: {},
      active: 0,
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.commit("isShowHeaderMutation", true);

    this.$store.commit("isShowFooterMutation", false);

    this.$http(
      "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/Course_detail",
      { id: 123456 }
    ).then((ret) => {
      this.detail = ret.course_detail;
    });
  },
  methods: {
    onSubmit(val) {
      console.log(val);
      this.$router.push({ path: "/buy", query: { id: val } });
    },
  },
};
</script>
<style lang="scss" scoped>
.detail_box {
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
.imgBox {
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
}
.title {
  .name {
    margin: 15px 0;
    line-height: 20px;
    h5 {
      color: gray;
    }
  }
  .price {
    line-height: 90px;
    color: red;
    margin-right: 10px;
  }
}
.classconfig {
  .classconfig_title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: rgb(209, 205, 202);
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
    }
  }
  .classconfig_item {
    display: flex;
    justify-content: space-evenly;
    line-height: 40px;
    div > p {
      line-height: 10px;
    }
  }
}
.totalmoney {
  color: red;
  font-size: 30px;
  padding-right: 100px;
}
.descname {
  h3 {
    color: #2f78ff;
    margin: 20px auto;
  }
  P {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
  }
  .van-img .van-image__img {
    border-radius: 10px !important;
  }
}
</style>
