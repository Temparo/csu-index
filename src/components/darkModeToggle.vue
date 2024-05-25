<script lang="ts" setup>
import {isDark} from "../hooks/useDarkMode.ts";
import {onMounted, watch} from "vue";

class NightDayToggle {
  $el: HTMLElement

  constructor(el: HTMLElement) {
    this.$el = el
  }

  initialize() {
    if (isDark.value === true) {
      this.setNight()
    } else if (isDark.value === false) {
      this.setDay()
    }
  }

  setNight() {
    this.$el.classList.add('night')
    this.$el.classList.remove('day')

  }

  setDay() {
    this.$el.classList.add('day')
    this.$el.classList.remove('night')

  }

  toggle() {
    if (isDark.value === false) {
      this.setDay()
    } else if (isDark.value === true)
      this.setNight()
  }
}

onMounted(() => {
  const temp: any = document.querySelector('.night-day-toggle')
  const nightDayToggle = new NightDayToggle(temp)
  nightDayToggle.initialize()
  watch(isDark, () => {
    nightDayToggle.toggle()
  })
})

</script>

<template>
  <!-- partial:index.partial.html -->
  <div class="night-day-toggle night">
    <div class="planet">
      <div class="moon">
        <div class="crater crater-1"></div>
        <div class="crater crater-2"></div>
        <div class="crater crater-3"></div>
        <div class="crater crater-4"></div>
        <div class="crater crater-5"></div>
      </div>
      <div class="sun"></div>
    </div>
    <div class="sky sky-night">
      <svg class="star star-1" height="12" viewBox="0 0 24 24" width="12">
        <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
      </svg>
      <svg class="star star-2" height="10" viewBox="0 0 24 24" width="10">
        <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
      </svg>
      <svg class="star star-3" height="8" viewBox="0 0 24 24" width="8">
        <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
      </svg>
      <svg class="star star-4" height="6" viewBox="0 0 24 24" width="6">
        <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
      </svg>
      <svg class="star star-5" height="4" viewBox="0 0 24 24" width="4">
        <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
      </svg>
    </div>
    <div class="sky sky-day">
      <div class="cloud cloud-1">
        <div class="cloud-bubble cloud-bubble-1"></div>
        <div class="cloud-bubble cloud-bubble-2"></div>
        <div class="cloud-bubble cloud-bubble-3"></div>
        <div class="cloud-bubble cloud-bubble-4"></div>
        <div class="cloud-bubble cloud-bubble-5"></div>
      </div>
      <div class="cloud cloud-2">
        <div class="cloud-bubble cloud-bubble-1"></div>
        <div class="cloud-bubble cloud-bubble-2"></div>
        <div class="cloud-bubble cloud-bubble-3"></div>
        <div class="cloud-bubble cloud-bubble-4"></div>
        <div class="cloud-bubble cloud-bubble-5"></div>
      </div>
      <div class="cloud cloud-3">
        <div class="cloud-bubble cloud-bubble-1"></div>
        <div class="cloud-bubble cloud-bubble-2"></div>
        <div class="cloud-bubble cloud-bubble-3"></div>
        <div class="cloud-bubble cloud-bubble-4"></div>
        <div class="cloud-bubble cloud-bubble-5"></div>
      </div>
      <div class="cloud cloud-4">
        <div class="cloud-bubble cloud-bubble-1"></div>
        <div class="cloud-bubble cloud-bubble-2"></div>
        <div class="cloud-bubble cloud-bubble-3"></div>
        <div class="cloud-bubble cloud-bubble-4"></div>
        <div class="cloud-bubble cloud-bubble-5"></div>
      </div>
    </div>
  </div>

</template>
<style scoped>
* {
  box-sizing: border-box;
}

*:before, *:after {
  box-sizing: border-box;
}

.night-day-toggle {
  cursor: pointer;
  position: relative;
  width: 12rem;
  height: 6rem;
  border-radius: 6rem;
  transition: background 0.3s ease;
}

.night-day-toggle .planet {
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease;
}

