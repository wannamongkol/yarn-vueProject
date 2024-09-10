<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCounterStore } from "./stores/Counter.ts";
const counter = useCounterStore();
</script>

<template>
    <RouterView> </RouterView>
</template>

<style scoped></style>
