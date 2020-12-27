<template>
  <div class="com">
    <div class="fanhui" @click="fanhui">
      <span><b>&lt;</b></span> 关于我们
    </div>

    <div class="pir">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125146122,3496373700&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <div class="contentText">
      <h3>关于我们</h3>
      <p>致力于打造全国最专业的教育机构</p>
      <p>
        自2012年8月成立以来，备受孩子和家长的青睐，经过长达5年的努力，我们为福建省不同年龄段的孩子创造先进创新的教育体系。全省丰富的教育行业经验和优质的产品资源。教师风趣幽默，有意营造学习氛围，旨在为3-18岁的孩子提供更轻松·更高效·更快乐的学习。在全浸入式学习环境中，激发孩子的学习兴趣，使孩子学习起来游刃有余。
      </p>
      <p>
        耐寒教育的愿景是在个性化教育理念的指导下，通过持续的创新和整合，让每个需要成长机会的人都能获得更优质的教育资源和服务。使教育从艺术走向科学，整合社会更高品质、更具效率、更先进的教育资源，配置个性化的学习帮助计划和更适合学员的教学方案，最大程度地释放每个学员的潜能，让每个需要成长机会的人都能获得更优质的教育。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$store.commit("isShowHeaderMutation", false);
    this.$store.commit("isShowFooterMutation", false);
  },
};
</script>
<style lang="scss" scoped>
.com {
  padding: 0 18px;
}
.fanhui {
  font-size: 20px;
  color: #666666;
  height: 30px;
}
.pir {
  margin-top: 20px;
  text-align: center;
}
.pir img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.contentText {
  width: 100%;
  text-align: center;
  color: #666;
}
.contentText h3 {
  color: cornflowerblue;
}
.contentText p {
  line-height: 20px;
  font-size: 18px;
}
</style>
