<template>
    <div class="stttt">
       <div class="fanhui" @click="fanhui"><span><b>&lt;</b></span>学习中订单</div>
       <ul>
           <li v-for="(item,index) in list" :key="index">
<van-card
    :title="item.title">
<template #price>
    <p><b>￥1500/{{item.course_num}}课时</b></p>
</template>
  <template #thumb>
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.8287755.cn%2Fimages%2FTB1f4YuIpXXXXaTXFXXXXXXXXXX_%21%210-item_pic.jpg_500x500.jpg&refer=http%3A%2F%2Fwww.8287755.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611539192&t=4c49ed2070f07b99c1a46f30dd8673c6" alt="">
</template>
  <template #footer>
  <div class="footr">
      <p>课程剩余节数：<b>{{item.course_count}}</b></p>
      <i>如需退款请线下联系</i>
  </div>
    <van-button size="mini" class="xufei" @click="xufei(item.billId)">立即续费</van-button>
  </template>
</van-card>
           </li>
       </ul>
    </div>
</template>
<script>
import Vue from 'vue';
import { Card } from 'vant';
import {mapState,mapMutations} from "vuex"
Vue.use(Card);
export default {
    data() {
        return {
            list:{},
            listlength:"",
        }
    },
    created() {
        this.$http.get("https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/learningCourse").then(ret=>{
            // console.log(ret);
            this.list=ret.learningCourse
        })
    },
    
    
    methods: {
        fanhui(){
             this.$router.go(-1);
        },
        xufei(id){
             this.$router.push("/center/unpaid/"+id)
        }
    },
}
</script>
<style lang="scss" scoped>
button{
    margin: 14px;
    box-shadow: 0px 2px 10px rgba(47, 120, 255, 1)
}
.footr{
    float: left;
    color: grey;
    font-size: 14px;
    
}
.footr p{
    margin-bottom: 5px;
    color: black;
}
.footr i{
    font-style:normal
    
}
.van-card__footer{
    height: 70px;
    border-top: 1px solid black;
    padding-top:10px;
    margin-top: 10px;
    
}
.van-card__price{
    color: red;
    font-size: 18px;
}
.van-card__title{
    font-size: 20px;
    height: 40px;
    line-height: 40px;
}

.van-card{
    padding: 8px 8px;
    height: 200px;
}
.van-card__content{
    display: block;
    width: 200px;
    padding-left: 40px;
   
}
img{
    width: 120px;
    height: 80px;
    
}
.xufei{
    width: 100px;
    height: 40px;
    padding: 0 10px;
    border-radius:10px;
    background:rgba(47, 120, 255, 1);
    color: white;
}
.stttt{
    padding: 0 15px;
}
li{
    margin-top:20px


}
</style>