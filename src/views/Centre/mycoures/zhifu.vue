<template>
    <div>
        <div @click="showList">
            <p>我的优惠卷</p>
        </div>
        <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
    </div>
</template>
<script>
const coupon = [ {available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
},];
 
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);
export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [...coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
   created() {
        this.$http.get("https://www.fastmock.site/mock/7d2e31adde00c30670aab34643a7a6e9/v1/v1/disCount_card").then(ret=>{
            console.log(ret.discount);
            
        })
    },
    
};
</script>
<style lang="scss" scoped>

</style>