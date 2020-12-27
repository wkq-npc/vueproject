<template>
  <div>
    <div>
      <van-card
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="(v, k) in datalist"
        :key="k"
      >
        <template #title>
          <h2>{{ v.title }}</h2>
        </template>
        <template #price>
          <h3 class="price">￥{{ v.price }}/{{ v.course_count }}课时</h3>
        </template>
        <template #footer>
          <span>结束于{{ v.endtime }}</span>
          <van-button
            @click="$router.push({ path: '/detail', query: { id: v.billId } })"
            size="mini"
            type="info"
            >重新报名</van-button
          >
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tag, Button, Card } from "vant";
Vue.use(Tag);
export default {
  data() {
    return {
      datalist: [],
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$store.commit("isShowHeaderMutation", true);
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/endCourse"
      )
      .then((ret) => {
        this.datalist = ret.endCourse;
      });
  },
};
</script>
<style lang="scss" scoped>
.van-card__footer {
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
  }
  button {
    padding: 5px 15px;
  }
}
.price {
  color: red;
}
</style>
