<script setup>
import { ref } from 'vue'

const estado = ref('ativo') // 'ativo', 'inativo', 'carregando'

function proximoEstado() {
  if (estado.value === 'ativo') estado.value = 'carregando'
  else if (estado.value === 'carregando') estado.value = 'inativo'
  else estado.value = 'ativo'
}
</script>

<template>
  <button
    :class="estado"
    @click="proximoEstado"
    :disabled="estado === 'inativo'"
  >
    <span v-if="estado === 'ativo'">Botão Ativo!</span>
    <span v-else-if="estado === 'carregando'">Carregando...</span>
    <span v-else>Botão Inativo!</span>
  </button>
</template>

<style scoped>
button {
  padding: 10px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.ativo {
  background: #4caf50;
  color: #fff;
}

.carregando {
  background: #ff9800;
  color: #fff;
  cursor: progress;
}

.inativo {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
}
</style>