<script setup>
import { ref } from "vue";

let time = null;
let seconds = ref(0);
let minutes = ref(0);


const start = () => {
  if (time !== null) {
    clearInterval(time);
  }
  time = setInterval(() => {
    seconds.value += 1;
    if (seconds.value === 60) {
      seconds.value = 0;
      minutes.value += 1;
    }
  }, 1000);
};

const stop = () => {
  clearInterval(time);
};

const reset = () => {
  clearInterval(time);
  seconds.value = 0;
  minutes.value = 0;
};
</script>

<template>
  <main>
    <h1>Timer</h1>

    <div class="card">
      <div class="u-flex">
        <p class="text">{{ minutes }}</p>
        <span>:</span>
        <p class="text">{{ seconds }}</p>
      </div>
    </div>
    <div class="button-group">
      <button @click="start" class="button">Start</button>
      <button @click="stop" class="button">Stop</button>
      <button @click="reset" class="button">Reset</button>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: hsl(var(--color-neutral-0));
  font-size: xx-large;
  font-weight: 600;
  text-align: center
}

.card {
  background-color: rgb(22, 20, 20);
  border: none;
}

.u-flex {
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

span {
  font-size: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.text {
  color: hsl(var(--color-neutral-0));
  font-size: 50px;
}

.button-group {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
</style>
