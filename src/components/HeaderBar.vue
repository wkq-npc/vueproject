<template>
  <div>
    <van-nav-bar title="耐寒教育" left-arrow @click-left="onClickLeft">
      <template #left>
        <div class="return">
          <van-icon class="aa" name="arrow-left" />
          <span>返回</span>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.return {
  margin-left: -8px;
  font-size: 16px;
  .aa {
    float: left;
    margin-top: 2px;
  }
  span {
    float: left;
    color: blue;
  }
}
</style>
