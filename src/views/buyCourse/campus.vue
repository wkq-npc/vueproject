<template>
  <div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab
        title="校区："
        title-style="font-size:20px;color: rgb(23, 171, 230);"
        disabled
        color="#000"
      ></van-tab>

      <van-tab :title="v" v-for="(v, k) in areaList" :key="k">
        <van-grid square :gutter="10" :column-num="2">
          <van-grid-item
            v-for="value in dataList"
            :key="value.id"
            @click="chooseteach(value)"
          >
            <template #default class="teacherInfo">
              <van-image :src="value.img" />
              <p>{{ value.name }}</p>
              <div v-if="value.isShow" class="choosebox">
                <h1>已选择</h1>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
    <van-tabbar v-model="active">
      <van-button icon="plus" @click="saveteacher" size="normal" round type="info"
        >保存</van-button
      >
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Grid, GridItem, Image } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(Image);
Vue.use(GridItem);
export default {
  data() {
    return {
      active: 0,
      // 头部导航
      areaList: ["百合", "水南", "龙山", "玫瑰园", "滨江"],
      // 页面数据
      dataList: [],
      dataList1: [],
      dataList2: [
        {
          id: 168486463,
          name: "燕青",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
        {
          id: 1234712463,
          name: "周杰伦",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
        {
          id: 6463,
          name: "周星驰",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
        {
          id: 1683,
          name: "马龙",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
        {
          id: 164863,
          name: "蔷薇",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
        {
          id: 1848463,
          name: "悟空",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          isShow: false,
        },
      ],
    };
  },
  created() {
    this.$http
      .get(
        "https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/teacherinfo"
      )
      .then((ret) => {
        console.log(ret);
        this.dataList1 = ret.teacherinfo;
        this.dataList = this.dataList1;
      });
  },
  methods: {
    // 点击是否选中
    chooseteach(val) {
      this.dataList.forEach((el) => {
        el.isShow = false;
      });
      val.isShow = !val.isShow;
      console.log(val);
    },
    onClick(val) {
      if (val == 1) {
        this.dataList = this.dataList1;
      } else if (val == 2) {
        this.dataList = this.dataList2;
      }
    },
    saveteacher() {
      let newarr = [];
      // name 老师名字 school 学校
      this.dataList.forEach((v, k) => {
        if (v.isShow) {
          newarr.push({ name: v.name, school: this.areaList[this.active - 1] });
        }
      });
      this.$router.push("/buy");
      this.$store.commit("getschool", newarr);
    },
  },
};
</script>
<style lang="scss" scoped>
.choosebox {
  height: 100%;
  width: 100%;
  color: white;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(207, 200, 200, 0.5);
  h1 {
    margin: 100px auto;
    text-align: center;
  }
}
.van-grid {
  display: flex;
  justify-content: space-between;
}
.van-grid-item {
  border-radius: 10px;
  p {
    position: absolute;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    background: gray;
    width: 100%;
    color: white;
    font-size: 20px;
    text-align: center;
  }
}
.van-tabbar {
  display: flex;
  justify-content: center;
}
</style>
