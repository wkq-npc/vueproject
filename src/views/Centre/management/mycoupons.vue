<template>
    <div class="guanli">
        <div class="guanlitiao"><span></span>优惠卷管理</div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="left">
                    <p>优惠卷立减{{item.discount}}元</p>
                </div>
               <i></i>
               <div class="right"><p>{{item.Max_age}}</p>
               <p>即将失效</p>
               </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:{},
        }
    },
    created() {
        this.$http.get("https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/disCount_card").then(ret=>{
            console.log(ret.discount);
            this.list = ret.discount
        })
    },
}
</script>
<style lang="scss" scoped>
li{
    width: 352px;
    height: 142px;
    background: url("http://www.axshare.cn/gsc/GG9JFX/57/3e/7a/573e7a17755d499e9abdcbcf35955341/images/%E9%80%89%E6%8B%A9%E4%BC%98%E6%83%A0%E5%88%B8/u1897.png?token=b027a4f346188fbd63790e6327d13beb5764393f30bac0192cb73f729b8976c2");
    margin: 20px auto;
    position: relative;
    color:#ffff;
}
li i{
    display: inline-block;
    height: 112px;
    width: 1px;
    border-right: 1px dashed white;
    position: absolute;
    top: 13px;
    left: 215px;
}
.left{
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 22px;
}
.right{
    position: absolute;
    top: 20px;
    right: 40px;
    font-weight: normal;
    font-size: 16px;
}
.guanli{
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    font-weight: bold;
    margin: 10px 0;
    font-size: 18px;
}
.guanli span{
    display: inline-block;
    width: 8px;
    height: 20px;
   background-color: rgba(47, 120, 255, 1);
    margin-right: 8px;
    vertical-align: middle;
}
</style>