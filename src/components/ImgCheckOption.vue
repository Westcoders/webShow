<template>
  <div @click="beChecked()" class="checkedOption">
    <img :src="address" alt="未设置图片" class="checkedOption-img" />
    <img v-if="ifChecked" src="src/assets/checked.jpeg" alt class="viewChecked" />
  </div>
</template>
<script>
export default {
  name: "ImgCheckOption",
  data() {
    return {
      ifChecked: false,
      isChecked: {
        type: Boolean,
        default: false,
      },
    };
  },
  inject: ["GroupContext"],
  props: {
    value: {
      type: String,
      default: "未设置值",
    },
    address: {
      type: String,
      default: null,
    },
  },
  methods: {
    beChecked() {
      const group = this.GroupContext;
      this.ifChecked = !this.ifChecked;
      if (this.ifChecked) {
        group.checkedContext.push(this.value);
      } else {
        group.checkedContext = group.checkedContext.filter(
          (item) => item != this.value
        );
      }
    },
    defaultChecked() {
      const group = this.GroupContext;
      if (group.defaultCheckeds.includes(this.value)) {
        this.ifChecked = true;
        group.checkedContext.push(this.value);
      }
    },
  },
  created() {
    this.defaultChecked();
  },
};
</script>
<style  scoped>
.checkedOption {
  position: relative;
  display: inline-block;
  font-size: 12px;
  margin: 10px 2px 2px;
  width: 100px;
  height: 100px;
  z-index: 0;
}
.checkedOption-img {
  position: absolute;
  display: inline;
  width: 100px;
  height: 100px;
  z-index: 0;
  border-radius: 10px;
  left: 0;
}
.viewChecked {
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.4;
  border-radius: 10px;
  z-index: 1;
  left: 0;
}
</style>
