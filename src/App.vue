<script setup lang="ts">
import {RouterView} from 'vue-router'
import { useCounterStore } from "./stores/Counter.js"
const counter = useCounterStore()
const userinfo = counter.user
</script>

<template>
  {{ userinfo.username }}
  {{ userinfo.password }}
  <RouterView>
  </RouterView>
</template>


<style scoped>
</style>