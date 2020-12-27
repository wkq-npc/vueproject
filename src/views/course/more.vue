<template>
  <div class="box">
    <van-search @click="search" shape="round" disabled placeholder="请输入搜索关键词" />
    <div class="bcNav">{{ $route.query.name }}</div>
    <div class="bcBox2">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(v, k) in list" :key="k">
          <template #default>
            <div class="bc" @click="detail(v.cource_id)">
              <img src="../../assets/img/1.png" alt="" />
              <div class="content">
                <p>{{ v.name }}</p>
                <span>{{ v.price }}元/{{ v.classTime }}小时</span>
              </div>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    //   跳转搜索
    search() {
      this.$router.push("/search");
    },
    detail(val) {
      console.log(val);
      this.$router.push({ name: "datail", params: { id: 123456 } });
    },
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/courseList"
      )
      .then((ret) => {
        this.list = ret;
      });
  },
};
</script>

<style lang="scss" scoped>
.bcNav {
  color: #000;
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
}
.box {
  width: 100%;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
}
.bc {
  position: relative;
  float: left;
  margin-left: 3px;
  margin-right: 2px;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
  div {
    position: absolute;
    top: 85px;
    background: rgba(235, 230, 230, 0.8);
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 5px;
    span {
      font-size: 12px;
    }
  }
}
</style>
