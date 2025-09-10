<script setup>
// Não é necessário script para este componente, pois ele apenas usa slots
</script>

<template>
  <div class="card-container">
    <div class="card-header">
      <slot name="header">Cabeçalho Padrão</slot>
    </div>
    <div class="card-content">
      <slot>Conteúdo Padrão</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Rodapé Padrão</slot>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-height: 300px;
  cursor: none;
}

.card-container:hover {
  transform: translateY(-10px);
  border-color: var(--border-glow);
  box-shadow: var(--card-shadow), var(--glow-shadow);
}

.card-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-container:hover::before {
  opacity: 1;
}

.card-header {
  padding: calc(var(--spacing-base) * 1.5);
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
  font-size: var(--font-size-large);
  font-weight: 600;
  color: var(--text-primary);
}

.card-content {
  padding: calc(var(--spacing-base) * 2);
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}

.card-footer {
  padding: calc(var(--spacing-base) * 1.5);
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border-color);
  font-size: calc(var(--font-size-base) * 0.9);
  color: var(--text-muted);
}
</style>