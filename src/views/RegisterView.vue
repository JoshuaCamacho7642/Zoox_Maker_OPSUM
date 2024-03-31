<template>
  <div class="columns m-0">
    <div class="column is-12">
      <table class="table is-fullwidth has-background-light">
        <thead>
        <tr>
          <th><abbr title="Position">#No.</abbr></th>
          <th>Nombre</th>
          <th><abbr title="Lastname">Apellido</abbr></th>
          <th><abbr title="Email">Correo</abbr></th>
          <th><abbr title="Company">Compania</abbr></th>
          <th><abbr title="Aprove">Aceptar</abbr></th>
          <th><abbr title="Deny">Denegar</abbr></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(newUser, index) in newUserArray" :key="index"
            :class="{'is-selected': reacData.rowStatus && ( reacData.rowIndex === index ) }"
            @mouseover="reacData.rowStatus = true; reacData.rowIndex = index;"
            @mouseleave="reacData.rowStatus = false; reacData.rowIndex = index;">
          <th>{{ index + 1 }}</th>
          <td>{{ newUser.firstName }}</td>
          <td>{{ newUser.lastName }}</td>
          <td>{{ newUser.mail }}</td>
          <td>{{ newUser.company }}</td>
          <td>
            <button class="button is-active" @click="userStore.registeruser('ignacio')">
              Aceptar
            </button>
          </td>
          <td>
            <button class="button is-danger" @click="userStore.registeruser('ignacio')">
              Cancelar
            </button>
          </td>
        </tr>
        </tbody>
        <tfoot class="is-hidden">
        <tr>
          <th><abbr title="Position">#No.</abbr></th>
          <th>Nombre</th>
          <th><abbr title="Lastname">Apellido</abbr></th>
          <th><abbr title="Email">Correo</abbr></th>
          <th><abbr title="Company">Compania</abbr></th>
          <th><abbr title="Aprove">Aceptar</abbr></th>
          <th><abbr title="Deny">Denegar</abbr></th>
        </tr>
        </tfoot>
      </table>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a href="#" class="pagination-previous">Previous</a>
        <a href="#" class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li v-for="indexPag in 10 " :key="indexPag">
            <a href="#"
               class="pagination-link"
               :class="{ 'is-current' : indexPag === 1 }"
               aria-label="Goto page 1">
              {{ indexPag }}
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue"
import { useUserStore } from "@/stores/user.js"

const userStore = useUserStore()

let reacData = reactive({
  rowIndex: undefined,
  rowStatus: false
})

const compData = computed(() => {
  return reacData;
})

const newUserArray = [
  {
    firstName:"Ignacio",
    lastName:"Martinez",
    mail:"imartinez@jdco.com",
    company:"JD Company",
  },
  {
    firstName:"Joshua",
    lastName:"Camacho",
    mail:"JACR@Pineoak.com",
    company:"Pineoak Studio",
  },
  {
    firstName:"Samuel",
    lastName:"Ramirez",
    mail:"sramirez@jdco.com",
    company:"JD Company",
  },
  {
    firstName:"Bernardo",
    lastName:"Robles",
    mail:"bernardo.robles@bernico.com",
    company:"BernyCo",
  },
]
</script>