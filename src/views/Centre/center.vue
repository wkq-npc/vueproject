<template>
  <div>
    <div class="handertext">个人中心</div>
    <div class="banckground">
     
      <div
        class="avatar"
        data-enter-time="1608645908"
        data-click-fun="track_f_737069"
         @click="login"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
          class="avator-icon"
        />
        <div class="nick-name">
          <h3>耐寒教育<span></span></h3>
          <p></p>
        </div>
      </div>
      <div class="zhucekuang" v-show="!isblock">
       <p>手机号注册后才可以查看个人中心哦~</p>
        <van-button type="info" size="small" class="zhuce" @click="enroll">立即注册</van-button>
    </div>
      <div v-show="isblock">
      <mycourse></mycourse>
      <!-- 最后部分 -->
    <!-- <register class="register"></register> -->

      <management class="dibu"></management>
      <button @click="log_out">退出登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import mycourse from "./mycourse"
import management from "./management"
// import register from "./register"
export default {
  data() {
    return {
      active: 0,
      isblock:true
    };
  },
  components:{
    mycourse,
    management
  },
  methods: {
    login(){
      console.log(123);
    },
    enroll(){
      this.$router.push("/");
    },
    log_out(){
      this.isblock=false
    }
  },
  created(){
     this.$store.commit("isShowFooterMutation",false)
  },
};
</script>
 <style lang="scss" scoped>
.zhucekuang{
  text-align: center;
  margin-top: 160px;
}
.zhuce{
  width: 200px;
}
button{
  color: #ffff;
  display:block;
  width: 90%;
  height: 2.5rem;
  background-color: cornflowerblue;
  margin: 0 auto;
  border-radius: .375rem;
  outline:none;
  border: 0;
  font-size: 1.875rem;
}
.dibu{
  margin-top: 20px;
  margin-bottom: 20px;
}
.avatar img {
  position: relative;
  top: 48px;
  left: 40px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
}
.handertext {
  width: 100%;
 text-align: center; 
}
.nick-name {
  position: relative;
  top: -30px;
  left: 140px;
  color: white;
  width: 100px;
}

.banckground {
  background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125146122,3496373700&fm=26&gp=0.jpg)
    no-repeat;
  background-size: 100% 60%;
  width: 100%;
  height: 400px;
}
 
 </style>