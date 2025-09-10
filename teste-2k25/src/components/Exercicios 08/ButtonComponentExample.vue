<script setup>
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

const clickCount = ref(0);
const handleClick = () => {
  clickCount.value += 1;
};
</script>

<template>
  <div class="example-container">
    <h2 class="example-title">Exemplo de Slot Padrão - Botão</h2>
    <p class="example-description">Este exemplo mostra um botão reutilizável com slot padrão. Clique para contar!</p>
    
    <div class="button-demo">
      <ButtonComponent @click="handleClick">
        Clique Aqui ({{ clickCount }} cliques)
      </ButtonComponent>
      <p class="click-counter">Total de cliques: {{ clickCount }}</p>
    </div>
    
    <p class="example-note">O texto do botão é definido via slot. Sem slot, usa "Botão Padrão".</p>
  </div>
</template>

<style scoped>
.example-container {
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-primary);
}

.example-title {
  font-size: var(--font-size-large);
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.example-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.button-demo {
  margin-bottom: 1.5rem;
}

.click-counter {
  font-size: calc(var(--font-size-base) * 0.9);
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.example-note {
  font-size: calc(var(--font-size-base) * 0.85);
  color: var(--text-secondary);
  font-style: italic;
}
</style>