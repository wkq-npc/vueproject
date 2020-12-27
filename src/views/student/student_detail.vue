<template>
  <div>
    <!-- 同步学生姓名 -->
    <div class="headerbox">
      <van-card>
        <template #desc>
          <h3>学员姓名</h3>
          <p>小学-六年级</p>
        </template>
        <template #thumb>
          <div class="imgthumb">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" />
          </div>
        </template>
      </van-card>
    </div>

    <van-tabs v-model="active">
      <!-- 课程表 -->
      <van-tab title="课程表">
        <div class="calendar_box">
          <el-calendar v-model="value"> </el-calendar>
        </div>
        <div class="todayCourse_box">
          <h4>{{ getDate.month }}月{{ getDate.day }}日&nbsp;周{{ getDate.week }}</h4>
          <div>
            今天老子不上班，因为今天没课
            <p></p>
            <p></p>
          </div>
        </div>
      </van-tab>
      <!-- 课程信息 -->
      <van-tab title="课程信息">
        <div calss="courseInfo">
          <van-card
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            v-for="(v, k) in courseInfo"
            :key="k"
          >
            <template #title>
              <h3 style="margin-top: 15px" class="title">{{ v.title }}</h3>
            </template>
            <template #price>
              <h4 style="color: red">{{ v.price }}元/{{ v.time }}课时</h4>
            </template>
            <template #tags> </template>
            <template #footer>
              <div class="footerbox">
                <div class="footercontent">
                  <h3>课程剩余节数：{{ v.time }}</h3>
                  <p>如需退款请线下联系主讲老师</p>
                </div>
                <van-button size="mini" type="info" @click="renewal(v.id)"
                  >立即续费</van-button
                >
              </div>
            </template>
          </van-card>
        </div>
      </van-tab>
      <!-- 上课记录 -->
      <van-tab title="上课记录">
        <div class="record">
          <van-icon name="column" size="1.5rem" color="blue" /><span>上课记录</span>
        </div>
        <div>
          <van-card v-for="(v, k) in record" :key="k">
            <template #desc>
              <div class="record_desc_box">
                <div>
                  <h3>{{ v.title }}</h3>
                  <p style="color: red">{{ v.price }}元/{{ v.time }}课时</p>
                </div>
                <div class="ischeck">
                  <span style="color: blue;fontsize" v-if="v.ischeck">已考勤</span>
                  <span style="color: red" v-if="!v.ischeck">未考勤</span>
                </div>
              </div>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabs, Tab } from "vant";
import { Calendar } from "element-ui";
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Calendar);

export default {
  data() {
    return {
      value: new Date(),
      active: 0,
      current: 1,
      date: new Date(),
      //课程信息
      courseInfo: [
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 161882 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 16112682 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 161342382 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 16167882 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 161882 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 16180982 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 161800082 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 16107882 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 161507882 },
        { title: "英语教程一对一", price: 1999, time: 10, num: 12, id: 1610082882 },
      ],
      //考勤
      record: [
        { title: "数学教程一对一", ischeck: true, price: 1999, time: 10, id: 13631427 },
        { title: "数学教程一对一", ischeck: false, price: 1999, time: 10, id: 1345427 },
        { title: "数学教程一对一", ischeck: true, price: 1999, time: 10, id: 13631111 },
        { title: "数学教程一对一", ischeck: true, price: 1999, time: 10, id: 13631222 },
        { title: "数学教程一对一", ischeck: false, price: 1999, time: 10, id: 13631333 },
        { title: "数学教程一对一", ischeck: true, price: 1999, time: 10, id: 13631666 },
        { title: "数学教程一对一", ischeck: false, price: 1999, time: 10, id: 1363789 },
        {
          title: "数学教程一对一",
          ischeck: true,
          price: 1999,
          time: 10,
          id: 655161427,
        },
      ],
    };
  },
  computed: {
    getDate() {
      let weekarr = ["日", "一", "二", "三", "四", "五", "六"];
      return {
        month: this.date.getMonth(),
        day: this.date.getDate(),
        week: weekarr[this.date.getDay()],
      };
    },
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
    renewal(val) {
      console.log(val);
    },
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$store.commit("isShowHeaderMutation", true);
  },
};
</script>
<style lang="scss" scoped>
.headerbox {
  .van-card {
    background: rgb(209, 209, 221);
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .van-card__content {
      margin-left: 20px;
      h3 {
        margin: 10px auto 20px;
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
    .imgthumb {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
.is-selected {
  color: #1989fa;
}

.footerbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footercontent {
    text-align: left;
    line-height: 30px;
  }
}
.record_desc_box {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
  box-sizing: border-box;
  padding-top: 30px;
  .ischeck {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 30px;
  }
}
.calendar_box {
  margin: 10px;
  box-shadow: 0 0 5px black;
  border-radius: 20px;
}
.todayCourse_box {
  margin: 10px;
  border-radius: 20px;
  box-shadow: 0 0 5px black;
  h4 {
    padding: 5px 0 5px 10px;
  }
}
</style>
