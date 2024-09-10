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

        <MyButton @myButton="emitHandler" :title="btnTitle" />
        <br />
        <!-- <a>V-For Testing</a>
        <ul>
            <li v-for="(city, index) in cities" :key="index">
                {{ city }} {{ index }}
            </li>
        </ul> -->
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import MyButton from "../components/MyButton.vue";
const route = useRoute();
const id = route.params.id;
const logref = ref<string>("NULL");
const value = ref<string>("test");
const btnTitle = ref<string>("Click me");
const cities = ref<string[]>([
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
    "San Francisco",
    "Boston",
    "Seattle",
    "Denver",
    "Atlanta",
]);

watch(value, (newValue: string, oldValue: string) => {
    if (newValue) {
        logref.value = "update";
    } else if (newValue.length == 0) {
        logref.value = "please fill input";
    } else {
        logref.value = "do something";
    }
});

type ClickPayload = {
    message: string;
    timestamp: number;
};

const emitHandler = (payload: ClickPayload): void => {
    console.log("Received notification:", payload.message);
    console.log("Timestamp:", payload.timestamp);
    value.value = payload.message;
};
</script>

<style scoped></style>
