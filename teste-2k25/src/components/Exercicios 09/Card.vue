<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ titulo }}</h3>
      <p class="card-description">{{ descricao }}</p>
    </div>
    <div class="card-main">
      <slot>Conteúdo padrão aqui</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Rodapé padrão aqui</slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-height: 300px;
  cursor: none;
}

.card:hover {
  transform: translateY(-10px);
  border-color: var(--border-glow);
  box-shadow: var(--card-shadow), var(--glow-shadow);
}

.card::before {
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

.card:hover::before {
  opacity: 1;
}

.card-header {
  padding: calc(var(--spacing-base) * 1.5);
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.card-title {
  font-size: var(--font-size-large);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}

.card-main {
  padding: calc(var(--spacing-base) * 2);
  font-size: var(--font-size-base);
  color: var(--text-primary);
}

.card-footer {
  padding: calc(var(--spacing-base) * 1.5);
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border-color);
  font-size: calc(var(--font-size-base) * 0.9);
  color: var(--text-muted);
}
</style>