import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("testing");
  const user = reactive({
    username: "test",
    password: "test2",
  });
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment, user };
});
