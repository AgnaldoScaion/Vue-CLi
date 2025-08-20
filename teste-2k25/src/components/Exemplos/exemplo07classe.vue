<script setup>
import { ref } from 'vue'
let validacao =   false

let isError = true
let isActive = false

let isDisable = false

</script>



<template>
<!-- <p :class="validacao ? 'ok' : 'falha' "> Utilizando a diretiva class</p> -->
<p :class="{
'ok': isActive,
  'falha': isError
}">
  Utilizando a diretiva class</p>

  <button :disable="isDisable">Clique Aqui</button>

</template>

<style scoped>
.falha {
  color: red;
}

.ok {
  color: rgb(0, 255, 0);
}

.isDisable {
  background-color: gray;
  color: white;
  cursor: not-allowed;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
}

</style>