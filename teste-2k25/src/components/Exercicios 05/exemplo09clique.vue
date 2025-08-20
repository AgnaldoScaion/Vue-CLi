<script setup>
import { ref } from 'vue'

const contador = ref(0)
const estado = ref('inativo') // 'inativo', 'ativo', 'carregando', 'finalizado'

function incrementar() {
  if (estado.value === 'carregando' || estado.value === 'finalizado') return
  estado.value = 'carregando'
  setTimeout(() => {
    contador.value++
    if (contador.value >= 5) {
      estado.value = 'finalizado'
    } else {
      estado.value = 'ativo'
    }
  }, 1000)
}

function decrementar() {
  if (estado.value === 'carregando' || estado.value === 'finalizado') return
  estado.value = 'carregando'
  setTimeout(() => {
    if (contador.value > 0) contador.value--
    estado.value = 'ativo'
  }, 1000)
}

function resetar() {
  if (estado.value === 'carregando') return
  contador.value = 0
  estado.value = 'inativo'
}

function inativar() {
  if (estado.value === 'carregando') return
  estado.value = 'inativo'
}
</script>

<template>
  <div>
    <button
      :class="['botao', estado]"
      @click="incrementar"
      :disabled="estado === 'carregando' || estado === 'finalizado'"
    >
      +
    </button>
    <button
      :class="['botao', estado]"
      @click="decrementar"
      :disabled="estado === 'carregando' || estado === 'finalizado' || contador === 0"
    >
      -
    </button>
    <span style="margin: 0 10px;">
      <span v-if="estado === 'carregando'">Carregando...</span>
      <span v-else-if="estado === 'finalizado'">Limite atingido! ({{ contador }})</span>
      <span v-else-if="estado === 'ativo'">Ativo: {{ contador }}</span>
      <span v-else>Inativo: {{ contador }}</span>
    </span>
    <button
      class="botao reset"
      @click="resetar"
      :disabled="estado === 'carregando'"
    >
      Resetar
    </button>
    <button
      class="botao"
      style="background: #9e9e9e; color: #fff;"
      @click="inativar"
      :disabled="estado === 'carregando' || estado === 'inativo'"
    >
      Inativar
    </button>
  </div>
</template>

<style scoped>
.botao {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  margin: 5px;
  border-radius: 6px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
}
.botao.inativo {
  background: #eee;
  color: #888;
}
.botao.ativo {
  background: #4caf50;
  color: #fff;
}
.botao.carregando {
  background: #ff9800;
  color: #fff;
  cursor: wait;
}
.botao.finalizado {
  background: #607d8b;
  color: #fff;
  cursor: not-allowed;
}
.botao.reset {
  background: #f44336;
  color: #fff;
}
.botao:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>