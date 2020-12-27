import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //显示底部导航
    isShowFooter:true,
      //显示顶部导航
      isShowHeader:false,
    //消息条数
    msg:0,
    //校区
    schoolarea:{name:"城北",id:112},
    //token令牌
    jwt:"",
    StuArr: [],
    school: [],
  },
  mutations: {
        // 获取学生数量
        getnStuNum(state, data) {
          state.StuArr=data
        },
        // 更改选择的校区老师
        getschool(state, name) {
          state.school = name
        },
    //底部导航栏的显示
      isShowFooterMutation(state,data){
        state.isShowFooter=data
      },
       //底部导航栏的显示
       isShowHeaderMutation(state,data){
        state.isShowHeader=data
      },
      //消息条数
      setmsgnum(state,data){
        state.msg=data
      },
      setAreaMutation(state,data){
        state.schoolarea=data
      },
      //存储jwt
      setJwt(state,data){
        state.jwt=data
        // 设置localStorage
        localStorage.setItem("jwt", data);
      }

  },
  actions: {
  },
  modules: {
  }
})
