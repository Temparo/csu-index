<template>
    <span ref="target" class="target inline-block designer p-1 relative z-10">
        <a href="https://csu-index.github.io/" target="_self">Index</a>
        </span>
  <Moveable
      className="moveable"
      v-bind:controlPadding="35"
      v-bind:draggable="true"
      v-bind:pinchable="true"
      v-bind:rotatable="true"
      v-bind:scalable="true"
      v-bind:origin="false"
      v-bind:pinchOutside="true"
      v-bind:target="['.target']"
      v-bind:zoom="0.8"
      v-bind:useMutationObserver="true"
      v-bind:useResizeObserver="true"
      @drag="onDrag"
      @rotate="onRotate"
      @scale="onScale"
  />
</template>
<script lang="js">
import Moveable from "vue3-moveable";

export default {
  name: "app",
  components: {
    Moveable,
  },
  methods: {
    onDrag({transform}) {
      this.$refs.target.style.transform = transform;
    },
    onScale({drag}) {
      this.$refs.target.style.transform = drag.transform;
    },
    onRotate({drag}) {
      this.$refs.target.style.transform = drag.transform;
    }
  }
}
</script>
