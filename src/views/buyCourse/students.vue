<template>
  <div>
    <van-grid :center="false" direction="horizontal" :border="false" :column-num="1">
      <van-grid-item>
        <div class="choose">
          <span class="xz"> 请选择参与学员 </span>
          <van-button type="primary" size="small" to="/newstudents">新增学员</van-button>
        </div>
      </van-grid-item>
    </van-grid>

    <ul class="students">
      <li v-for="(item, index) in list" :key="index">
        <div @click="add(item.name, item.stu_id)">
          <input type="radio" />{{ item.name }}
        </div>
      </li>
    </ul>
    <div style="text-align: center; padding-top: 20px">
      <van-button @click="saveAdd" round type="info">提交</van-button>
    </div>
  </div>
</template>

<script>
import "@/assets/icon1/iconfont.css";
import Vue from "vue";
import { Grid, GridItem, Radio, Button } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(Radio);

export default {
  data() {
    return {
      list: [],
      addarr: [],
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$http
      .get("https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/stu")
      .then((ret) => {
        this.list = ret;
      });
  },

  methods: {
    add(name, index) {
      let stu = { name: name, id: index };
      this.addarr.forEach((el) => {
        if (el.id !== index) {
          this.addarr.push(stu);
        }
      });
      this.addarr.push(stu);
    },
    saveAdd() {
      this.$store.commit("getnStuNum", this.addarr);
      this.$router.push(`/buy`);
    },
  },
};
</script>

<style lang="scss" scoped>
.choose {
  display: flex;
  justify-content: space-around;
}
.xz {
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  margin-right: 50px;
}
.students li {
  height: 30px;
  line-height: 30px;
  background: rgb(250, 249, 249);
  margin-bottom: 5px;
  padding-left: 10px;
}
</style>
