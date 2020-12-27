import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowFooter:true,
    obligation:"",
    studying:"",
    finished:"",
    
  },
  mutations: {
     isShowFooterMutation(state,data){
       state.isShowFooter=data
       },
      isObligation(state,val){
        state.obligation=val
      },
      isStudying(state,val){
        state.studying=val
      },
      isFinished(state,val){
        state.finished=val
      },
  },
  actions: {
  },
  modules: {
  }
})
