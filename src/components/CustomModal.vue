<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
    isVisible: Boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["close"]);

const closeModal = () => {
    emit("close");
};

const closeOnOutsideClick = () => {
    closeModal();
};
</script>

<template>
    <div
        v-if="isVisible"
        class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
        @click="closeOnOutsideClick"
        @keydown.esc="closeModal"
        tabindex="0"
    >
        <div
            class="bg-white rounded-lg shadow-lg p-64 w-full max-w-md relative"
            @click.stop
        >
            <!-- <button
                @click="closeModal"
                class="absolute top-4 right-6 text-gray-500 hover:text-gray-700"
            >
                X
            </button> -->
            <div class="flex flex-col">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
