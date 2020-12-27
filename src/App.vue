<template>
  <div id="app">
    <HeaderBar v-show="isShowHeader"></HeaderBar>
    <router-view></router-view>
    <FooterBar v-show="isShowFooter"></FooterBar>
  </div>
</template>
<script>
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isShowHeader", "isShowFooter"]),
  },
  components: {
    FooterBar,
    HeaderBar,
  },
  created() {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
