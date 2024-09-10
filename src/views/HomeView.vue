<script setup lang="ts">
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import CustomModal from "../components/CustomModal.vue";
import CustomDivider from "../components/CustomDivider.vue";
const rememberValue = ref<boolean>(true);
const isModalVisible = ref<boolean>(false);

const openModal = () => {
    isModalVisible.value = true;
};

const closeModal = () => {
    information.username = "";
    information.password = "";
    isModalVisible.value = false;
};

interface Information {
    username: string;
    password: string;
}

const information = reactive<Information>({
    username: "",
    password: "",
});

const switchRememberVal = () => {
    rememberValue.value = !rememberValue.value;
};
</script>
<template>
    <div class="container-fluid mx-auto">
        <div class="flex flex-row min-h-screen">
            <div class="basis-2/5 lg:basis-3/5 bg-slate-200">
                <img
                    src="../assets/mockImg.png"
                    class="w-full h-full object-cover"
                    alt="mock img "
                />
            </div>

            <!-- right login form -->
            <div class="basis-3/5 lg:basis-2/5 bg-white min-h-screen">
                <div
                    class="flex flex-col items-center justify-center min-h-screen"
                >
                    <div class="flex flex-col items-center text-center">
                        <img
                            src="../assets/logo.png"
                            class="w-36 my-4"
                            alt="Logo"
                        />
                        <h1 class="font-bold text-3xl">Welcome to Choco CDP</h1>
                        <div class="my-3">
                            <h2 class="font-normal text-slate-500 text-md">
                                Please Login. You need to login to access this
                                page
                            </h2>
                            <h2 class="font-normal text-slate-500 text-md">
                                Please enter your username and password and
                                click login
                            </h2>
                        </div>
                    </div>
                    <!-- login -->
                    <div
                        class="flex flex-col items-center mt-4 p-4 w-full max-w-md"
                    >
                        <input
                            type="text"
                            placeholder="Username"
                            v-model="information.username"
                            class="border-b-2 border-gray-300 w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            v-model="information.password"
                            class="border-b-2 border-gray-300 w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-2"
                        />
                        <!-- below line -->
                        <div class="flex flex-row justify-between w-full mt-2">
                            <div
                                class="flex align-center"
                                @click="switchRememberVal"
                            >
                                <input
                                    type="checkbox"
                                    class="mr-2 accent-blue-500"
                                    :checked="rememberValue"
                                />
                                <span class="text-blue-500">Remember me</span>
                            </div>
                            <RouterLink to="/forgetPassword">
                                <a class="text-blue-500">Forgot Password?</a>
                            </RouterLink>
                        </div>
                        <button
                            class="p-3 shadow-sm hover:bg-blue-600 rounded-lg w-full my-4 bg-blue-500 text-white"
                            @click="openModal"
                        >
                            login
                        </button>
                        <CustomDivider middle="" />
                        <RouterLink to="/playground"
                            ><a class="text-slate-500 hover:text-blue-600"
                                >Playground</a
                            ></RouterLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CustomModal
        :isVisible="isModalVisible"
        @close="closeModal"
        @keydown.esc="closeModal"
    >
        <div class="bg-slate-500 flex flex-col text-center">
            <!-- <label class="font-bold">ChocoCDP AUthendicator</label>
            <label
                >ChocoCDP เพิ่มความปลอดภัยบัญชีของคุณ<br />ด้วยขั้นตอนยืนยันตัวตน
                2 ขั้น (Two-Factor AUthendication)</label
            > -->
        </div>
        <!-- <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        Close Modal </button> -->
    </CustomModal>
</template>
