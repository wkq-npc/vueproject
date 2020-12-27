<template>
  <div class="footerbar">
    <van-tabbar
      @change="onChange"
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item style="font-size: 20px" class="iconfont icon-xuexizhongxin">
        <span>课程</span>
      </van-tabbar-item>
      <van-tabbar-item
        style="font-size: 20px"
        :badge="$store.state.msg"
        icon="smile-comment"
      >
        <span>消息</span>
      </van-tabbar-item>
      <van-tabbar-item style="font-size: 20px" icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
import "../assets/icon/iconfont.css";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data() {
    return {
      active: 0,
      url: ["/course", "/message", "/center"],
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
      // 此处的索引与url数据中的地址是一一对应的，所以可以直接使用
      this.$router.push(this.url[index]);
    },
  },
  created() {
    // 根据页面的地址纠正底部索引
    this.active =
      this.url.indexOf(this.$route.path) >= 0 ? this.url.indexOf(this.$route.path) : 0;
    // 针对comingsoon的索引纠正
    // if (this.$route.path == "/films/comingsoon") {
    //     this.active = 0;
    // }
  },
};
</script>
<style lang="scss" scoped>
.footerbar {
  background: white;
}
</style>
