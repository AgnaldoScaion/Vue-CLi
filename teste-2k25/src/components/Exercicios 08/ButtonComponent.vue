<script setup>
// Não é necessário script para este componente, pois ele apenas usa slots
</script>

<template>
  <button class="custom-button">
    <slot>Botão Padrão</slot>
  </button>
</template>

<style scoped>
.custom-button {
  padding: calc(var(--spacing-base) * 0.75) calc(var(--spacing-base) * 1.5);
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", monospace;
  cursor: none;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background: rgba(255, 215, 0, 0.8);
  transform: translateY(-2px);
  border-color: var(--border-glow);
  box-shadow: var(--glow-shadow);
}
</style>