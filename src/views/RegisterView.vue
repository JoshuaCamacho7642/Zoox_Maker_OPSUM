<template>
  <div>
    <h1>

    </h1>
    <button @click="userStore.registeruser('ignacio')">
      Ingresar
    </button>
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/user.js"
const userStore = useUserStore();
</script>