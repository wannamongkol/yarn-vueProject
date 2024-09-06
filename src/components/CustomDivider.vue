<!-- CustomDivider.vue -->
<template>
    <div class="flex items-center">
        <div class="flex-grow border-t border-gray-800"></div>
        <span class="mx-4 text-gray-600">{{ middle }}</span>
        <div class="flex-grow border-t border-gray-800"></div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Define props with default values
const props = defineProps<{
    middle?: string; // Optional prop
}>();

// Ensure default value handling
const middle = props.middle || "Default Text";
</script>
