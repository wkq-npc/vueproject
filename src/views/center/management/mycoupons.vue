<template>
  <div class="guanli">
    <div class="guanlitiao"><span></span>优惠卷管理</div>
    <ul>
      <li @click="usecard(item)" v-for="(item, index) in list" :key="index">
        <div class="left">
          <p>优惠卷立减{{ item.discount }}元</p>
        </div>

        <div class="right">
          <div>
            <p>{{ item.Max_age }}</p>
            <p>即将失效</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {},
    };
  },
  created() {
    this.$store.commit("isShowFooterMutation", false);
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/disCount_card"
      )
      .then((ret) => {
        console.log(ret.discount);
        this.list = ret.discount;
      });
  },
  methods: {
    usecard(val) {
      console.log(val);
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  width: 352px;
  height: 142px;
  background: url("../../../assets/u1897.png");
  color: #ffff;
  display: flex;
  text-align: center;
  margin: auto;
}
.left {
  width: 215px;
  border-right: 1px dashed white;
  font-size: 22px;
  height: 136px;
  line-height: 136px;
}
.right {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 1.25rem;
}
.guanli {
  padding: 0 10px;
  height: 20px;
  line-height: 20px;
  font-weight: bold;
  margin: 10px 0;
  font-size: 18px;
}
.guanli span {
  display: inline-block;
  width: 8px;
  height: 20px;
  background-color: rgba(47, 120, 255, 1);
  margin-right: 8px;
  vertical-align: middle;
}
</style>
