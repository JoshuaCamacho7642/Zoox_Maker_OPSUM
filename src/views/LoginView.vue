<template>
  <div class="columns is-centered m-0">
    <div class="column is-4 pt-6">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <figure class="image is-128x128 mx-auto">
              <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </figure>
            <div class="field mt-6">
              <label class="label">Ingresa tus datos:</label>
              {{mayuscula}}
              {{userStore.minuscula}}
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-fullwidth is-primary is-color-white">Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
const mayuscula = computed(()=> userStore.userData.toUpperCase());
</script>