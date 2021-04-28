<template>
  <test-box></test-box>
</template>

<script>
import TestBox from "./TestBox.vue";
export default {
  name: "ProjectTest",
  components: {
    TestBox,
  },
  data() {
    return {
      checkedNames: [],
      counter1: 0,
      counter2: 0,
      ifture: true,
      checked: false,
      passmessage: "传给子代的消息",
      title: 0,
      ifhear: "",
    };
  },
};
</script>
<style scoped>
</style>
