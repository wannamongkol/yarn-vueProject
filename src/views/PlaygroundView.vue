<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import CustomInput from "../components/CustomInput.vue";
const route = useRoute();
const id = route.params.id;
const logref = ref("NULL");
const value = ref("test");

watch(value, (newValue, oldValue) => {
    if (newValue) {
        logref.value = "update";
    } else if (newValue.length == 0) {
        logref.value = "please fill input";
    } else {
        logref.value = "do something";
    }
});
</script>
<template>
    <div
        class="container-fluid mx-auto min-h-screen p-16 bg-slate-50 shadow-lg"
    >
        <label class="block my-4 text-xl font-bold"
            >current value : {{ value }} | watch log : {{ logref }}</label
        >
        <input
            class="shadow-xl w-1/2 h-10 rounded-xl border-double border-4 text-slate-800 pl-4"
            v-model="value"
        />
    </div>
</template>

<style scoped></style>
