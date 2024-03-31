<template>
  <div class="columns is-multiline m-0">
    <div class="column is-12">
      <StandarHero/>
    </div>
    <div class="column is-12">
      <h1>Home</h1>
      <p>{{ userStore.userData}}</p>
    </div>
  </div>
</template>
<script setup>
import StandarHero from "@/elements/StandarHero.vue";
import { useUserStore } from "../stores/user.js"

const userStore = useUserStore();
</script>