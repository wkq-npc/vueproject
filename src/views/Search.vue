<template>
  <div class="box">
    <form action="/">
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        right-icon="play"
      />
    </form>
    <div class="noSearch" v-show="!bool">还没有搜索记录哦</div>
    <!-- 有记录 -->
    <div>
      <div v-show="bool" class="searchContent" v-for="(item, index) in arr" :key="index">
        <span class="ap"><van-icon name="search" /></span>

        <span class="ap">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Icon } from "vant";

Vue.use(Search);
Vue.use(Icon);
export default {
  data() {
    return {
      // 输入框的内容
      value: "",
      // 存储搜索数据
      arr: [],
      bool: false,
    };
  },
  methods: {
    onSearch(val) {
      // 点击搜索框回车
      // val 是输入的内容
      console.log(val);
      this.arr.push(val);
      if (this.arr.length == 0) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
  },
  created() {
    this.$store.commit("isShowHeaderMutation", true);
    this.$store.commit("isShowFooterMutation", false);
  },
};
</script>

<style lang="scss" scoped>
.box {
}
.noSearch {
  margin-top: 50px;
  text-align: center;
  color: #999;
}
.searchContent {
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 16px;
  background: #999;
  border-radius: 15px;
  .ap {
    padding-left: 8px;
  }
}
</style>
