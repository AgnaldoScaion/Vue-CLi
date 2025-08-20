<script setup>
import { ref } from 'vue'
let inputValue = ref('')

function mensagem() {
  alert(`Executando a função: ${inputValue.value}`)
}
</script>

<template>
  <div class="container">
    <input
      type="text"
      @keyup.enter="mensagem"
      v-model="inputValue"
      placeholder="Digite algo e pressione Enter"
      class="styled-input"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.styled-input {
  padding: 10px 16px;
  border: 1px solid #616465;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  width: 320px;
  box-sizing: border-box;
}

.styled-input:focus {
  border-color: #0984e3;
  background: #919596;
}
</style>