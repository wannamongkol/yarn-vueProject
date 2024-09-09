<template>
    <button @click="handleClick" class="bg-slate-200 p-4 rounded-lg">
        {{ props.title }}
    </button>
</template>

<script setup lang="ts">
import { defineEmits, ref, defineProps } from "vue";
interface Props {
    title: string;
}
const props = defineProps<Props>();

type ClickPayload = {
    message: string;
    timestamp: number;
};

const emit = defineEmits<{ (event: myButton, payload: ClickPayload) }>();

const handleClick = () => {
    const randnum = Math.random(3);
    console.log("do something from child " + randnum);
    emit("myButton", {
        message: "do something from child" + randnum,
        timestamp: Date.now(),
    });
};
</script>