.night-day-toggle .planet .moon,
.night-day-toggle .planet .sun {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.night-day-toggle .planet .moon {
  background: #fff;
  z-index: 5;
}

.night-day-toggle .planet .moon .crater {
  position: absolute;
  border-radius: 50%;
  background: #efefef;
}

.night-day-toggle .planet .moon .crater-1 {
  width: 48%;
  height: 48%;
  right: 0;
  top: 18%;
  transform: translateX(35%);
}

.night-day-toggle .planet .moon .crater-2 {
  width: 13%;
  height: 13%;
  top: 7%;
  left: 10%;
  background: #d6d6d6;
}

.night-day-toggle .planet .moon .crater-3 {
  width: 25%;
  height: 25%;
  top: 26%;
  left: 22%;
}

.night-day-toggle .planet .moon .crater-4 {
  width: 22%;
  height: 22%;
  top: 70%;
  left: 8%;
}

.night-day-toggle .planet .moon .crater-5 {
  width: 15%;
  height: 15%;
  top: 70%;
  left: 58%;
}

.night-day-toggle .planet .sun {
  background: #feeb97;
  border-right: 0.25rem solid #f4ce8c;
  border-radius: 50%;
}

.night-day-toggle .sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.night-day-toggle .sky-night .star {
  position: absolute;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.night-day-toggle .sky-night .star path {
  fill: #fff;
}

.night-day-toggle .sky-night .star-1 {
  right: 11%;
  bottom: 21%;
  width: 8%;
  height: 16%;
}

.night-day-toggle .sky-night .star-2 {
  left: 50%;
  top: 20%;
  width: 7%;
  height: 15%;
}

.night-day-toggle .sky-night .star-3 {
  top: 19%;
  right: 16%;
  width: 5%;
  height: 14%;
}

.night-day-toggle .sky-night .star-4 {
  right: 27%;
  top: 47%;
  width: 5%;
  height: 9%;
}

.night-day-toggle .sky-night .star-5 {
  left: 55%;
  bottom: 26%;
  width: 4%;
  height: 12%;
}

.night-day-toggle .sky-day .cloud {
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.night-day-toggle .sky-day .cloud .cloud-bubble {
  background: #fff;
  border-radius: 50%;
  position: absolute;
}

.night-day-toggle .sky-day .cloud .cloud-bubble:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.night-day-toggle .sky-day .cloud-1 {
  width: 20%;
  height: 30.5%;
  right: 38%;
  bottom: 22%;
}

.night-day-toggle .sky-day .cloud-1 .cloud-bubble-1 {
  width: 44%;
  bottom: 8%;
}

.night-day-toggle .sky-day .cloud-1 .cloud-bubble-2 {
  width: 44%;
  bottom: 0;
  left: 30%;
}

.night-day-toggle .sky-day .cloud-1 .cloud-bubble-3 {
  width: 44%;
  right: 0;
  bottom: 10%;
}

.night-day-toggle .sky-day .cloud-1 .cloud-bubble-4 {
  width: 42%;
  right: 20%;
  top: 0;
}

.night-day-toggle .sky-day .cloud-1 .cloud-bubble-5 {
  width: 44%;
  left: 10%;
  top: 0;
}

.night-day-toggle .sky-day .cloud-2 {
  width: 11.5%;
  height: 18%;
  left: 12%;
  top: 22%;
}

.night-day-toggle .sky-day .cloud-2 .cloud-bubble-1 {
  width: 44%;
  bottom: 10%;
}

.night-day-toggle .sky-day .cloud-2 .cloud-bubble-2 {
  width: 40%;
  bottom: 0;
  left: 32%;
}

.night-day-toggle .sky-day .cloud-2 .cloud-bubble-3 {
  width: 42%;
  right: 0;
  bottom: 18%;
}

.night-day-toggle .sky-day .cloud-2 .cloud-bubble-4 {
  width: 40%;
  right: 18%;
  top: 5%;
}

.night-day-toggle .sky-day .cloud-2 .cloud-bubble-5 {
  width: 44%;
  left: 12%;
  top: 0;
}

.night-day-toggle .sky-day .cloud-3 {
  width: 11.5%;
  height: 16%;
  left: 42%;
  top: 12%;
}

.night-day-toggle .sky-day .cloud-3 .cloud-bubble-1 {
  width: 44%;
  left: 0;
  bottom: 16%;
}

.night-day-toggle .sky-day .cloud-3 .cloud-bubble-2 {
  width: 42%;
  bottom: 0;
  left: 30%;
}

.night-day-toggle .sky-day .cloud-3 .cloud-bubble-3 {
  width: 44%;
  right: 0;
  bottom: 14%;
}

.night-day-toggle .sky-day .cloud-3 .cloud-bubble-4 {
  width: 40%;
  top: 0;
  right: 14%;
}

.night-day-toggle .sky-day .cloud-3 .cloud-bubble-5 {
  width: 32%;
  left: 23%;
  top: 4%;
}

.night-day-toggle .sky-day .cloud-4 {
  left: 15%;
  bottom: 22%;
  width: 10%;
  height: 13%;
}

.night-day-toggle .sky-day .cloud-4 .cloud-bubble-1 {
  width: 42%;
  left: 0;
  bottom: 17%;
}

.night-day-toggle .sky-day .cloud-4 .cloud-bubble-2 {
  width: 45%;
  bottom: 0;
  left: 25%;
}

.night-day-toggle .sky-day .cloud-4 .cloud-bubble-3 {
  width: 44%;
  bottom: 0;
  right: 0;
}

.night-day-toggle .sky-day .cloud-4 .cloud-bubble-4 {
  width: 40%;
  top: 0;
  right: 5%;
}

.night-day-toggle .sky-day .cloud-4 .cloud-bubble-5 {
  width: 36%;
  left: 28%;
  top: 5%;
}

.night-day-toggle input[type=checkbox] {
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
}

.night-day-toggle.night {
  background: #3c4360;
}

.night-day-toggle.night .planet .moon {
  visibility: visible;
  opacity: 1;
}

.night-day-toggle.night .sky-night {
  visibility: visible;
  opacity: 1;
}

.night-day-toggle.night .sky-night .star {
  transform: translateX(0);
}

.night-day-toggle.day {
  background: #afdfeb;
}

.night-day-toggle.day .planet {
  transform: translateX(6rem);
}

.night-day-toggle.day .planet .sun {
  visibility: visible;
  opacity: 1;
}

.night-day-toggle.day .sky-day {
  visibility: visible;
  opacity: 1;
}

.night-day-toggle.day .sky-day .cloud {
  transform: translateX(0);
}

body {
  --background-night: #f5f5f5;
  --background-day: #ffe7c0;
  --background: var(--background-night);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 100vh;
  background: var(--background);
  transition: background 0.3s ease;
}
</style>