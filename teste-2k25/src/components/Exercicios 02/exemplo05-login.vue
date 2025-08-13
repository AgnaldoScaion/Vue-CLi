<script setup>
import { ref } from 'vue'

const usuarioLogado = ref(false)

const toggleLogin = () => {
  usuarioLogado.value = !usuarioLogado.value
}
</script>

<template>
  <div class="exercise-container">
    <div class="login-status" :class="{ logged: usuarioLogado }">
      {{ usuarioLogado ? '✅ Bem-vindo!' : '🔒 Faça Login' }}
    </div>
    <button @click="toggleLogin" class="login-button">
      {{ usuarioLogado ? 'Logout' : 'Login' }}
    </button>
  </div>
</template>

<style scoped>
.exercise-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.login-status {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: rgba(255, 0, 0, 0.1);
  color: #ff5252;
  font-weight: bold;
  transition: all 0.3s ease;
}

.login-status.logged {
  background-color: rgba(0, 200, 83, 0.1);
  color: #00c853;
}

.login-button {
  padding: 0.5rem 1.5rem;
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: rgba(255, 215, 0, 0.8);
}
</style>