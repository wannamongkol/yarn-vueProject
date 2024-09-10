<template>
    <div class="flex items-center">
        <div class="flex-grow border-t border-gray-800"></div>

        <span class="mx-4 text-gray-600" v-if="middle">{{ middle }}</span>
        <div class="flex-grow border-t border-gray-800"></div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    middle?: string;
}>();

const middle = props.middle;
</script>
