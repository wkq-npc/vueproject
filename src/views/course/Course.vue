<template>
  <div class="box">
    <div class="location">
      <span @click="$router.push('/location')"
        ><van-icon name="map-marked" />{{ $store.state.schoolarea.name }}&nbsp;&gt;</span
      >
    </div>
    <!-- 这里是轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <van-grid :column-num="4">
      <van-grid-item
        v-for="(value, k) in navText"
        :key="k"
        icon="photo-o"
        :text="value.name"
        @click="toitem(value)"
      />
    </van-grid>

    <Tutor></Tutor>
    <ClassicCourse></ClassicCourse>
    <OnetoOne></OnetoOne>
  </div>
</template>

<script>
import Tutor from "../../views/course/tutor";
import ClassicCourse from "../../views/course/classicCourse";
import OnetoOne from "../../views/course/OnetoOne";

import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem, Image } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
export default {
  components: {
    Tutor,
    ClassicCourse,
    OnetoOne,
  },
  data() {
    return {
      navText: [
        { name: "高效晚辅导" },
        { name: "周末精品课" },
        { name: "一对一" },
        { name: "搜索" },
      ],
    };
  },
  created() {
    this.$store.commit("isShowHeaderMutation", false);
    this.$store.commit("isShowFooterMutation", true);
  },
  methods: {
    toitem(val) {
      this.$router.push({ path: "/more", query: { name: val.name } });
      console.log(123);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box {
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
// 导航
.van-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.nav > img {
  margin-top: 10px;
}
// 班次
.bcBox {
  margin-bottom: 10px;
}
.bcBox2 {
  display: flex;
  justify-content: space-between;
}
.location {
  color: #39a9ed;
}
</style>
