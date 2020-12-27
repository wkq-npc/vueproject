<template>
  <div>
    <h3>请选择查看的校区</h3>
    <div class="schoolarea">
      <span v-for="(v, k) in list" :key="k" @click="setArea(v)">{{ v.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    setArea(val) {
      this.$store.commit("setAreaMutation", val);
      this.$router.back();
    },
  },
  created() {
    this.$store.commit("isShowHeaderMutation", true);
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/schoolarea"
      )
      .then((ret) => {
        this.list = ret;
      });
  },
};
</script>
<style lang="scss" scoped>
.schoolarea {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  span {
    display: block;
    padding: 10px 15px;
    border: 1px solid gray;
    margin: 10px;
  }
}
</style>
