<template>
  <div class="testBox">
    <br />
    <img-check-group
      :groupValues="groupValuesOne"
      :groupAddress="groupAddressOne"
      :defaultCheckeds="groupCheckeds"
    ></img-check-group>
    <br />
    <button-group>
      <button-option size="small"></button-option>
      <button-option name="点我" :isAllowed="false"></button-option>
      <button-option size="Middle" icon="search"></button-option>
    </button-group>
    <br />
  </div>
</template>

<script>
import ImgCheckGroup from "./ImgCheckGroup.vue";
import buttonGroup from "./ButtonGroup.vue";
import buttonOption from "./ButtonOption.vue";
export default {
  name: "TestBox",
  components: {
    ImgCheckGroup,
    buttonGroup,
    buttonOption,
   },
  data() {
    return {
      groupValuesOne: ["图一", "图二", "图三", "图四"],
      //"图二", "图三", "图四"
      groupAddressOne: ["src/assets/Picture.png", "src/assets/Picture.png"],
      groupCheckeds: ["图二"],
    };
  },
};
</script>
<style scoped>
.testBox {
  background-color: rgb(222, 246, 248);
  background-size: 100% 100%;
  position: relative;
  margin: auto;
  width: 1500px;
}
</style>
