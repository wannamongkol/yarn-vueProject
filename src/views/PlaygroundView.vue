<script setup lang="ts">
import { reactive, ref , watch} from "vue";
import {useRoute} from 'vue-router'
import CustomInput from "../components/CustomInput.vue"
const route = useRoute()
const id = route.params.id

const value = ref('')


</script>
<template>
    <div v-if="id">true</div>
    <div v-else>false</div>
    
    <input class="shadow-xl"/>
   <CustomInput/>
</template>
     

<style scoped></style>