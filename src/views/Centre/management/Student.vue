<template>
    <div class="student"> 
         <div class="fanhui" @click="fanhui"><span><b>&lt;</b></span> 学员管理</div>
    <div>
        <div class="hander">
            <span class="span"></span>学员管理
        <div class="guanli" @click="xiugai" v-show="isShow">编辑</div>
         <div class="guanli1" @click="xiugai" v-show="!isShow">完成</div>
        </div>
    </div>

    <ul>
        <li v-for="(item,index) in list" :key="index" @click="
message(item.stu_id)">
            <p>{{item.name}}
                <span v-show="isShow" >&gt;</span>
                <span class="fuhao" v-show="!isShow"><van-icon name="close" size="26" @click.stop="Dialog(index)"/></span>
                </p>    
        </li>
    </ul>

    </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Dialog } from 'vant';
Vue.use(Icon);
export default {
    data() {
        return {
            isShow:true,
            list:[],
            abc:0,
        }
    },
    methods: {
        fanhui(){
        this.$router.go(-1);
    },
    xiugai(){
        this.isShow=!this.isShow;
    },
    message(id){
        this.$router.push("/center/student/" + id);
    },
     Dialog(index){
         this.abc=index
    this.$dialog.confirm({
     message:'您确认取消订单么？订单取消后不可恢复!',
     confirmButtonColor:'red',
    }).then(()=>{
     this.list.splice(this.abc,1)
     console.log(this.abc);
    }).catch(()=>{
     console.log('点击了取消')
    })
   }   
    },
    created() {
        this.$http.get("https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/stu").then(ret=>{
            console.log(ret);
            this.list=ret
        })
    },
}
</script>
<style lang="scss" scoped>
.student{
    padding: 0 15px;
}
.fanhui{
    font-size: 20px;
    color: #666666;
    height: 30px;
}
.hander{
    height: 20px;
    font-size: 20px;
}
.span{
    display: inline-block;
    width: 5px;
    height: 20px;
    background: blue;
    margin-right: 5px;
}
.guanli{
    float: right;
}
li{
    width: 100%;
    height: 70px;
    background: cornflowerblue;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 15px;
    position: relative;
    
}
li p{
    line-height: 70px;
    font-size: 20px;
    color: #fff;
}
li span{
    // display: inline-block;
    float: right;
}
.guanli1{
    float: right;
    color: red;

}
.fuhao{
    color: red;
    
}
</style>