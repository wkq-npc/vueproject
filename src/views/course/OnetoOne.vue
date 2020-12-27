<template>
  <div>
    <div class="bcBox">
      <div class="bcNav">
        个性化一对一
        <span @click="jump">更多></span>
      </div>
      <div class="bcBox2">
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(v, k) in courseInfo" :key="k">
            <template #default>
              <div class="bc" @click="detail(v.id)">
                <img src="../../assets/img/1.png" alt="" />
                <div class="content">
                  <p>{{ v.name }}</p>
                  <span>{{ v.price }}元{{ v.time }}小时</span>
                </div>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseInfo: [
        {
          name: "课程名称",
          course_img: "../../assets/img/2.png",
          price: 1000,
          time: 10,
          id: 123456,
        },
        {
          name: "课程名称",
          course_img: "../../assets/img/1.png",
          price: 1000,
          time: 12,
          id: 123456,
        },
      ],
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/more", query: { name: "个性化一对一" } });
    },
    // 点击跳转详情 需要把当前点击的课程的id当参数传过去
    detail() {
      this.$router.push({ name: "datail", params: { id: 123456 } });
    },
  },
};
</script>

<style lang="scss" scoped>
.bcBox {
  margin-bottom: 10px;
}
.bcBox2 {
  .van-grid {
    display: flex;
    justify-content: space-around;
  }
}
.bcNav {
  color: #000;
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  span {
    color: #999999;
    font-weight: normal;
    font-size: 14px;
    float: right;
  }
}
.bc {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
  .content {
    position: absolute;
    bottom: 0;
    background: rgba(236, 228, 228, 0.5);
    width: 100%;
  }
}
</style>
