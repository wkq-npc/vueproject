<template>
    <div class="submint">
        <div class="icon">
            <van-icon name="checked" size="160"  />
            <p>提交成功</p>
            <p class="shenhe">请等待管理员审核</p>
        </div>
        <div class="anniu">
            <van-button type="info" size="large" @click="look">查看订单</van-button>
            <br>
            <van-button plain type="info" size="large" @click="get_back">返回首页</van-button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Icon);
export default {
    data() {
        return {
            
        }
    },
    methods: {
        look(){
           this.$router.push("/");
        },
        get_back(){
           this.$router.push("/");
        }
    },
}
</script>
<style lang="scss" scoped>
.submint{
    text-align: center;
    padding: 0 1.875rem;
}
.icon{
    margin-top: 5rem;
}
.icon p{
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    font-weight: bold;
}
.shenhe{
    color: grey;
}
.anniu{
    margin-top: 6.25rem;
}
button{
    margin-top: 26px;
}
</style>