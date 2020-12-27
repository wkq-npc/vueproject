<template>
  <div class="com">
    <div class="fanhui" @click="fanhui">
      <span><b>&lt;</b></span> 立即咨询
    </div>

    <div class="pir">
      <img
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125146122,3496373700&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <div class="contentText">
      <h3>联系我们</h3>
      <p>
        城南校区：17746084680 <br />
        水榭校区：0591-85220810<br />
        世贸校区：0591-85211969<br />
        花之南校区：0591-85150106<br />
        滨江校区：0591-86001316<br />
        九洞桥校区：0591-86550125<br />
        万达校区：0591-85370025
      </p>

      <h3>联系地址</h3>
      <p>
        福清市中联天御财富广场4楼<br />
        福清市水南车站旁·景园公寓208<br />
        福清市龙山车站·农商银行旁3楼<br />
        福清市玫瑰园27#临街2层<br />
        福清市国际公馆2#2层(大地影院对面)<br />
        福清市融侨城17# 207.208店面<br />
        福清市金辉华府1号楼(宏路中学旁)<br />
      </p>
      <h3>联系邮箱</h3>
      <p>邮箱：342744682@qq.com</p>
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
  font-size: 18px;
}
</style>
